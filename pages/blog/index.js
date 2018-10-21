import React from 'react';
import Layout from '../../layout/BlogLayout';
import Article from '../../components/Article';
import Pagination from '../../components/Pagination';
import http from '../../utils/http';

class IndexPage extends React.Component {
  static async getInitialProps({ req, query, pathname }) {
    const { page = 1 } = query;
    const contentPromise = http.request('/api/article/list', {
      body: JSON.stringify({
        page,
      }),
    });
    const statisticPromise = http.request('/api/statistics/detail');
    const [{ data: { pagination, list } }, { data: statisticsData }] = await Promise.all([
      contentPromise, statisticPromise,
    ]);

    return { pagination, list, statisticsData };
  }

  render() {
    const { pagination, list, statisticsData } = this.props;
    var a = 1;
    return (
      <Layout
        navIndex={0}
        statisticsData={statisticsData}
      >
        {
          list.map((item, index) => 
            <Article
              key={index}
              data={item}
              isDividing={index === list.length - 1}
            />)
        }
        <Pagination
          pagination={pagination}
          domain="/blog"
          paramName="page"
        />
      </Layout>
    )
  }
}

export default IndexPage;