import React from 'react'
import Head from '../components/Head'
import BlogNav from '../components/BlogNav'
import BlogData from '../components/BlogData'
import ToTop from '../components/ToTop'
import Footer from '../components/Footer'
class BlogPage extends React.Component {
  state = {
    isFixed: false,
    isDisplayToTop: false,
  }
  
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }

  componentDidMount() {
    
    const height = this.nav.current.clientHeight + 10;
    const windowHeight = document.body.clientHeight + 100;
    window.addEventListener('scroll', e => {
      const nowHeight = window.pageYOffset;
      
      if(nowHeight >= height) {
        this.setState({
          isFixed: true,
        })
      } else {
        this.setState({
          isFixed: false,
        })
      }

      if(nowHeight >= windowHeight) {
        this.setState({
          isDisplayToTop: true
        })
      } else {
        this.setState({
          isDisplayToTop: false,
        })
      }
    })
  }

  render() {
    const { isFixed, isDisplayToTop } = this.state;
    const { children, navIndex, title } = this.props;
    return (
      <div className="wraper">
        <Head title={title || '博客主页'} />
        <div className="can">
          <div className="left">
            <div className="nav" ref={this.nav}>
              <BlogNav navIndex={navIndex} />
            </div>
            <div className={!isFixed ? 'data' : 'data dataNow'}>
              <BlogData></BlogData>
            </div>
          </div>
          <div className="right">
            <div className="content">
              {children}
            </div>
            <footer>
              <Footer></Footer>
            </footer>
          </div>
        </div>
        <div className="toTap">
          <ToTop isDisplay={isDisplayToTop} />
        </div>
        <style jsx>{`
          @media screen and (max-width: 1340px) {
            .left {
              width: 100%;
            }
            .data {
              display: none;
            }
            .content {
              width: 100vw!important;
            }
          }
          .wraper {
            max-width: 1340px;
            margin: 0 auto;
          }
          .left {
            float: left;
          }
          .data.dataNow {
            top: 0;
            position: fixed;
          }
          .nav{
            margin-bottom: 10px;
          }
          .right {
            float: right;
          }
          .content {
            width: 1100px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 30px;
            min-height: 110vh;
          }
          footer{
            padding: 50px 0;
          }

        `}</style>
        <style global jsx>{`
          body {
            background: #f5f7f9!important;
          }

        `}</style>
      </div>
    )
  }
}

export default BlogPage;