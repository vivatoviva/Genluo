import Link from 'next/link'
import WithLink from './WithLink';

const Tag = ({item:{name, num, id}, sum }) => {
  let sizetopx = parseInt(num/sum * 60 + 15, 10);
  return (
    <div>
      <WithLink
        href={`/blog/archives`}
        paramsData={{tagId: id}}
        as={`/blog/tag/${id}`}
      >
        <a>{name}</a>
      </WithLink>
      <style jsx>{`
        div {
          font-size: ${sizetopx}px;
          display: inline-block;
          margin: 0 20px;
        }
        a {
          text-decoration: none;
          
        }
      `}</style>
    </div>
  )
}

export default ({items}) => {
  let sum = 0;
  for(let item of items) {
    sum +=item.num;
  }
  return (
    <div>
      {
        items.map((item, index) => <Tag item={item} sum={sum} key={index}/>)
      }
    </div>
  )
}

