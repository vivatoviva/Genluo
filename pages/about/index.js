import React, {Component } from 'react'
import Content from '../../components/Content'
export default class extends Component {
  render() {
    return (
      <div className="wraper">
        <div className="content">
          <Content 
            content={`
# 我是谁？
我叫李根，但我更喜欢别人叫我Genluo，在生活中喜欢一个人静静的看书，喜欢独处，喜欢文字，每次进书店经常要待上两个小时，相比程序，我更加喜欢生活
希望做一个的生活有点小情调的人。想去旅游，缺少一个她

* 去旅游
* 去上海东方明珠上看看

### 前端

            `}
          />
        </div>
        <style jsx>{`
          .content {
            width: 1024px;
            margin: 0 auto;

          }
        `}</style>
      </div>
    )
  }
}