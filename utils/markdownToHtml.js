
const regex = /^( {0,3}#+ )|^( {0,}[\*|\-] )|^( ?\-{3,})|^( {0,3}```)/g

// 判断是块级标签
const isBlock = str => {
  const regex = /^( {0,3}#+ )|^( {0,}[\*|\-] )|^( ?\-{3,})|^( {0,3}```)/g
  return regex.test(str);
}

class Converter {
  
  constructor(markdown) {
    this.data = {};
    this.markdown = markdown;
  }

  toHtml = (md) => {
    // 去除data相关片段
    const { markdown, data } = this.getGlobalData(this.markdown);
    // 将代码进行分割成块
    const block = this.toBlock(markdown);
    // 对于每块进行处理，形成标签
    const blockHtml = this.blockToHtml(block);
    // 将块标签转化成行内标签
    const inlineHtml = this.inLineHtml(blockHtml);
    // 返回拼装的html代码
    return inlineHtml.join('');
  }

  // 渲染生成富文本，用于添加添加样式
  toRich(md) {
    
  }

  /**
   *
   * 提取全局数据，然后将之清除
   * @memberof Converter
   * @param md md string
   * @return { markdown, data }
   */
  getGlobalData = (md) => {
    let regex = /\[(\d+)\]: ?([\S]*)/g;
    let tempR;
    let data = {};
    while( tempR = regex.exec(md))
    {
      data[tempR[1]] = tempR[2]
    }
    const markdown = md.replace(/\[(\d+)\]: ?([\S]*)/g, '')
    this.data = data;
    return { markdown, data }
  }

  toBlock(md) {
    let mdarr = md.split('\n').filter(item => item.trim().length !== 0)
    let blockMD = [];
    let identification = false;
    // 分割形成块级元素
    for(let i = 0; i < mdarr.length; i++) {
      // 判断当前是不是块级元素，如果是的话判他的上一个是不是块级元素，不是的话进行合并
      // 处理``` 格式
      if(/^( {0,3}`{3})/g.test(mdarr[i])) {
        identification = !identification;
        if(identification) blockMD.push(mdarr[i]);
        continue;
      }
      if(identification) {
        blockMD[blockMD.length-1] += '\n' + mdarr[i]
        continue;
      }
      // 处table逻辑
      if(/^\|/g.test(mdarr[i])) {
        if(/^\|\-\-|/g.test(mdarr[i+1])) {
          blockMD.push(mdarr[i]);
          i+=2;
          for(;i<mdarr.length;i++) {
            if(/^\|/g.test(mdarr[i])) {
              blockMD[blockMD.length - 1] += '\n' + mdarr[i]; 
            } else {
              break;
            }
          }
          mdarr[i] && blockMD.push(mdarr[i]);
          continue;
        }
      }
      if(i>0 && !isBlock(mdarr[i])) {
        if(!isBlock(mdarr[i-1])) {
          blockMD[blockMD.length - 1] += ' ' + mdarr[i];
          continue;
        }
      }
      blockMD.push(mdarr[i])
    }
    return blockMD
  }

  // 将块级转化成html
  blockToHtml = (blockArr) => {
    const blockHtmlArr = [];
    for(const item of blockArr) {
      let blockIdentifident = item.match(regex) && item.match(regex)[0].trim();
      // #
      if(/#/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<h${blockIdentifident.length} class='ace ace-h'>${item.replace(/^( {0,3}#+ )/g,'')}</h${blockIdentifident.length}>`)
        continue
      }
      // * | -
      if(/^ {0,3}\*|(\-^\-)/g.test(item)) {
        blockHtmlArr.push(`<li class='ace ace-li'>${item.replace(/^( {0,}[\*|\-] )/g,'')}</li>`)
        continue
      }
      if(/^ {4,6}\*|(\-^\-)/g.test(item)) {
        blockHtmlArr.push(`<li class='ace ace-li ace-li-2'>${item.replace(/^( {0,}[\*|\-] )/g,'')}</li>`)
        continue
      }
      if(/^ {7,9}\*|(\-^\-)/g.test(item)) {
        blockHtmlArr.push(`<li class='ace ace-li ace-li-3'>${item.replace(/^( {0,}[\*|\-] )/g,'')}</li>`)
        continue
      }

      // ---
      if(/-+/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<hr>`)
        continue
      }
      // ```
      if(/```/g.test(blockIdentifident)) {
        // 使用插件进行代码格式化
        blockHtmlArr.push(`<pre class="line-numbers ace ace-code"><code class="language-javascript line-numbers">${item.replace(/(```)/g, '')}</code></pre>`)
        // blockHtmlArr.push(`<pre class="ace ace-code">${item.replace(/(```)/g, '')}</pre>`)
        continue
      }

      // table

      
      // 行内标签
      blockHtmlArr.push(this.specialHtml(item));
    }
    return blockHtmlArr;
  }

  // 处理特殊行内标签
  specialHtml = md => {
    // > 处理这种标签
    if(/^( {0,3}> )/g.test(md)) {
      return `<div class='ace ace-ref ace-p'>${md.replace(/^( {0,3}> )/g, '')}</div>`
    }
    if(/^\|/g.test(md)) {
      // 对table进行渲染

      const rows = md.split('\n');
      const regex = /\|([\s|\S]*?)\|/g;
      let match = null;
      let table = ''
      for(let i = 0; i < rows.length; i++) {
        const str = '';
        while(match  = regex.exec(rows[i])) {
          let content = match[1];
          str += `<div class='ace ace-table-cell'>${content}</div>`
        }
        table += `<div class="ace ace-table-row">${str}</div>`
      }
      return `<div class='ace ace-table'>${table}</div>`
    }
    return `<p class='ace ace-p'>${md}</p>`
  }

  // 处理行行内标签
  inLineHtml = (md) => {
    const data = this.data;
    const html = [this.getHtmlStyle()];
    for(let item of md) {
      let str = item;
      if(str.includes('<pre class="ace ace-code">')) {
        html.push(str)
        continue
      }
      // table 
      // *xianzia*
      str = str.replace(/[^\*]\*([^\*]+)\*/g, '<i>$1</i>')
      // **xianzai*
      str = str.replace(/\*{2}([^\*]\S*)\*{2}/g, '<strong>$1</strong>')
      str = str.replace(/[^\`]\`([^\`]+)\`/g, `<code class='ace ace-code-inline'>$1</code>`)
 
      str = str.replace(/\[([\s|\S]*)\]\[\D+\]/g, `<a href="$1" class="ace ace-link">$1</a>`)

      str = str.replace(/\!\[\S?\]\((\S+)\)/g, `<img src="$1" class="ace ace-img"></img>`)
      // 图片加载
      if(/\!\[[\S]*\]\[(\d+)\]/g.test(str)) {
        let regex = /\!\[([\S]*)\]\[(\d+)\]/g
        let match;
        while(match  = regex.exec(str)) {
          let href = data[match[2]];
          let name = match[1];
          str = str.replace(/\!\[[\S]*\]\[(\d+)\]/, `<img src="${href}" class="ace ace-img" alt="${name}"></img>`);
        }
      }
      // 链接加载
      if(/\[([\s|\S]*)\]\[\d+\]/g.test(str)) {
        let regex = /\[([\s|\S]*)\]\[(\d+)\]/g
        let match  = regex.exec(str);
        let href = data[match[2]];
        let name = match[1];
        str = str.replace(/\[([\s|\S]*)\]\[\d+\]/g, `<a href=${href} class="ace ace-link">${name}</a>`);
      }
      html.push(str)
    }
    return html;
  }

  getHtmlStyle() {
    return `
      <style>
      .ace-code-inline {
        display:inline-block;
        background-color:#eee;
        padding: 3px 5px;
        line-height: 1;
        border-radius: 5px;
      }
      .ace-img {
        display: block;
        width: 100%;
      }
      .ace-link {
        color: #45B6F7;
      }
      .ace-ref {
        background-color: #eee;
        padding: 10px 10px;
        border-left: 2px solid yellow;
      }
      .ace-p, .ace-i, .ace-code, .ace-li{
        text-align: justify;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 16px;
        line-height: 2;
        color: #555;
      }
      .ace-li {
        line-height: 2;
        position: relative;
        padding-left: 20px;
      }
      .ace-li::after {
        content: '';
        display: block;
        position: absolute;
        top: 1.3ex;
        left: 0px;
        width: 6px;
        height: 6px;
        background-color: #000;
  	    border-radius: 50%;
      }
      .ace-li-2 {
        padding-left: 50px;
      }
      .ace-li-2::after {
        left: 30px;
        border:1px solid #000;
        background-color: #fff;
      }
      .ace-li-3 {
        padding-left:70px;
      }
      .ace-li-3::after {
        left: 50px;
        border:1px solid #000;
        border-radius: 0;
      }
      .ace-code {
        background-color: rgba(247, 247,247);
        padding: 5px 20px;
        font-size: 14px;
        display: block;
        box-sizing: border-box;
      }
      .ace-table {
        margin: 10px 0px;
        border:1px solid #eee;
        border-radius: 5px;
      }
      .ace-table-row {
        display: -webkit-flex; /* Safari */
        display: flex;
      }
      .ace-table-row:nth-child(odd) {
        background-color: #eee;
      }
      .ace-table-cell {
        flex:1;
        padding: 20px;
        border:1px solid rgb(100, 100, 100);
      }
      </style>
    `
  }
}

export default {
  Converter
};

