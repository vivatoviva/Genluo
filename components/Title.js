import React from 'react'

export default class Title extends React.Component {
  render() {
    return <div>
      <h1><span>前端之巅</span></h1>
      <div className="data">
        <ul>
          <li>发表于：2018年9月5日</li>
          <li>更新于：2018年9月6日</li>
          <li>分类于： web</li>
          <li>阅读次数：300</li>
        </ul>
      </div>
      <style jsx>{`
        h1 {
          text-align: center;
          font-weight: 500;
          margin-bottom: 20px;
        }
        ul {
          display: flex;
          justify-content: center;

        }
        li {
          padding: 0 10px 0 10px;
          line-height: 1;
          color: rgb(153, 153, 153)
        }
        li + li {
          border-left: 1.5px solid rgb(153, 153, 153);
        }
        h1 span:hover {
          border-bottom: 2px solid #000;
        }
      `}</style>
    </div>
  }
}