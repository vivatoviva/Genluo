import React from 'react'
import mdUtils  from '../utils/markdownToHtml'

const md = '# 前端面试一波 \n 最近在面试前端，面过百度阿里感觉没什么都是过不了，但是现在学习其面试知识还是非常有挑战性的 \n *  *现在进行时* \n* 学习相关**数据算法** \n ``` \n function() {\n} \n ``` '
export default class Content extends React.Component {
  render() {
    return (
      <div>
        <div
        style={{}}
          dangerouslySetInnerHTML={{
            __html: mdUtils.toHtml(md)
          }}></div>
      </div>
    )
  }
}