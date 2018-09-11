import Link from 'next/link'
export default ({ data }) => {

  return (
    <div>
      <ul>
        {
          data.map((item, index)=>
            <li>
              <Link href={`/blog/category/${item.id}`}>
              {item.categoryName}
              </Link>
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
