import React, {Component } from 'react'
import Content from '../../components/Content'
import Head from '../../components/Head'
import Modal from '../../components/Modal'

export default class extends Component {
  render() {
    return (
      <div className="wraper">
        <Head title="关于"></Head>
        <Modal
          title="Genluo"
          visible={false}
          >
          前端之巅
        </Modal>
        <div className="content">
          <Content 
            content={`
# 我是谁？
我叫**李根**，但我更喜欢别人叫我Genluo，在生活中喜欢一个人静静的看书，喜欢独处，喜欢文字，每次进书店经常要待上两个小时，相比程序，我更加喜欢生活
我叫李根，但我更喜欢别人叫我Genluo，在生活中喜欢一个人静静的看书，喜欢独处，喜欢文字，每次进书店经常要待上两个小时，相比程序，我更加喜欢生活
我叫李根，但我更喜欢别人叫我Genluo，在生活中喜欢一个人静静的看书，喜欢独处，喜欢文字，每次进书店经常要待上两个小时，相比程序，我更加喜欢生活
我叫李根，但我更喜欢别人叫我Genluo，在生活中喜欢一个人静静的看书，喜欢独处，喜欢文字，每次进书店经常要待上两个小时，相比程序，我更加喜欢生活
我叫李根，但我更喜欢别人叫我Genluo，在生活中喜欢一个人静静的看书，喜欢独处，喜欢文字，每次进书店经常要待上两个小时，相比程序，我更加喜欢生活
我叫李根，但我更喜欢别人叫我Genluo，在生活中喜欢一个人静静的看书，喜欢独处，喜欢文字，每次进书店经常要待上两个小时，相比程序，我更加喜欢生活
我叫李根，但我更喜欢别人叫我Genluo，在生活中喜欢一个人静静的看书，喜欢独处，喜欢文字，每次进书店经常要待上两个小时，相比程序，我更加喜欢生活
我叫李根，但我更喜欢别人叫我Genluo，在生活中喜欢一个人静静的看书，喜欢独处，喜欢文字，每次进书店经常要待上两个小时，相比程序，我更加喜欢生活
我叫李根，但我更喜欢别人叫我Genluo，在生活中喜欢一个人静静的看书，喜欢独处，喜欢文字，每次进书店经常要待上两个小时，相比程序，我更加喜欢生活
希望做一个的生活有点小情调的人。想去旅游

* 去旅游
* 去上海东方明珠上看看

### 前端

            `}
          />
        </div>
        <style jsx>{`
          .content {
            padding: 20px;
            max-width: 1024px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
}