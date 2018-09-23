import Layout from '../../../layout/BlogLayout'
import CateList from '../../../components/CateList'
import http from '../../../utils/http'


class CatePage extends React.Component {
  static async getInitialProps() {
    console.log(http)
    const { data } = await http.request('/api/category/list');
    return { data }
  }
  render() {
    const { data } = this.props;
    return (
      <Layout
        navIndex={2}
        title="分类"
      >
        <h1>Categories</h1>
        <div>
            <CateList data={data}/>
        </div>
        <style jsx>{`
          h1 {
            text-align: center;
            margin-top: 50px;
            color: rgb(85, 85, 85);
            margin-bottom: 50px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default CatePage;