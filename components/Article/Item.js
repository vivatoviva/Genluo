import WithLink from '../WithLink';
import Title from '../Title';
import Content from '../Content'
import Button from '../Button'


export default ({isDividing=true,data, data: { title, content, descript }}) =>
  <div className="wraper">
    <Title 
      title={title}
    />
    <Content
      content={descript}
    />
    <Button.Artic paramData={data}></Button.Artic>
    <style jsx>{`
      .wraper {
        padding: 50px 0 50px;
        ${isDividing? 'border-bottom: 1px dotted #999;': ''}
      }
      p {
        text-align: justify;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 16px;
        line-height: 2;
        color: #555;
      }

    `}</style>
  </div>
  