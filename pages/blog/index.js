import Layout from '../../layout/BlogLayout'
import Article from '../../components/Article'
import Pagination from '../../components/Pagination'
import http from '../../utils/http'

import React from 'react';

class IndexPage extends React.Component {
  
  static async getInitialProps({ req, query, pathname }) {
    const { page=1 } = query;
    const { data: { pagination, list } } = await http.request('/api/article/list', {
      body: JSON.stringify({
        page: page,
      })
    })
    return { pagination, list }
  }

  render() {
    const { pagination, list } = this.props;
    var a = 1;
    return (
      <Layout
        navIndex={0}
      >
        {
          list.map((item, index) => 
            <Article
              key={index}
              data={item}
              isDividing={index === list.length - 1}
            />)
        }
        <Pagination
          pagination={pagination}
          domain="/blog"
          paramName="page"
        />
      </Layout>
    )
  }
}

export default IndexPage;