import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../../layout/BlogLayout';
import TimeLine from '../../../components/TimeLine';
import Pagination from '../../../components/Pagination';
import http from '../../../utils/http';

class ActivePage extends React.Component {
  static async getInitialProps({ query }) {
    const { tagId, cateId, page } = query;
    const statisticPromise = http.request('/api/statistics/detail');

    const listPromise = http.request('/api/article/list', {
      body: JSON.stringify({
        page,
        tagId,
        categroyId: cateId,
      }),
    });
    const [{ data: { pagination, list } }, { data: statisticData }] = await Promise.all([
      listPromise,
      statisticPromise,
    ]);
    return {
      pagination,
      list,
      tagId,
      cateId,
      statisticData,
    };
  }

  static propTypes = {
    pagination: PropTypes.shape({}).isRequired,
    list: PropTypes.shape([]).isRequired,
    tagId: PropTypes.number.isRequired,
    cateId: PropTypes.number.isRequired,
    statisticData: PropTypes.shape({}).isRequired,
  }

  // handlePageChange = async (page) => {
  //   const res = await http.request('/api/article/list', {
  //     body: JSON.stringify({
  //       page,
  //       tagId,
  //     }),
  //   });
  //   const { data: { pagination, list } } = await res.json();
  //   this.setState({
  //     pagination,
  //     list,
  //   });
  // }

  renderPagination = () => {
    const { pagination, cateId, tagId } = this.props;
    const paramsData = { tagId, cateId };
    let domain = '/blog/archives';
    if (tagId) {
      domain = `/blog/tag/${tagId}`;
    } else if (cateId) {
      domain = `/blog/category/${cateId}`;
    }

    return (
      <Pagination
        isAs
        paramsData={paramsData}
        paramName="page"
        asDomain={domain}
        domain="/blog/archives"
        pagination={pagination}
      />
    );
  }

  render() {
    const { list, statisticData } = this.props;
    return (
      <Layout
        navIndex={3}
        statisticsData={statisticData}
      >
        <TimeLine list={list} />
        {
          this.renderPagination()
        }
      </Layout>
    );
  }
}
export default ActivePage;
