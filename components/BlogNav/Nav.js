import React from 'react'
import withItem from '../withItem'
import { withRouter } from 'next/router'


const items = [{
  name: '首页',
  link: '/blog',
  icon: 'home',
}, {
  name: '标签',
  link: '/blog/tag',
  icon: 'tags'
}, {
  name: '分类',
  link: '/blog/category',
  icon: 'table',
}, {
  name: '归档',
  link: '/blog/archives',
  icon: 'archive'
}, {
  name: '搜索',
  link: '/blog/search',
  icon: 'search'
}]

class BlogNav extends React.Component {

  state = {
    currentIndex: this.props.navIndex,
    isBar: true,
  }

  componentDidMount() {
    const { router } = this.props
    router.prefetch('/')
  }

  handleClick = (currentIndex) => {
    this.setState({
      currentIndex,
    })
  }

  handelBarClick = () => {
    this.setState(prevState => ({
      isBar: !prevState.isBar,
    }))
  }

  goBack = () => {
    const { router } = this.props;
    router.push('/')
  }


  render() {
    const { currentIndex } = this.state;
    const { items, renderItem } = this.props;
    return (
      <div>
        <div className="header">
          <div
            className="btn"
            onClick={this.handelBarClick}
          >
            <i className="fas fa-bars"></i> 
          </div>
          <h1 onClick={this.goBack}>Genluo</h1>
        </div>
        <ul className={this.state.isBar && 'tagle'}>
          {
            renderItem(currentIndex, items)
          }
          {this.props.children}
        </ul>
        <style jsx global>{`
          h1 {
            
          }
        `}</style>
      <style jsx>{`
        @media screen and (max-width: 1340px) {
          .btn {
            display: block!important;
            color: #fff;
            position: absolute;
            width: 30px;
            height: 30px;
            top: 50%;
            transform: translateY(-50%);
            left: 30px;
          }
          .right {
            width: 100%!important;
          }
          ul.tagle {
            max-height: 0;
            padding: 0!important;
          }
        }
        .btn {
          display: none;
        }
        .header {
          position: relative;
        }
        h1 {
          background: #000;
          color: #fff;
          font-size: 25px;
          padding: 30px 40px;
          text-align: center;
          font-weight: 300;
          font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
          cursor: pointer;
        }
        ul {
          background: #fff;
          padding: 10px 0;
          overflow: hidden;
          transition: all 1s ease;
        }
        li+li {
          margin-top: 10px;
        }
        li {
          font-size: 13px;
          box-sizing: border-box;
          padding:0 20px;
          line-height: 2.5;
          cursor: pointer;
          position: relative;
        }
        li span {
          margin-left: 10px;
        }
        li i {
          display: inline-block;
          min-width: 13px;
          line-height: 1;
        }
        li.navNow::before{
          content: '';
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #bbb;
          position: absolute;
          right: 15px;
          top: calc(50% - 2.5px);
        }
        .navNow {
          background: rgb(249, 249, 249);
        }
      `}</style>
    </div>
    )
  }
}

export default withRouter(withItem(BlogNav));