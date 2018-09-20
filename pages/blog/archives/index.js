import React from 'react';
import Layout from '../../../layout/BlogLayout'
import TimeLine from '../../../components/TimeLine'
import fetch from 'isomorphic-unfetch'
import Pagination from '../../../components/Pagination'

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
  
  static async getInitialProps({ query }) {
    const { tagId, cateId } = query;
    
    const res = await fetch('http://localhost:8080/api/article/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: 1,
        tagId,
        categroyId: cateId,
      })
    })
    const { data: { pagination, list }} = await res.json();
    return { pagination, list }
  }

  state = {
    pagination: this.props.pagination,
    list: this.props.list,
  }

  handlePageChange = async page => {
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
    const { list, pagination } = this.state;
    return (
      <Layout navIndex={3}>
        <TimeLine list={list} />
        <Pagination
          pagination={pagination} onPageChange={this.handlePageChange}
        ></Pagination>
      </Layout>
    )
  }
}
export default ActivePage;
