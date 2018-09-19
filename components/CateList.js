import Link from 'next/link'
import WithLink from './WithLink'

export default ({ data }) => {

  return (
    <div>
      <ul>
        {
          data.map((item, index)=>
            <li>
              <WithLink prefetch paramsData={{cateId: item.id}} as={`/blog/category/${item.id}`} href={`/blog/archives`}>
              {item.name}
              </WithLink>
              <span>({item.num})</span>
            </li>)
        }
      </ul>
      <style jsx>{`
        ul {
          padding-left: 20px;
        }
        li {
          list-style: circle;
          font-size: 15px;
          margin: 20px;
        }
        li span {
          margin-left: 5px;

        }
      `}</style>
    </div>    
  )
}
