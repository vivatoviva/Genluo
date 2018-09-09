import React from 'react'
import Head from '../../components/Head'
import BlogNav from '../../components/BlogNav'
import BlogData from '../../components/BlogData'
import Artcle from '../../components/Article'

class BlogPage extends React.Component {
  render() {
    return (
      <div className="wraper">
        <Head title='博客主页' />
        <div className="left">
          <BlogNav></BlogNav>
          <BlogData></BlogData>
        </div>
        <div className="content right">
          <Artcle />
          <Artcle />
          <Artcle />
          <Artcle />
          <Artcle />
        </div>
        <style jsx>{`
          .wraper {
            width: 1320px;
            margin: 0 auto;
          }
          .left {
            float: left;
            position: fixed;
          }
          .right {
            float: right;
          }
          .content {
            width: 1000px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 30px;
          }
        `}</style>

        <style global jsx>{`
          body {
            background: #f5f7f9;
          }
        `}</style>
      </div>
    )
  }
}

export default BlogPage;