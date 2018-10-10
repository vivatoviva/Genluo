import React from 'react'
import WithLink from '../WithLink'

class Item extends React.PureComponent {
  
  handleClick = () => {
    const { onClick } = this.props;
    onClick && onClick()
  }
  
  renderLink = () => {
    const { children, href, icon } = this.props;
    return (
      <WithLink href={href}>
        <a>
          {icon && <i className={`fas fa-${icon}`}></i>}
          {children}
          <style jsx>{`
            a:hover {
              color: #000;
            }
            a {
              cursor: pointer;
              display: block;
              width: 100%;
              height: 100%;
              padding: 0 20px;
              box-sizing: border-box;
              transition: 200ms all ease;
              text-decoration: none;
            }
            i {
              margin-right: 10px;
            }
          `}</style>
        </a>
      </WithLink>)
  }

  renderButton = () => {
    const { children, icon } = this.props;
    return <a
      onClick={this.handleClick}
    >{
      icon && <i className={`fas fa-${icon}`}></i>
    }{children}
      <style jsx>{`
        a:hover {
          color: #000;
        }
        a {
          cursor: pointer;
          display: block;
          width: 100%;
          height: 100%;
          padding: 0 20px;
          box-sizing: border-box;
          transition: 200ms all ease;
          text-decoration: none;
        }
        i {
          margin-right: 10px;
        }
      `}</style>
    </a>
  }

  render() {
    const { href, currentIndex } = this.props;
    return (
      <li className={currentIndex && 'navNow'}>
        {
          href ? this.renderLink() : this.renderButton()
        }
        <style jsx>{`
          li {
            line-height: 2.5;
            position: relative;
            padding: 3px 0;
            font-size: 13px;
            transition: all 300ms ease;
            cursor: pointer;
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
          .navNow:hover a{
            color: #000;
          }
          li:hover {
            background: rgb(249, 249, 249);
          }
          li:hover a {
            color: #000;
          }
        `}</style>
      </li>
    )
  }
}

export default Item;
