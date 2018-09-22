import Head from "../components/Head";
import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'

// 将图标添加到库中
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCoffee,
  faHome,
  faTags,
  faTable,
  faSearch,
  faArchive,
  faCalendar,
  faCalendarCheck,
  faFolder,
  faEye,
  faChevronCircleUp,
  faChevronUp,
  faCopyright,
  faUser,
  faSchool,
  faCertificate,
  faProjectDiagram,
  faTree,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faCoffee,
  faHome,
  faTags,
  faTable,
  faSearch,
  faArchive,
  faCalendar,
  faCalendarCheck,
  faFolder,
  faEye,
  faChevronCircleUp,
  faGithub,
  faChevronUp,
  faCopyright,
  faUser,
  faSchool,
  faCertificate,
  faProjectDiagram,
  faTree,
  faPhone,
  faEnvelope,
)

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head title="主页" />
        <div>
          <h1>Genluo</h1>
          <ul>
            <li><Link prefetch href='/'><a><Button>主页</Button></a></Link></li>
            <li><Link prefetch href='/blog'><a><Button>博客</Button></a></Link></li>
            <li><Link prefetch href="/resume"><a><Button>简历</Button></a></Link></li>
            <li><Link prefetch href="/about"><a><Button>关于</Button></a></Link></li>
            <li>
              <Link href='https://github.com/vivatoviva'>
                <a><Button buttonTitle="github">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{marginRight: '5px'}}
                  />Github
                  </Button>
                </a>
              </Link>
            </li>
          </ul>
          <style jsx>{`
            h1 {
              margin-top: 190px;
              font-size: 150px;
              color: #000;
              text-align: center;
              letter-spacing: 9px;
            }
            a {
              text-decoration: none;
            }
            ul {

              
              position: absolute;
              left: 50%;
              transform: translateX(-50%)
            }
            li {
              display: inline-block;
              margin: 20px;
            }
            `}</style>
          <style global jsx>{`
            body {
              font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
            }
          `}</style>
        </div>
      </div>
    )
  }
}

export default IndexPage;
