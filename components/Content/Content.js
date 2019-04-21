import React from 'react'
import mdUtils  from '../../utils/markdownToHtml'
import '../../static/prismjs/prism.js'
import Remarkable from 'remarkable';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.converter = new mdUtils.Converter(props.content);
  }

  handleContent = (i) => {
    const {onContentChange} = this.props;
    onContentChange && onContentChange(i)
  }

  componentDidMount() {
    const content = this.converter.content.map(item => item.title);
    window.addEventListener('scroll', (e) => {
      let i = 0;
      for(; i<content.length; i++) {
        if(elementVisible(content[i])) break;
      }
      if(i !== content.length) {
        this.handleContent(i);
      }
    })

    function elementVisible(id) {
      const ele = document.getElementById(id)
      if(!ele) return false;
      //滚动条高度+视窗高度 = 可见区域底部高度
      var visibleBottom = window.scrollY + document.documentElement.clientHeight;
      //可见区域顶部高度
      var visibleTop = window.scrollY;
      var centerY = ele.offsetTop+(ele.offsetHeight/2);
      if(centerY>visibleTop&&centerY<visibleBottom){
          return true;
      }else{
          return false;
      }
    }
  }

  render() {
    const { content } = this.props;
    console.log(content);
    const md = new Remarkable();
    const html = md.render(content);

    return (
      <div>
        <div
        style={{}}
          dangerouslySetInnerHTML={{
            __html: html
          }}></div>
      </div>
    )
  }
}