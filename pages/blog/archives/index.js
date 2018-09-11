import React from 'react';
import Layout from '../../../layout/BlogLayout'
import TimeLine from '../../../components/TimeLine'

const data = [{
  id: 1,
  name: 'web页面进行渲染',
  timestamp: '',
}, {
  id: 2,
  name: 'web性能优化之缓存',
  timestamp: '',
}]
class ActivePage extends React.Component {
  render() {
    return (
      <Layout navIndex={3}>
        <TimeLine />
        
      </Layout>
    )
  }
}
export default ActivePage;
