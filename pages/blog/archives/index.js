import React from 'react';
import Layout from '../../../layout/BlogLayout'
import TimeLine from '../../../components/TimeLine'
import Pagination from '../../../components/Pagination'
import http from '../../../utils/http'

class ActivePage extends React.Component {
  
  static async getInitialProps({ query }) {
    const { tagId, cateId, page } = query;
    console.log(tagId, cateId, page);

    const { data: { pagination, list }} = await http.request('/api/article/list', {
      body: JSON.stringify({
        page,
        tagId,
        categroyId: cateId,
      })
    })
    return { pagination, list, tagId, cateId }
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
  
  renderPagination = () => {
    // 想要的效果 /bog/tag/2/2
    // { tagId, page, cateId }

    const { pagination, cateId, tagId } = this.props;
    const paramsData = { tagId, cateId };
    let domain = "/blog/archives"
    if(tagId) {
      domain=`/blog/tag/${tagId}`
    } else if(cateId) {
      domain=`/blog/category/${cateId}`
    }

    return (
      <Pagination
        isAs={true}
        paramsData={paramsData}
        paramName="page"
        asDomain={domain}
        domain="/blog/archives"
        pagination={pagination}
      />   
    )
  }

  render() {
    const { list, pagination, cateId, tagId } = this.props;
    // 这边要渲染三种路由，分别是tag、category、archives
    return (
      <Layout navIndex={3}>
        <TimeLine list={list} />
        {
          this.renderPagination()
        }
      </Layout>
    )
  }
}
export default ActivePage;
