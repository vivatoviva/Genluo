import Layout from '../../layout/BlogLayout'
import Article from '../../components/Article'
import Pagination from '../../components/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import http from '../../utils/http'

import React from 'react';

export default class extends React.Component {

  static async getInitialProps({ query }) {
    let data  = null;
    let id;
    if(query.id) {
      // 说明是get请求页面
      const res = await http.request(`/api/article/detail/${query.id}`)
      data = res.data;
      id = query.id;
    } else {
      // 说明是link跳转
      const res = await http.request(`/api/article/content/${query.article_id}`)
      id = query.article_id;
      data = {
        ...query,
        content: res.data,
      };
    }
    http.request(`/api/article/read/${id}`);
    data.read_num++;
    return { data };
  }
  render() {
    const { data } = this.props;
    return (
      <Layout navIndex={0}>
        {
          data ? <Article.Detail data={data}/> : ''
        }
        
      </Layout>
    )
  }
}
