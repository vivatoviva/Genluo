
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../../layout/BlogLayout';
import Tags from '../../../components/Tags';
import http from '../../../utils/http';

class TagPage extends React.Component {
  static async getInitialProps() {
    const statisticPromise = http.request('/api/statistics/detail');
    const listPromise = http.request('/api/tag/liat');
    const [{ data }, { data: statisticsData }] = Promise.all(statisticPromise, listPromise);
    return { data, statisticsData };
  }

  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    statisticsData: PropTypes.shape({}).isRequired,
  }

  render() {
    const { data, statisticsData } = this.props;
    return (
      <Layout
        navIndex={1}
        title="标签"
        statisticsData={statisticsData}
      >
        <h1>Tags</h1>
        <div>
          <Tags items={data} />
        </div>
        <style jsx>
          {`
          h1 {
            text-align: center;
            margin-top: 50px;
            color: rgb(85, 85, 85);
            margin-bottom: 50px;
          }
        `}
        </style>
      </Layout>
    );
  }
}
export default TagPage;
