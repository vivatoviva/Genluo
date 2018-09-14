// 传入md 转化成html

var md = '# xianzai xianzaij \n xian *'

const regex = /^( {0,3}#+ )|^( {0,}[\*|\-] )|^( ?\-{3,})|^( {0,3}```)/g

// 判断是块级标签
const isBlock = str => {
  const regex = /^( {0,3}#+ )|^( {0,}[\*|\-] )|^( ?\-{3,})|^( {0,3}```)/g
  return regex.test(str);
}

class Converter {
  // 转化成html标记语言
  toHtml = (md) => {
    const block = this.toBlock(md);
    const blockHtml = this.blockToHtml(block)
    const inlineHtml = this.inLineHtml(blockHtml);
  
    return inlineHtml.join('')
  }

  // 渲染生成富文本，用于添加添加样式
  toRich(md) {

  }

  toBlock(md) {
    let mdarr = md.split('\n').filter(item => item.trim().length !== 0)
    let blockMD = [];
    let identification = false;
    // 分割形成块级元素
    for(let i = 0; i < mdarr.length; i++) {
      // 判断当前是不是块级元素，如果是的话判他的上一个是不是块级元素，不是的话进行合并
      // 处理``` 格式
      
      if(identification) {
        blockMD[blockMD.length-1] += '\n' + mdarr[i]
        continue;
      }
      if(/^( {0,3}`{3})/g.test(mdarr[i])) {
        identification = !identification;
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
  blockToHtml(blockArr) {
    const blockHtmlArr = [];
    for(const item of blockArr) {
      let blockIdentifident = item.match(regex) && item.match(regex)[0].trim();

      // #
      if(/#/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<h${blockIdentifident.length} class='ace ace-h'>${item.replace(/^( {0,3}#+ )/g,'')}</h${blockIdentifident.length}>`)
        continue
      }
      // * | -
      if(/\*|\-/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<li class='ace ace-li'>${item.replace(/^( {0,}[\*|\-] )/g,'')}</li>`)
        continue
      }
      // ---
      if(/-+/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<hr>`)
        continue
      }
      // ```
      if(/```/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<pre class="ace ace-code">${item.replace(/(```)/g, '')}</pre>`)
        continue
      }
      // 行内标签
      blockHtmlArr.push(`<p class='ace ace-p'>${item}</p>`)
    }

    return blockHtmlArr;
  }

  // 处理行行内标签
  inLineHtml = (md) => {
    const html = [this.getHtmlStyle()];
    for(let item of md) {
      let str = item;
      if(str.includes('<pre class="ace ace-code">')) {
        html.push(str)
        continue
      }
      // *xianzia*
      str = str.replace(/[^\*]\*([^\*]+)\*/g, '<i>$1</i>')
      console.log(str, item)
      // **xianzai*
      str = str.replace(/\*{2}([^\*]\S*)\*{2}/g, '<strong>$1</strong>')

      html.push(str)
    }
    return html;
  }

  getHtmlStyle() {
    return `
      <style>
      .ace {

      }
      .ace-p, .ace-i, .ace-code, .ace-li {
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
        list-style: inside;
        line-height: 1;
      }
      .ace-code {
        background-color: rgba(247, 247,247);
        padding: 5px 20px;
        font-size: 14px;
        display: block;
        box-sizing: border-box;
      }
      </style>
    `
  }
}
const converter = new Converter();

export default {
  toHtml: converter.toHtml
};

