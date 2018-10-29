import React from 'react';
import PropTypes from 'prop-types';
import Tag from './tag';

const Item = ({ time, children, tag }) => {
  let href;
  let tagName;
  if (Object.prototype.toString.call(tag) === '[object Object]') {
    href = tag.link;
    tagName = tag.name;
  } else if (tag) {
    tagName = tag;
  }
  return (
    <div className="wrapper">
      <div>
        <li>
          <p className="time"><span>{time}</span></p>
          <p className="content"><span>{children}</span></p>
          <p className="tag">
            <span>
              {
                tag ? <Tag href={href}>{tagName}</Tag> : ''
              }
            </span>
          </p>
        </li>
      </div>
      <style jsx>
        {`
          .wrapper {
            margin: 7px 0px;
          }
          li {
            display: flex;
            justify-content: space-between;
          }
          li p {
            width: 30%;
            vertical-align: middle;
            box-sizing: border-box;
          }
          li p.content {
            width: 40%;
            text-align: center;
          }
          li p.time {
            text-indent: 20px;
            position: relative;
          }
          li p.time:after {
            content: '';
            width: 5px;
            height: 5px;
            display: block;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            border-radius: 50%;
            border: 1px solid #333;
          }
          li p.tag {
            text-align: right;
          }
          li p {
          }
          li p span {
            line-height: 24px;
          }
        `}
      </style>
    </div>
  );
};

Item.propTypes = {
  time: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};


export default Item;
