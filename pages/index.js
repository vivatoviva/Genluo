import Head from "../components/Head";
import React from 'react'
import Button from '../components/Button'

// 将图标添加到库中
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
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
      nav {
        display: flex;
        justify-content: center;
        overflow: hidden;
      }
      li {
        display: inline-block;
        margin: 20px;
        font-size: 0;
      }
      li span {
        display: inline-block;
        line-height: 1;
        min-width: 15px;
        margin-right: 5px;
        display: inline-block;
        overflow: hidden;
        vertical-align: -3%;
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
          <nav>
            <li>
              <Button href="/">主页</Button>
            </li>
            <li><Button href="/blog">博客</Button></li>
            <li><Button href="/resume">简历</Button></li>
            <li><Button href="/about">关于</Button></li>
            <li>
              <Button href="https://github.com/vivatoviva">
                <span>
                  <FontAwesomeIcon
                    icon={faGithub}
                  />
                </span>
                Github
              </Button>
            </li>
          </nav>
        </div>
      </div>
    )
  }
}

export default IndexPage;
