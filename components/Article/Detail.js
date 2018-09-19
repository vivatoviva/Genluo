import Title from '../Title';
import Content from '../Content'

export default ({isDividing=true, data, data: { article_id, title, content, descript, update_time, create_time, read_num, categroy_name, tags }}) =>
  <div className="wraper">
    <Title 
      title={title}
      updateTime={update_time}
      createTime={create_time}
      readNum={read_num}
      categroyName={categroy_name}
      tags={tags}
    />
    <Content
      content={descript + '\n' + content}
    />
    <style jsx>{`
      .wraper {
        padding: 50px 0 50px;
        ${isDividing? 'border-bottom: 1px dotted #999;': ''};
      }


    `}</style>
  </div>
  