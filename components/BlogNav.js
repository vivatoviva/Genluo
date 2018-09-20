import React from 'react'
import withItem from './withItem'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  }

  handleClick = (currentIndex) => {
    this.setState({
      currentIndex,
    })
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div>
      <h1>Genluo</h1>
      <ul>
        {
          items.map((item, index)=>
            <Link href={item.link} key={index}>
              <li
                className={index === currentIndex && 'navNow'}
                onClick={this.handleClick.bind(this, index)}
              >
                <FontAwesomeIcon icon={item.icon}/>
                <span>{item.name}</span>
              </li>
            </Link>
          )
        }
      </ul>
      <style jsx>{`
        h1 {
          background: #000;
          color: #fff;
          font-size: 25px;
          padding: 30px 40px;
          text-align: center;
          font-weight: 300;
          font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
        }
        ul {
          background: #fff;
          padding: 10px 0;
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

export default withItem(BlogNav);