import Title from '../Title';
import Content from '../Content'

export default ({
  isDividing=true,
  onContentChange,
  data: {
    title, content,
    descript,
    update_time,
    create_time,
    read_num,
    categroy_name,
    categroy_id,
    tags,
  }}) => {
    return (
      <div className="wraper">
      <Title 
        title={title}
        updateTime={update_time}
        createTime={create_time}
        readNum={read_num}
        categroyName={categroy_name}
        categroyId={categroy_id}
        tags={tags}
      />
      <Content
        content={descript + '\n' + content}
        onContentChange={onContentChange}
      />
      <style jsx>{`
        .wraper {
          padding: 50px 0 50px;
          ${isDividing? 'border-bottom: 1px dotted #999;': ''};
        }
      `}</style>
    </div>
    
    )
  }
