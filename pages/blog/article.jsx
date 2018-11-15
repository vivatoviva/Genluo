import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layout/BlogLayout';
import Article from '../../components/Article';
import http from '../../utils/http';
import mdUtils from '../../utils/markdownToHtml';
import Input from '../../components/Input';
import Comment from '../../components/Comment';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    let data = null;
    let id;
    if (query.id) {
      // 说明是get请求页面
      const res = await http.request(`/api/article/detail/${query.id}`);
      const { data: resData, id: resId } = res;
      data = resData;
      id = resId;
    } else {
      // 说明是link跳转
      const res = await http.request(`/api/article/content/${query.article_id}`);
      id = query.article_id;
      data = {
        ...query,
        content: res.data,
      };
    }
    http.request(`/api/article/read/${id}`);
    data.read_num = parseInt(data.read_num, 10) + 1;
    return { data };
  }

  static propTypes = {
    data: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);
    const { data: { content } } = this.props;
    this.content = new mdUtils.Converter(content).getContent();
  }

  state = {
    now: 0,
  }

  handleContentChange = (now) => {
    this.setState({
      now,
    });
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
        <Input
          ok={(value) => { console.log(value); }}
          avtorImgUrl="https://avatars1.githubusercontent.com/u/26970959?v=3"
          isNeedAvtor
        />
        <Comment
          userName="Genluo"
          content="写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错写的真不错"
          avtorImgUrl="https://avatars1.githubusercontent.com/u/26970959?v=3"
          defaultLikeNum={100}
          time="2016-9-9 10:10"
        />
      </Layout>
    );
  }
}
