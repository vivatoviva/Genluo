import React,{ Component } from 'react'
import WithLink from '../WithLink'


class Pagination extends Component {
  state = {
    currentIndex: 1,
    pageSum: 1,
  }

  handleClick = (currentIndex) => {
    this.setState({
      currentIndex,
    })
    this.props.onPageChange && this.props.onPageChange(currentIndex);
  }

  createPage = ({text, value=1, isDisabled=false,name='',toValue=value}) => ({
    text, // 显示的值
    toValue, // 跳转的值
    isDisabled, // 是否禁止点击
    name, // 
  })

  renderLi = () => {
    let currentIndex =  this.props.pagination ? parseInt(this.props.pagination.page) : 1;
    let pageSum = this.props.pagination ? this.props.pagination.pageNum : 1;

    pageSum = Math.ceil(pageSum / 10);
    let nextMax = currentIndex + 2;
    let lastMin = currentIndex - 2;
    // 生成页码对象
    const page = this.createPage;

    let lis = [];
    // 页面最少5个项目
    if(nextMax<5){
      nextMax = 5>pageSum? pageSum:5
    }
    if(lastMin>pageSum-5) {
      lastMin = lastMin>pageSum ? lastMin : pageSum-5
    }
    // 渲染前面
    if(lastMin>=3) {
      lis = lis.concat([
              page({text:1, toValue:1}),
              page({text:'...', toValue: currentIndex-1, name:'lastomit omit'})
            ])
      for(let i = lastMin; i<=currentIndex; i++) {
        lis.push(page({text: i,toValue: i}))
      }
    } else {
      for(let i = 1; i<=currentIndex;i++) {
        lis.push(page({text: i, toValue: i}))
      }
    }
    // 渲染后面
    if(nextMax<pageSum-2) {
      for(let i = currentIndex+1; i<=nextMax; i++) {
        lis.push(page({text: i,toValue: i}));
      }
      lis = lis.concat([
              page({text: '...', toValue: currentIndex+1, name: 'nextomit omit'}),
              page({text: pageSum, toValue: pageSum})
            ])
    } else {
      for(let i = currentIndex+1; i<=pageSum;i++) {
        lis.push(page({text:i, toValue: i}))
      }
    }
    // 箭头判断
    if(currentIndex===1) {
      lis.unshift(page({text: '<',toValue:1, isDisabled: true}))
    } else {
      lis.unshift(page({text: '<', toValue:currentIndex-1}))
    }
    if(currentIndex===pageSum) {
      lis.push(page({text: '>', toValue: currentIndex, isDisabled: true}))
    } else {
      lis.push(page({text: '>', toValue: currentIndex+1}))
    }

    return lis.map((item, index) =>{
      const className = [item.name];
      if(item.toValue === currentIndex && item.toValue === item.text) className.push('nowIndex');
      if(item.isDisabled) className.push('disabled');
      const { domain, paramName } = this.props;
      return (
        <li
          className={className.join(' ')}
          onClick={item.func}
        >
          {
            !(className.includes('disabled') || className.includes('nowIndex')) ? 
              <WithLink
                href={`${domain}`}
                paramsData={{[paramName]: item.toValue}}
                onClick={this.handleClick}
              >
                <a>{item.text}</a>
              </WithLink> : item.text
          }
          <style jsx>{`
          li {
            width: 25px;
            height: 25px;
            display: inline-block;
            text-align: center;
            line-height: 25px;
            color: #555;
            margin: 0 5px;
            cursor: pointer;
            position: relative;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          li:hover::after {
            content: "";
            display: block;
            position: absolute;
            top: -1px;
            width: 100%;
            height: 2px;
            background-color: #ccc;
          }
          li a {
            display: block;
          }
          .nowIndex {
            background-color: #ccc;
            color: #fff;
            cursor: unset;
          }
          .disabled {
            cursor: not-allowed;
          }
          .disabled:hover::after {
            background-color: transparent;
          }
          li.lastomit:hover::before {
            opacity: 1;
          }
          li.lastomit::before {
            content: '<<'
          }
          li.nextomit:hover::before {
            opacity: 1;
          }
          li.nextomit::before {
            content: ">>"
          }
          li.omit::before {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            background-color: #fff;
            opacity: 0;
            transition: 500ms all ease;
          }
          `}</style>
        </li>
      )
    })
  }

  render() {

    return (
      <div>
        <ul>
          {
            this.renderLi()
          }
        </ul>
        <style jsx>{`
          ul {
            text-align: center;
            border-top: 1px solid #ccc;
          }
        `}</style>
      </div>
    )
  }
}

export default Pagination;
