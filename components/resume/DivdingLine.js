import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Item extends React.Component {
  render() {
    const { children, title, icon  } = this.props;
    return (
      <div>
        <div className="dividing">
          <p className="line"></p>
          <p>
          <i className={`fas fa-${icon}`}></i><span>{title}</span>
          </p>
        </div>
        <div className="content">
          {children}
        </div>
        <style jsx>{`
          div {
            width: 100%;
          }
          .dividing {
            width: 100%;
            position: relative;
          }
          p.line {

          }
          p {
            display: inline-block;
            color: rgb(36, 36, 36);
            text-indent: 20px;
            line-height: 1;
            background-color: #fff;
            z-index: 200;
          }
          p i {
            line-height: 1;
            width: 15px;
            text-indent: 0px;
            display: inline-block;
            vertical-align: -3%;
            text-indent: 0px;
          }
          span {
            padding: 0 20px 0px 10px;
            font-size: 16px;
            background-color: #fff;
            line-height: 1;
          }
          .content {
            box-sizing: border-box;
            padding: 10px 20px;
          }
        `}</style>
      </div>
    )
  }
}

export default Item;