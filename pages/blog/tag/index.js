import React from 'react';
import Layout from '../../../layout/BlogLayout'
import Tags from '../../../components/Tags'
const data = [{
  id: 1,
  name: 'web',
  num: 20,
}, {
  id: 2,
  name: '前端',
  num: 90,
}, {
  id: 3,
  name: '服务器',
  num: 1,
}, {
  id: 4,
  name: '后端',
  num: 90,
}, {
  id: 5,
  name: 'linux',
  num: 50,
}, {
  id: 6,
  name: 'javascript',
  num: 30,
}, {
  id: 6,
  name: '集群',
  num: 150,
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
            margin-bottom: 50px;
          }
        `}</style>
      </Layout>
    )
  }
}
export default TagPage;
