import { withRouter } from 'next/router'
import Link from 'next/link'


// 路由这边有两种
// link 和 withRouter单页
const ActiveLink = ({ children, router, href }) => {
  const style = {
    marginRight: 10,
    color: router.pathname === false? 'red' : 'black'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/about/me')
  }

  return (
    <div>
        <Link as='test' href="/about/me">test</Link>
        <a href={href} onClick={handleClick} style={style}>
            onClick
        </a>
    </div> 
  )
}

export default withRouter(ActiveLink)