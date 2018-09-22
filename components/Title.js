import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WithLink from './WithLink';
import { 
  faTags,
  faCalendar,
  faCalendarCheck,
  faFolder,
  faEye,
} from '@fortawesome/free-solid-svg-icons'

const IconTitle = ({
  icon,
  name,
  children,
}) => (
  <li>
    <i>
      <FontAwesomeIcon
        icon={icon}
        style={{marginRight: '5px', boxSizing: 'border-box', padding: '1px'}}
      />
    </i>
    <span>{name} : </span>{children}
    <style jsx>{`
      @media screen and (max-width: 1340px) {
        span {
          display: none;
        }
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
    `}</style>
  </li>
)

const SpanLink = ({
  link,
  children,
}) =>
  <span>
    <WithLink href={link}>
      <a>{children}</a>
    </WithLink>
    <style jsx>{`

      span {
        text-decoration: underline;
        display: inline-block;
      }
    `}</style>
  </span>

export default class Title extends React.Component {
  render() {
    const { article_id, categroy_id, title, updateTime, createTime, categroyName, tags, readNum } = this.props;
    return <div>
      <h1><span>{title}</span></h1>
      <div className="data">
        <ul>
          {/* 发表时间 */}
          <IconTitle
            icon={faCalendarCheck}
            name="发表于"
          >
            2016-9
          </IconTitle>
          <IconTitle
            icon={faCalendar}
            name="更新于"
          >
            2016-9
          </IconTitle>
          <IconTitle
            icon={faFolder}
            name="分类于"
          >
            <SpanLink link={`/blog/category/1`}>{categroyName}</SpanLink>
          </IconTitle>
          <IconTitle
            icon={faEye}
            name="阅读次数"
          >
            {readNum}
          </IconTitle>
          {
            tags  && tags.length > 0 ? (
              <IconTitle
              icon={faTags}
              name="标签"
            >
              {tags.map(item => <><SpanLink link={`/blog/tag/${item.tag_id}`}>{item.name}</SpanLink>、</>)}
            </IconTitle>
            ) : ''
          }
        </ul>
      </div>
      
      <style jsx>{`
        h1 {
          text-align: center;
          font-weight: 500;
          margin-bottom: 20px;
          cursor: pointer;
        }
        ul {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        h1 span:hover {
          border-bottom: 2px solid #000;
        }
      `}</style>
    </div>
  }
}