import React from 'react'
import WithLink from '../WithLink'
// 圆角button
// 点击阅读的button
const Style = () =>
  <style jsx>{`
    @media screen and (max-width: 750px) {
      .button {
        font-size: 17px!important;
        padding: 10px 20px!important;
      }
    }
    @media screen and (max-width: 550px) {
      .button {
        font-size: 13px!important;
        padding: 5px 10px!important;
      }
    }
    .button {
      display: block;
      padding: 15px 30px;
      border: 2px solid #999;
      border-radius: 30px;
      text-align: center;
      color: #999;
      font-weight: 500;
      font-size: 20px;
      cursor: pointer;
      transition: .3s all;
    }
    .button:hover {
      color: #000;
      border-color: #000;
    }
  `}</style>

class IndexButton extends React.Component {

  renderButton = () => {
    const { children } = this.props;
    return (
      <div className="button">
        {children }
      </div>
    )
  }
  renderLink = () => {
    const { href, children } = this.props;
    return (
      <WithLink href={href}>
        <a className="button">
          {children}
        </a>
      </WithLink>
    )
  }
  render() {
    const { buttonStyle, children, href } = this.props;
    return (
      <div>
        {
          href ?  this.renderLink() : this.renderButton()
        }
        <Style />
      </div>
    )
  }
}
export default IndexButton;
