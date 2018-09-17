import Layout from '../../layout/BlogLayout'
import Article from '../../components/Article'
import Pagination from '../../components/Pagination'
import fetch from 'isomorphic-unfetch'

import React from 'react';

class IndexPage extends React.Component {
  
  static async getInitialProps({ req }) {
    const res = await fetch('http://localhost:8080/api/article/list?page=1')
    const { data: { pagination, list}} = await res.json()
    console.log(pagination)
    return { pagination, list }
  }

  state = {
    pagination: this.props.pagination,
    list: this.props.list,
  }

  handlePageChange = async (page) => {
    const res = await fetch('http://localhost:8080/api/article/list?page=' + page)
    const { data: { pagination, list}} = await res.json()
    this.setState({
      pagination,
      list,
    })
  }

  render() {
    const { pagination, list } = this.state;
    return (
      <Layout navIndex={0}>
        {
          list.map((item, index) => <Article key={index} data={item} isDividing={index === list.length - 1}/>)
        }
        <Pagination pagination={pagination} onPageChange={this.handlePageChange}/>
      </Layout>
    )
  }
}

export default IndexPage;