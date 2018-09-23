import React, {Component} from 'react';
import WithLink from './WithLink'
import { TimeTool } from '../utils/time'
class Item extends Component {
  render() {
    const { size="normal", time, children, color="#bbb", isTitle=false, isHead=false, data } = this.props;
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
          isTitle ? children : <span><WithLink
            paramsData={data}
            as={`/blog/${data['article_id']}`}
            href='/blog/article'>
            <a>{children}</a> 
            </WithLink></span>
        }
        <style jsx>{`
          div {
            box-sizing: border-box;
            width: 100%;
            line-height: 30px;
            padding: ${isHead ? "0px 0px " + sizetopx * 2 + 'px' : `${sizetopx * 2}px 0px`};
            font-size: ${sizetopx*1.5}px;
            border-bottom: ${!isHead ? `1px dotted rgb(224, 204, 204)`: ''};
            transition: 300ms all ease;
          }
          div span {
            display: inline-block;
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
  dealData = () => {
    const { list } = this.props;
    const data = {};
    // 处理数据( createTime)
    for(const item of list) {
      const time = new TimeTool(item['create_time']);
      if(!data[time.getYear()]) { data[time.getYear()] = []}
      data[time.getYear()].push({...item, time: time.getDate()}) 
    }
    return data;
  }
   
  render() {
    const { children, list } = this.props;
    const data = this.dealData(list)
    
    return (
      <div>
        <Item isTitle={true} isHead={true}>嗯..! 目前共计 10 篇日志。 继续努力。</Item>
        {
          Object.keys(data).map(key => {
            return (
              <>
                <Item size='large' isTitle={true}>{key}</Item>
                {
                  data[key].map(item => <Item data={item} time={item.time}>{item.title}</Item>)
                }
              </>
            )
          })
        }
        <style jsx>{`
          @media screen and (max-width: 1340px) {
            div {
              margin-left: 20px!important;
            }  
          }
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
