import Layout from '../../layout/BlogLayout'
import Article from '../../components/Article'

import React from 'react';

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </Layout>
    )
  }
}

export default IndexPage;