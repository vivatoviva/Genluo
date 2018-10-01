import React from 'react'
import withItem from '../withItem';

const globalData = [{
  title: '前端工作室',
  level: 1
}, {
  title: '后端工作室',
  level: 2
}, {
  title: '全栈工作室',
  level: 2
}, {
  title: '全栈工作室',
  level: 2
}, {
  title: '全栈工作室',
  level: 1
}, {
  title: '全栈工作室',
  level: 5
}, {
  title: '全栈工作室',
  level: 7
}, {
  title: '全栈工作室',
  level: 2
}]

// 根据data将data调整成连续的

const adjust  = data => {
  let adjustData = data;
  let level = new Set([1,2,3,4,5,6,7]);
  // 判断没有使用那些等级
  data.map((item, index) => {
    if(level.has(item.level)) {
      level.delete(item.level)
    }
  })
  // 统一等级，进行划分
  if(level.size !== 0)  {
    for(let i = 7; i > 0; i--){
      if(level.has(i)) {
        adjustData = adjustData.map(item => {
          if(item.level>i) {
            item.level--;
          }
          return item;
        })
      }
    }
  }
  return adjustData;
}

class Structure extends React.PureComponent {
  render() {
    let { data, now } = this.props; 
    data = adjust(data);
    return (
      <div className="wrapper">
        <ul>
          {
            data.map((item, index) =>
              <li
                className={now === index ? `now level_${item.level}`: `level_${item.level}`}
                key={index}>
                <a href={`#${item.title}`}>{item.title}</a>
              </li>
            )
          }
        </ul>
        <style jsx>{`
          .wrapper {
            margin-top: 10px;
            box-sizing: border-box;
            width: 100%;
            padding: 10px 20px;
            background-color: #fff;
          }
          li {
            margin: 3px 0px;
            width: 100%;
            overflow: hidden; 
            white-space: nowrap; 
            text-overflow: ellipsis;
          }
          a {
            text-decoration: none;
            line-height: 1.5;
            position: relative;
            padding-left: 10px;
          }
          a::after {
            content: "";
            display: block;
            position: absolute;
            height: 5px;
            width: 5px;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            border-radius: 50%;
            background-color: #000;
          }
          .now {
            background-color: #eee;
          }
          .now a {
            color: #007fff;
          }
          li.level_1 {
            font-weight: bolder;
          }
          li.level_2 {
            padding-left: 10px;
          }
          li.level_3 {
            padding-left: 20px;
          }
          li.level_4 {
            padding-left: 30px;
          }
          li.level_5 {
            padding-left: 40px;
          }
          li.level_6 {
            padding-left: 50px;
          }
          li.level_7 {
            padding-left: 60px;
          }
        `}</style>
      </div>
    )
  }
}

export default withItem(Structure)
