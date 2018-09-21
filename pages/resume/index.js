import React from 'react';
import Head from '../../components/Head'

class Index extends React.Component {
  render() {
    return (
      <div className="wraper"> 
        <Head title="简历"></Head>
        <div className="resume">
          <div className="head">
            <div>
              <p>
                <H1>李根</H1>
                <span>求职意向：前端工程师</span>
              </p>
            </div>
            <div>
              <ul>
                <li>www.blogoog.com</li>
                <li>17784455445</li>
                <li>github.com/vivatoviva</li>
                <li>1461304646@qq.com</li>
                <li>重庆邮电大学 | 信息管理与信息系统专业</li>
              </ul>
            </div>
          </div>
        </div>
        <style jsx>{`
          div.wraper {
            box-sizing: border-box;
            padding: 40px 60px;
            width: 100%;
          }
          div.resume {
            width: 1024px;
            margin: 0 auto;
            background-color: red;

          }
        `}</style>
      </div>
    )
  }
}
export default Index;