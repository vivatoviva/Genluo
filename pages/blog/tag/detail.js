import Layout from '../../../layout/BlogLayout';
import TimeLine from '../../../components/TimeLine';
import Pagination from '../../../components/Pagination'
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'

export default class DetailPage extends Component {

  static async getInitialProps({ query }) {
    // const { id: tagId } = query
    const tagId = 1;
    const res = await fetch('/api/article/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: 1,
        tagId,
      })
    })
    const { data: { pagination, list}} = await res.json()
    return { pagination, list, tagId }
  }

  state = {
    pagination: this.props.pagination,
    list: this.props.list,
  }

  handlePageChange = async page => {
    const { tagId } = this.props;
    const res = await fetch('/api/article/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page,
        tagId,
      })
    })
    const { data: { pagination, list}} = await res.json()

    this.setState({
      pagination,
      list,
    })
  }

  render() {
    const { pagination, list } = this.state;
    return (
      <Layout navIndex={1}>
        <TimeLine list={list} />
        <Pagination
          pagination={pagination} onPageChange={this.handlePageChange}
        ></Pagination>
      </Layout>
    )
  }
}