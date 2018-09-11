import Link from 'next/link'

const Tag = ({item:{name, num, id}, sum }) => {
  let sizetopx = parseInt(num/sum * 60 + 15, 10);
  return (
    <div>
      <Link href={`/blog/tag/${id}`}>{name}</Link>
      <style jsx>{`
        div {
          font-size: ${sizetopx}px;
          display: inline-block;
          margin: 0 20px;
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

