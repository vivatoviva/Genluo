import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layout/BlogLayout';
import Article from '../../components/Article';
import Pagination from '../../components/Pagination';
import http from '../../utils/http';

class IndexPage extends React.Component {
  static async getInitialProps({ query }) {
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

  static propTypes = {
    pagination: PropTypes.shape({}).isRequired,
    list: PropTypes.shape([]).isRequired,
    statisticsData: PropTypes.shape({}).isRequired,
  }

  render() {
    const { pagination, list, statisticsData } = this.props;
    return (
      <Layout
        navIndex={0}
        statisticsData={statisticsData}
      >
        {
          list.map((item, index) => (
            <Article
              key={item}
              data={item}
              isDividing={index === list.length - 1}
            />
          ))
        }
        <Pagination
          pagination={pagination}
          domain="/blog"
          paramName="page"
        />
      </Layout>
    );
  }
}

export default IndexPage;
