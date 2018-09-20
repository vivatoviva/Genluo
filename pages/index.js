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
            <li><Link href='#'><a><Button buttonTitle="主页"/></a></Link></li>
            <li><Link href='/blog'><a><Button buttonTitle="博客"/></a></Link></li>
            <li><Link to="http://resume.congm.in/"><Button buttonTitle="简历"/></Link></li>
            <li><Button buttonTitle="关于"/></li>
            <li><Button buttonTitle="github"><FontAwesomeIcon icon={faGithub} style={{marginRight: '5px'}}/>Github</Button></li>
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
