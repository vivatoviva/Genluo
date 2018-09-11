import Layout from '../../../layout/BlogLayout'
import CateList from '../../../components/CateList'

const data = [{
  id: 1,
  categoryName: '前端',
  num: 100,
}, {
  id: 1,
  categoryName: '后端',
  num: 100,
}, {
  id: 1,
  categoryName: '服务器',
  num: 100,
}, {
  id: 1,
  categoryName: '高性能架构',
  num: 100,
}, {
  id: 1,
  categoryName: '云计算与物联网',
  num: 30,
}]

class CatePage extends React.Component {
  render() {
    return (
      <Layout navIndex={2}>
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