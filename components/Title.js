import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTags,
  faCalendar,
  faCalendarCheck,
  faFolder,
  faEye,

} from '@fortawesome/free-solid-svg-icons'
export default class Title extends React.Component {
  render() {

    const { title, updateTime, createTime, categroyName, tags, readNum } = this.props;
    return <div>
      <h1><span>{title}</span></h1>
      <div className="data">
        <ul>
          <li><i><FontAwesomeIcon icon={faCalendar} style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}/></i>
            <span>发表于：</span>{"2017-6-1"}</li>
          <li><i><FontAwesomeIcon icon={faCalendarCheck} style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}/></i>
            <span>更新于：</span>{"1079-9-1"}</li>
          <li><i><FontAwesomeIcon icon={faFolder} style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}/></i>
            <span>分类于：</span>{categroyName}</li>
          <li><i><FontAwesomeIcon icon={faEye} style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}/></i>
            <span>阅读次数：</span>{readNum}</li>
          { tags ? <li><i><FontAwesomeIcon icon={faTags} style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}/></i>
            <span>标签: </span>{tags.map(item => item.name).join('、')}</li> : '' }
        </ul>
      </div>
      
      <style jsx>{`
        @media screen and (max-width: 1340px) {
           li span {
             display: none;
           }
        }
        h1 {
          text-align: center;
          font-weight: 500;
          margin-bottom: 20px;
        }
        ul {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        li {
          padding: 0 10px 0 10px;
          line-height: 1;
          margin: 5px 0px;
          color: rgb(153, 153, 153);
        }
        li + li {
          border-left: 1.5px solid rgb(153, 153, 153);
        }
        i {
          display: inline-block;
          line-height: 1;

        }
        h1 span:hover {
          border-bottom: 2px solid #000;
        }
      `}</style>
    </div>
  }
}