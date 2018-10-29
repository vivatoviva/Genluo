import React from 'react'

export default class extends React.PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <div>
        <h3>前端进行时</h3>
        <p>现在学习相关知识会不会进行伤心啊现在学习相关知识会不会进行伤心啊现在学习相关知识会不会进行伤心啊现在学习相关知识会不会进行伤心啊现在学习相关知识会不会现在学习相关知识会不会进行伤心啊现在学习相关知识会不会进行伤心啊现在学习相关知识会不会进行伤心啊现在学习相关知识会不会进行伤心啊现在学习相关知识会不会进行伤心啊现在学习相关知识会不会进行伤心啊进行伤心啊现在学习相关知识会不会进行伤心啊</p>
        <style jsx>{`
          div {
            padding: 0 20px;
            cursor: pointer;
          }
          h3 {
            color: #555;
            text-decoration: none;
            outline: none;
            word-wrap: break-word;
            font-size: 20px;
            list-style: circle;
            cursor: pointer;
            position: relative;
            transition: 300ms all ease;
            text-decoration: underline;
          }
          h3::after {
            content: '';
            position: absolute;
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            left: -10px;
            top: 45%;
            background-color: #000;
          }
          p {
            border-bottom: 1px dashed #ccc;
            padding: 5px 0;
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
            font-size: 14px;
            line-height: 2;
          }
        `}</style>
      </div>
    )
  }
}