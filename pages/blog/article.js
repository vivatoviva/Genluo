import Layout from '../../layout/BlogLayout'
import Article from '../../components/Article'
import Pagination from '../../components/Pagination'

import React from 'react';

export default class extends React.Component {

  static async getInitialProps({ query }) {
    if(query) return { query };
  }
  render() {
    return (
      <Layout navIndex={0}>
        <Article.Detail data={this.props.query}/>
      </Layout>
    )
  }
}
