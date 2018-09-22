import React from 'react'
import WithLink from '../WithLink'
class Item extends React.Component {
  render() {
    const { children, href } = this.props

    return (
      <div>
        <div className="link">
          {
            href ? <WithLink href={href}>{children}</WithLink> : <span>{children}</span>
          }
        </div>
        <style jsx>{`
          div {
            display: inline-block;
          }
            div.link {
              display: inline-block;
              padding: 2px 5px;
              border: 1px solid rgb(0, 179, 138);
              color: rgb(0, 179, 138);
              text-align: center;
              text-indent: 0;
              line-height: 1.5;
              font-size: 12px;
            }
        `}</style>
      </div>
    )
  }
}

export default Item;