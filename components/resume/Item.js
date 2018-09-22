import React from 'react';
import Tag from './tag'

class Item extends React.Component {
  render() {
    const { time, children, tag } = this.props;
    let href, tagName

    if(Object.prototype.toString.call(tag) === '[object Object]') {
      href=tag.link;
      tagName = tag.name
    } else if(tag) { 
      tagName = tag
    }
    
    return (
      <div>
        <div>
          <li>
            <span className="time">{time}</span>
            <span className="content">{children}</span>
            <span className="tag">{
              tag ? <Tag href={href}>{tagName}</Tag> : ''
            }</span>
          </li>
        </div>
        <style jsx>{`
          ul {
            padding-left: 20px;
          }
          li span {
            display: inline-block;
          }
          .time {
            width: 30%;
          }
          .content {
            width: 35%;

          }
          li {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            position: relative;
            line-height: 1.7;
            list-style: circle;
            text-indent: 10px;
            overflow: hidden;
            padding: 5px 0px;
            font-size: 14px;
          }
          li span.tag {
            float: right;

          }
        `}</style>
      </div>
    )
  }
}

export default Item;