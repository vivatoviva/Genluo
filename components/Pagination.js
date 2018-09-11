import React,{ Component } from 'react'

class Pagination extends Component {
  state = {
    currentIndex: this.props.index ? this.props.index : 1,
    pageSum: this.props.pageSum ? this.props.pageSum : 20,
  }

  handleClick = (currentIndex) => {
    this.setState({
      currentIndex,
    })
  }
  
  renderLi = () => {
    const { currentIndex, pageSum } = this.state;
    let nextMax = currentIndex + 2;
    let lastMin = currentIndex - 2;
    // 生成页码对象
    const page = ({value=1, isDisabled=false,name='',toValue=value}) => ({
      value, //页码值
      isDisabled, // 是否禁止
      name,
      func: this.handleClick.bind(this, toValue), // 点击触发函数
    })

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
      lis = lis.concat([page({value:1}), page({value:'...', toValue: currentIndex-1, name:'lastomit omit'})])
      for(let i = lastMin; i<=currentIndex; i++) {
        lis.push(page({value:i}))
      }
    } else {
      for(let i = 1; i<=currentIndex;i++) {
        lis.push(page({value:i}))
      }
    }
    // 渲染后面
    if(nextMax<pageSum-2) {
      for(let i = currentIndex+1; i<=nextMax; i++) {
        lis.push(page({value: i}));
      }
      lis = lis.concat([ page({value: '...', toValue: currentIndex+1, name: 'nextomit omit'}), page({value: pageSum})])
    } else {
      for(let i = currentIndex+1; i<=pageSum;i++) {
        lis.push(page({value: i}))
      }
    }
    // 箭头判断
    if(currentIndex===1) {
      lis.unshift(page({value: '<',toValue:1, isDisabled: true}))
    } else {
      lis.unshift(page({value: '<', toValue:currentIndex-1}))
    }
    if(currentIndex===pageSum) {
      lis.push(page({value: '>', toValue: currentIndex, isDisabled: true}))
    } else {
      lis.push(page({value: '>', toValue: currentIndex+1}))
    }

    return lis.map((item, index) =>{
      // 判断CLassname
      const className = [item.name];
      if(item.value === currentIndex) className.push('nowIndex');
      if(item.isDisabled) className.push('disabled');
      return (
        <li
          className={className.join(' ')}
          onClick={item.func}
        >
          {item.value}
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
    const { currentIndex } = this.state;
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
