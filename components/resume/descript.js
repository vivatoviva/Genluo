import React, { Component } from 'react'

export default class extends Component {
  render() {
    const { children, isItem } = this.props
    return (
      <div>
        <p className={isItem ? 'item descript' : 'descript'}>{children}</p>
        <style jsx>{`
          p {
            padding: 5px 12px;
            text-align: justify;
            line-height: 1.5;
            position: relative;
          }
          .item {
            padding-left: 25px;
          }
          .item::after {
            content: "";
            display: block;
            width: 2px;
            height: 2px;
            border: 1px solid #000;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 10px;
          }
        `}</style>
        <style jsx global>{`
          p.descript span {
            background-color: #eee;
            padding: 0 5px;
          }
        `}</style>
      </div>
    )
  }
}