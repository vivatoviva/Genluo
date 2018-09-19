import Layout from '../../../layout/BlogLayout'
import CateList from '../../../components/CateList'
import fetch from 'isomorphic-unfetch'

class CatePage extends React.Component {
  static async getInitialProps() {
    const res = await fetch('/api/category/list', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
    })
    const { data } = await res.json();

    return { data }
  }
  render() {
    const { data } = this.props;
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