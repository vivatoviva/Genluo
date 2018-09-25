import React from 'react';
import Layout from '../../../layout/BlogLayout'
import Tags from '../../../components/Tags'
import http from '../../../utils/http'

class TagPage extends React.Component {
  static async getInitialProps() {
    const { data }  = await http.request('/api/tag/list')
    return { data }
  }
  render() {
    const { data } = this.props;
    return (
      <Layout
        navIndex={1}
        title="标签"
      >
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
