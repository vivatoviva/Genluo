import Head from "../components/Head";
import React from 'react'
import Button from '../components/Button'
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
            <li><Button buttonTitle="主页"/></li>
            <li><Button buttonTitle="博客"/></li>
            <li><Button buttonTitle="简历"/></li>
            <li><Button buttonTitle="关于"/></li>
            <li><Button buttonTitle="github"/></li>
          </ul>
          <style jsx>{`
            h1 {
              margin-top: 190px;
              font-size: 150px;
              color: #fff;
              text-align: center;
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
              background-color: red;
              font-family: pingfang;
            }
         
          `}</style>
        </div>
      </div>
    )
  }
}

export default IndexPage;