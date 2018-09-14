import Layout from '../../layout/BlogLayout'
import Article from '../../components/Article'
import Pagination from '../../components/Pagination'

import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <Layout navIndex={0}>
        <Article.Detail />

      </Layout>
    )
  }
}
