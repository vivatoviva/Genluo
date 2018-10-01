import Layout from '../../layout/BlogLayout'
import Article from '../../components/Article'
import http from '../../utils/http'
import mdUtils from '../../utils/markdownToHtml';

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

  constructor(props) {
    super(props);
    this.content = new mdUtils.Converter(props.data.content).getContent();
  }

  state = {
    now: 1,
  }

  handleContentChange = (now) => {
    this.setState({
      now,
    })
  }

  render() {
    const { data } = this.props;
    const { now } = this.state;
    return (
      <Layout
        navIndex={0}
        isArticle
        content={this.content}
        now={now}
      >
        {
          data ? <Article.Detail data={data} onContentChange={this.handleContentChange} /> : ''
        }
      </Layout>
    )
  }
}
