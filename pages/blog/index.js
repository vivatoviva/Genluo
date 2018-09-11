import Layout from '../../layout/BlogLayout'
import Article from '../../components/Article'
import Pagination from '../../components/Pagination'

import React from 'react';

class IndexPage extends React.Component {
  render() {
    return (
      <Layout navIndex={0}>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article isDividing={false}/>
        <Pagination />
      </Layout>
    )
  }
}

export default IndexPage;