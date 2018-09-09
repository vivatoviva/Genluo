import React from 'react'
import withItem from './withItem'

const BlogNav = () => 
  <div>
    <h1>Genluo</h1>
    <ul>
      <li>首页</li>
      <li className="navNow">标签</li>
      <li>分类</li>
      <li>搜索</li>
    </ul>
    <style jsx>{`
      h1 {
        background: #000;
        color: #fff;
        font-size: 25px;
        padding: 30px 40px;
        text-align: center;
        font-weight: 300;
        font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
      }
      ul {
        background: #fff;
        padding: 10px 0;
      }
      li+li {
        margin-top: 10px;
      }
      li {
        font-size: 15px;
        box-sizing: border-box;
        padding:0 20px;
        line-height: 2.5;
      }
      .navNow {
        background: rgb(249, 249, 249);
      }
    `}</style>
  </div>

export default withItem(BlogNav);