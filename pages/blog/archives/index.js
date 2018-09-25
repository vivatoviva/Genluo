import React from 'react';
import Layout from '../../../layout/BlogLayout'
import TimeLine from '../../../components/TimeLine'
import Pagination from '../../../components/Pagination'
import http from '../../../utils/http'

class ActivePage extends React.Component {
  
  static async getInitialProps({ query }) {
    const { tagId, cateId } = query;
    
    const { data: { pagination, list }} = await http.request('/api/article/list', {
      body: JSON.stringify({
        page: 1,
        tagId,
        categroyId: cateId,
      })
    })
    return { pagination, list }
  }

  state = {
    pagination: this.props.pagination,
    list: this.props.list,
  }

  handlePageChange = async page => {
    const res = await http.request('/api/article/list', {

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
