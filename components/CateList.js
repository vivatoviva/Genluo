import Link from 'next/link'
import WithLink from './WithLink'

export default ({ data }) => {

  return (
    <div>
      <ul>
        {
          data.map((item, index)=>
            <li>
              <div>
                <WithLink
                  paramsData={{cateId: item.id}}
                  as={`/blog/category/${item.id}`}
                  href={`/blog/archives`}
                >
                  <a>{item.name}</a>
                </WithLink>
              </div>
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
        li div {
          display: inline-block;
        }
        li span {
          margin-left: 5px;
          display: inline-block;

        }
      `}</style>
    </div>    
  )
}
