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
const Style = () =>
  <>
    <style jsx>{`
      @media screen and (max-width: 768px) {
          h1{
            font-size: 100px!important;
          }
          li {
            margin: 5px!important;
          }
          li span {
            height: 16px;
            width: 16px;
            margin-right: 5px;
          }
      }
      @media screen and (max-width: 550px) {
          h1{
            font-size: 80px!important;
          }
          li span {
            height: 16px;
            width:16px;
            margin-right: 5px;
          }
      }
      h1 {
        margin-top: 190px;
        font-size: 150px;
        color: #000;
        text-align: center;
        letter-spacing: 9px;
        transition: all .3s ease;
      }
      a {
        text-decoration: none;
      }
      ul {
        display: flex;
        justify-content: center;
        overflow: hidden;
      }
      li {
        display: inline-block;
        margin: 20px;
      }
      li span {
        line-height: 1;
        margin-right: 5px;
        display: inline-block;
        overflow: hidden;
      }
      a:hover {
        color: #000;
        text-decoration: none;
      }
    `}</style>
    <style global jsx>{`
      * {
        padding: 0;

      }
      body {
        font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
      }
  `}</style>
  </>

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head title="主页" />
        <Style />
        <div className="index-page">
          <h1>Genluo</h1>
          <ul>
            <li><Link prefetch href='/'><a><Button>主页</Button></a></Link></li>
            <li><Link prefetch href='/blog'><a><Button>博客</Button></a></Link></li>
            <li><Link prefetch href="/resume"><a><Button>简历</Button></a></Link></li>
            <li><Link prefetch href="/about"><a><Button>关于</Button></a></Link></li>
            <li>
              <Link href='https://github.com/vivatoviva'>
                <a><Button>
                  <span>
                    <FontAwesomeIcon
                      icon={faGithub}
                    />
                  </span>
                  Github
                  </Button>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default IndexPage;
