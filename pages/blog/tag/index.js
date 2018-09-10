import React from 'react';
import Layout from '../../../layout/BlogLayout'
import Tags from '../../../components/Tags'
const data = [{
  name: 'web',
  num: 100,
}, {
  name: '前端',
  num: 90,
}, {
  name: '服务器',
  num: 90,
}, {
  name: '后端',
  num: 90,
}, {
  name: 'linux',
  num: 90,
}, {
  name: 'js',
  num: 90,
}]
class TagPage extends React.Component {
  render() {
    return (
      <Layout navIndex={1}>
        <h1>Tags</h1>
        <div>
          <Tags items={data} />
        </div>
        <style jsx>{`
          h1 {
            text-align: center;
            margin-top: 50px;
            color: rgb(85, 85, 85);

          }
        `}</style>
      </Layout>
    )
  }
}
export default TagPage;
