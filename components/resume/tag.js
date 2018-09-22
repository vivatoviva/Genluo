import React from 'react'

class Item extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <div className="link">
          <span>{children}</span>
        </div>
        <style jsx>{`
          div {
            display: inline-block;
          }
            div.link {
              display: inline-block;
              padding: 2px 15px;
              border: 1px solid rgb(0, 179, 138);
              color: rgb(0, 179, 138);
              text-align: center;
              text-indent: 0;
              line-height: 1.5;
            }
        `}</style>
      </div>
    )
  }
}

export default Item;