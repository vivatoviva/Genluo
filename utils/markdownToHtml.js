// 传入md 转化成html

var md = '# xianzai xianzaij \n xian *'

const regex = /^( {0,3}#+ )|( {0,}[\*|\-] )|( ?\-{3,})|( {0,3}```)/g

// 判断是块级标签
const isBlock = str => {

  return regex.test(str);
  
}

class Converter {
  // 转化成html标记语言
  toHtml(md) {
    return this.blockToHtml(this.toBlock(md))
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
      if(/^( {0,3}`{3,3})/g.test(mdarr[i])) {
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
      console.log(item.match(regex))
      let blockIdentifident = item.match(regex) && item.match(regex)[0].trim();
      
      // #
      if(/#/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<h${blockIdentifident.length}>${item.replace(/^( {0,3}#+ )/g,'')}</h${blockIdentifident.length}>`)
        continue
      }
      // * | -
      if(/\*|\-/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<li>${item.replace(/^( {0,}[\*|\-] )/g,'')}</li>`)
        continue
      }
      // ---
      if(/-+/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<dl></dl>`)
        continue
      }
      // ```
      if(/```/g.test(blockIdentifident)) {
        blockHtmlArr.push(`<div class="code">${item.replace(/^( {0,3}```)/g, '')}</div>`)
        continue
      }
      // 行内标签
      blockHtmlArr.push(`<p>${item}</p>`)
    }
    return blockHtmlArr;
  }

  // 处理行行内标签
  inLineHtml(md) {
    
  }

}


const converter = new Converter();

console.log(converter.toHtml('# xianan \n x  **###** genge \n xianzai \n``` \n xianzaijing \n xian  \n```' ))
