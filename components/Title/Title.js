import React from 'react';
import WithLink from '../WithLink';
import moment from 'moment';

const IconTitle = ({
  icon,
  name,
  children,
}) => (
  <li>
    <i><i className={`fas fa-${icon}`}></i> </i>
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
      li i {
        display: inline-block;
        line-height: 1;
        margin-right: 7px;
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
    const { article_id, categroyId, title, updateTime, createTime, categroyName, tags, readNum } = this.props;
    // 生成tag列表
    let tag = [];
    for(let item of tags) {
      tag.push(<><SpanLink link={`/blog/tag/${item.tag_id}`}>{item.name}</SpanLink></>)
      tag.push(<span>、</span>)
    }
    tag.pop();

    return <div>
      <h1><span>{title}</span></h1>
      <div className="data">
        <ul>
          {/* 发表时间 */}
          <IconTitle
            icon="calendar-check"
            name="发表于"
          >
            {
              moment(createTime).format('YYYY-DD-MM h:mm')
            }
          </IconTitle>
          <IconTitle
            icon="calendar"
            name="更新于"
          >
            {
               moment(updateTime).format('YYYY-DD-MM h:mm')
            }
          </IconTitle>
          <IconTitle
            icon="folder"
            name="分类于"
          >
            <SpanLink link={`/blog/category/${categroyId}`}>{categroyName}</SpanLink>
          </IconTitle>
          <IconTitle
            icon="eye"
            name="阅读次数"
          >
            {readNum}
          </IconTitle>
          {
            tags  && tags.length > 0 ? (
              <IconTitle
              icon="tags"
              name="标签"
            >
              {tag}
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