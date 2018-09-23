import Layout from '../../layout/BlogLayout'
import Article from '../../components/Article'
import Pagination from '../../components/Pagination'
import fetch from 'isomorphic-unfetch'
import http from '../../utils/http'


import React from 'react';

class IndexPage extends React.Component {
  
  static async getInitialProps({ req, query, pathname }) {
    // 获取page参数
    // 获取数据
    const { data: { pagination, list } } = await http.request('/api/article/list', {
      body: JSON.stringify({
        page: 1,
      })
    })
    // 初始化组件props
    return { pagination, list }
  }

  state = {
    pagination: this.props.pagination,
    list: this.props.list,
  }

  handlePageChange = async (page) => {
    const res = await fetch('http://localhost:8080/api/article/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page,
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
        <Pagination pagination={pagination} onPageChange={this.handlePageChange}/>
      </Layout>
    )
  }
}

export default IndexPage;