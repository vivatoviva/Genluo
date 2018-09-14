import Title from '../Title';
import Content from '../Content'

export default ({isDividing=true}) =>
  <div className="wraper">
    <Title></Title>
    <Content />
    <style jsx>{`
      .wraper {
        padding: 50px 0 50px;
        ${isDividing? 'border-bottom: 1px dotted #999;': ''};
      }


    `}</style>
  </div>
  