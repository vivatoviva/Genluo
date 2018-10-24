import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../../layout/BlogLayout';
import CateList from '../../../components/CateList';
import http from '../../../utils/http';

class CatePage extends React.Component {
  static async getInitialProps() {
    const listPromise = http.request('/api/category/list');
    const statisticPromise = http.request('/api/statistics/detail');
    const [{ data }, { data: statisticData }] = await Promise.all([listPromise, statisticPromise]);
    return { data, statisticData };
  }

  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    statisticData: PropTypes.shape({}).isRequired,
  }

  render() {
    const { data, statisticData } = this.props;
    return (
      <Layout
        navIndex={2}
        title="分类"
        statisticData={statisticData}
      >
        <h1>Categories</h1>
        <div>
          <CateList data={data} />
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

export default CatePage;
