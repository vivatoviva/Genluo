import React, {Component} from 'react';
import Link from 'next/link'

class Item extends Component {
  render() {
    const { size="normal", time, children, color="#bbb", isTitle=false, isHead=false } = this.props;
    let sizetopx = '10';
    switch(size) {
      case 'large': sizetopx = 15;break;
      case 'small': sizetopx = 5; break;
    }

    return (
      <div className={isTitle ? 'title' : 'notitle'}>
        <span className="dot"><i></i></span>
        <span className="time">{time}</span>
        {
          isTitle ? children : <Link href="id">{children}</Link>
        }
        <style jsx>{`
          div {
            line-height: 30px;
            padding: ${isHead ? "0px 0px " + sizetopx * 2 + 'px' : `${sizetopx * 2}px 0px`};
            font-size: ${sizetopx*1.5}px;
            border-bottom: ${!isHead ? `1px dotted rgb(224, 204, 204)`: ''};
            transition: 300ms all ease;
          }
          div.notitle:hover {
            border-bottom: 1px dotted #999;
          }
          div.notitle:hover i {
            background-color: #000;
          }
          .dot {
            display: inline-block;
            width: ${sizetopx}px;
            margin-right: 30px;
            line-height: 100%;
          }
          .dot i {
            display: block;
            width: 100%;
            padding-top: 100%;
            border-radius: 50%;
            background-color: ${color};
            position: relative;
            left: ${-sizetopx / 2 - 2}px;
            transition: 300ms all ease;
          }
          .time {
            margin-right: 15px;
            font-size: 12px;
          }
        `}</style>
      </div>
    )
  }
}

class TimeLine extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Item isTitle={true} isHead={true}>嗯..! 目前共计 25 篇日志。 继续努力。</Item>
        <Item size='large' isTitle={true}>2018</Item>
        <Item time="8-9">深入web渲染基础</Item>
        <Item time="8-9">深入web渲染基础</Item>
        <Item time="8-9">深入web渲染基础</Item>
        <Item time="8-9">深入web渲染基础</Item>
        <Item size='large' isTitle={true}>2017</Item>
        <Item time="8-9">深入web渲染基础</Item>
        <Item time="8-9">深入web渲染基础</Item>
        <Item time="8-9">深入web渲染基础</Item>
        <Item time="8-9">深入web渲染基础</Item>
        <style jsx>{`
          div {
            border-left: 4px solid #f5f5f5;
            margin-left: 55px;
            color: rgb(85, 85, 85);
          }
        `}</style>
      </div>
    )
  }
}

export { Item };
export default TimeLine;
