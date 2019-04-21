import React from 'react';
import Head from '../../components/Head';
import Dividing from '../../components/resume/DivdingLine';
import Item from '../../components/resume/Item';
import Descript from '../../components/resume/descript';

const a:number = 2;
console.log(a);


const Style = () => (
    <>
      <style jsx global>
        {`
            body {
              background-color: rgb(238, 238, 238);
              
            }
        `}
      </style>
      <style jsx>
        {`
        {/* 打印调用函数 */}
        @media print {
          div#wrapper {
            margin: 0 auto;
          }
        }
        div.wraper {
          margin: 30px auto 30px;
          box-sizing: border-box;
          color: #333;
          width: 1024px;
          font-family: "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
        }
        div.resume {
          overflow: hidden;
          background-color: #fff;
          box-shadow: 0px 0px 15px rgb(208, 208, 208);
        }
        h1 {
          font-weight: normal;
          color: #fff;
          font-size: 60px;
          position:relative;
        }
        h1 small {
          font-size: 23px;
        }
        header {
          background-color: rgb(0, 179, 138);
          overflow: hidden;
          padding: 20px 55px 50px;
          box-sizing: border-box;
        }
        .left {
          float: left;
        }
        .right {
          float: right;
        }
        .clear {
          overflow: hidden;
        }
        ul li {
          text-align: right;
          color: #fff;
          line-height: 1.5;
          font-size: 14px;
          transition: color .3s ease;
          font-family: Arial, "Microsoft YaHei";
        }
        ul li span {
          font-size: 13px;
          line-height: 100%;
          margin-left: 3px;
        }
        .tech  li {
          text-align: left;
          font-size: 17px;
          line-height: 1.68;
        }
        .influence li:hover {
          color: rgb(218, 218, 218);
          cursor: pointer;
        }
        .influence span {
          width: 13px;
          line-height: 1;
          display: inline-block;
          vertical-align: -3%;
        }
        .influence li a {
          color: inherit;
          text-decoration: none;
        }
        .job {
          font-size: 22px;
          position: absolute;
          right: 0;
          bottom: 0;
        }
        
        .base-info {
          padding-bottom: 15px;
        }
        .more-info {
          border-top: 2px solid #00a982;
          padding-top: 15px;
        }
        .body {
          padding: 70px 20px 60px;
        }
        .body .item {
          display: inline-block;
          width: 50%;
          box-sizing: border-box;
        }
        section {
          padding: 0px 13px;
        }
        @media screen and (max-width: 1024px) {
          div.wraper {
          border-radius: 0px;
            margin: 0;
            width: 100%;
          }
        }
      `}
      </style>
    </>
);

class Index extends React.PureComponent {

  render() {
    return (
      <div className="wraper" id="wrapper">
        <Head title="简历" />
        <div className="resume">
          <header>
            <div className="clear base-info">
              <div className="block-item">
                <p className="base">
                  <h1>李根 <small>Genluo</small><span className="job">web前端开发工程师</span></h1>
                </p>
              </div>
            </div>
            <div className="clear more-info">
              <ul className="left tech">
                <li>男 / 1997.08 </li>
                <li>绩点：3.53 / 4.00 / 前5%</li>
                <li>重庆邮电大学 | 信息管理与信息系统 | 本科 | 2020年毕业</li>
              </ul>
              <ul className="right influence">
                <li>
                  <a href="tel:17784455445">
                    17784455445 <span><i className="fas fa-phone" /></span>
                  </a>
                </li>
                <li>
                  <a href="http://120.78.71.60/">www.genluo.site<span><i className="fas fa-home"></i></span></a>
                </li>

                <li>
                  <a href="https://github.com/vivatoviva">
                    github.com/vivatoviva
                    <span><i class="fab fa-github"></i></span>
                  </a>
                </li>
                <li>
                  <a href="mailto:1461304646@qq.com">
                    1461304646@qq.com 
                    <span><i className="fas fa-envelope"></i></span>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div className="body clear">
            <div className="item left">
              <section>
                <Dividing
                  title="实践经历"
                  icon="school"
                >
                  {/* <Item time="2018.08 ~ 至今" tag="创业合伙人">校园行平台 · 合伙人</Item> */}
                  <Item time="2017.05 ~ 至今" tag="创业团队">勤奋蜂团队 · 前端组</Item>
                  {/* <Item time="2016.09 ~ 09" tag="学生组织">重邮微校 · 项目部</Item> */}
                  <Descript>
                    <span>团队介绍</span>勤奋蜂团队是一个互联网初创团队，涵盖产品、运营、前端、后台、移动、设计等部门。团队拥有校园说、校招导师、零食峰等多个产品，先后参与比赛并获得多个国家级奖项。其中，校招导师产品运营的工作号超过<span>15k</span>的用户,日平均浏览量达<span>1K</span>
                  </Descript>
                  <Descript>
                    <span>web前端组</span>负责团队项目的开发，维护及其<span>性能优化</span>,同时参与了团队的建设、带动新成员学习、日常技术分享和<span>codeReview</span>。期间积攒了各类项目开发经验和<span>团队、部门合作经验</span>
                  </Descript>
                </Dividing>
              </section>
              <section>
                <Dividing
                  title="专业技能"
                  icon="tree"
                > 
                  <Descript isItem>
                    掌握web开发基本技能，熟悉<span>W3c标准</span>、<span>页面架构布局</span>、<span>前端语义化</span>，懂些<span>审美</span>、重视<span>用户体验</span>及<span>代码可维护性</span>，有近两年的前端开发经验
                  </Descript>
                  <Descript isItem>
                    对现代框架<span>React及其相关技术栈</span>、<span>Next js</span>、<span>Ant Design</span>等有着较熟的实践和较深的感悟
                  </Descript>
                  <Descript isItem>
                    有<span>全栈开发</span>项目经验，熟练使用使用<span>Koa</span>、<span>Egg</span>开发web项目，了解常见的后端逻辑，能够和后端高效的定位问题、进行合作开发。
                  </Descript>
                  <Descript isItem>
                    对<span>性能优化</span>、<span>前端工程化</span>、<span>web安全</span>、<span>es6</span>、<span>计算机网络</span>、<span>数据结构</span>、<span>常见算法</span>、<span>计算机操作系统</span>等有一定的了解和思考
                  </Descript>
                  <Descript isItem>
                    熟练使用Git进行<span>版本控制</span>、<span>代码托管</span>、<span>合作开发</span>、<span>markdown</span>文档编写，
                    并以<span>Mac os</span>、<span>Linux</span>、<span>VS Code</span>作为日常开发环境进行开发，
                    了解<span>Linux</span>、<span>Nginx</span>等环境部署，了解项目开发流程及其开发调试工具的使用。
                  </Descript>
                  {/* <Descript isItem>
                  熟练相关爬虫，主要使用的<span>Nodejs</span>和<span>Python</span>的<span>Scrapy</span>框架进行大规模爬取数据，并且熟悉相关爬虫库，并在github上开源的相关爬虫代码
                  </Descript> */}
                </Dividing>
              </section>
              {/* <section>
                <Dividing
                  title="开源经历"
                  icon="code"
                >
                  <Item time="2018.9 ~ 至今" tag="Link">koa-mysql</Item>
                  <Descript >
                    个人站点抽离出的一个子项目，主要用于传入约定的对象，生成对应的mysql语句，方便与开发，主要是想模仿Moggoose、egg-mysql，实现方便的操作数据库
                  </Descript>
                </Dividing>
              </section> */}
              <section>
                <Dividing
                  title="奖项证书"
                  icon="certificate"
                >
                  <Item time="2017.10" tag="教育部">NCRE 网络工程师</Item>
                  <Item time="2017.09" tag="校级">三好学生</Item>
                  <Item time="2017.09" tag="校级">二等奖学金</Item>
                </Dividing>
              </section>
            </div>
            <div className="left item">
              <section>
                <Dividing
                  title="项目经验"
                  icon="project-diagram"
                >
                  {/* <Item time="2018.10" tag="Link">宅居修项目 · 小程序</Item>
                  <Descript>
                    <span>二期开发</span>、<span>页面重构</span>，使用<span>Wepy</span>框架在一期项目的基础上进行小程序的二期开发，视图层采用<span>Flex弹性布局</span>，<span>逻辑层</span>采用组件化模式开发。此外，还使用<span>Ant-Design</span>相关技术对管理端进行二次开发。
                  </Descript> */}
                  <Item time='2019.2' tag='Link'>餐云项目 · 小程序</Item>
                  <Descript>
                    使用<span>Taro</span>、<span>Ts</span>、<span>Mobx</span>相关技术构建的小程序，根据需求稿实现页面逻辑与样式、<span>封装业务组件</span>，<span>编写相关工具函数</span>、<span>使用装饰器来实现页面分享</span>、<span>使用中间件机制来封装request请求</span>、<span>主要设计、实现、并优化审核商品页面</span>
                  </Descript>
                  <Item time="2018.07" tag={{name: 'Link', link: "https://www.google.com/"}}>CRM系统 · 中后台</Item>
                  <Descript>
                    <span>项目推动</span>，<span>前端开发</span>、<span>项目牵头</span>，主要为一家海外留学教育机构实现的一套客户关系管理系统，销售人员可以将客户按照成交状态、重要性、处理时间进行分类，然后对客户持续跟进，最大化客户的签约率和留存率，改善与统一销售、市场营销、客户服务和支持等领域的客户关系有关的商业流程
                  </Descript>
                  <Descript>
                    使用<span>Ant-degin-pro</span>开发的一套后台系统，实现<span>客服、销售、主管三种权限管理</span>，<span>客户历史数据可视化</span>，<span>前端数据 mock</span>等等，推动产品、后台共同交付此产品，并在项目后期进行相关维护、产品迭代
                  </Descript>
                  {/* <Item time="2018.06" tag="Link">ABO微信 · 微信H5</Item>
                  <Descript >
                    <span>项目配置</span>、<span>项目负责</span>使用webpack配置项目，使用Ejs、Zeptojs、Sass等实现组件化,并且将整个项目初始配置封装成<span>genluo-cli</span>脚手架工具,方便后续开发H5项目
                  </Descript> */}
                  <Item time="2018.02" tag="Link">搭建系统 · 搭建生态</Item>
                  <Descript>
                    <span>成长系统</span>、<span>页面可视化搭建</span>、<span>后端支持</span>这是一套<span>模块化页面可视化搭建平台</span>系统，服务于非技术人员，实现H5活动页的<span>可视化</span>构建生成、<span>自动化发布</span>、<span>逆向修改</span>等功能
                  </Descript>
                  <Descript>
                    使用<span>Egg</span>负责搭建系统<span>页面生成</span>的后端构建和<span>管理端接口</span>的开发，实现<span>页面的搭建生成的相关流程</span>、<span>模块开发的相关流程</span>、配合gitlab相关钩子实现自动化部署流程
                    {/* 弄懂整套系统的设计，后期作为系统的<span>负责人</span>，提出想法，并牵头进行开发，搭建并且维护线上<span>Linux服务器环境</span> */}
                  </Descript>
                </Dividing>
              </section>
              <section>
                <Dividing
                  title="个人作品"
                  icon="user"
                >
                  <Item time="2018.09 ~ 至今" tag="Link">个人站点建设</Item>
                  <Descript >
                    <span>全栈开发</span>、<span>个人站点</span>、<span>开源作品</span>
                    个人站点的建设，主要包括<span>博客</span>、<span>简历</span>、<span>介绍</span>等几个主要板块。
                    前端使用<span>React技术栈</span>进行组件化开发
                    后端使用<span>Next js</span>、<span>Koa</span>进行<span>同构化处理</span>，
                    使用<span>mysql</span>提供数据存储服务，
                    管理端使用<span>Antd-Design</span>进行搭建，使用<span>nginx</span>和<span>PM2</span>部署，实现<span>按需加载</span>、<span>预加载</span>等降低首屏渲染时间，实现<span>markdown转html</span>的通用工具，并在开发过程中提取出一套脚手架CLI，提高后续开发效率
                    {/* 为用户提供快速的响应，和优秀的网站体验，并将项目的项目的几个功能点抽离出来上传到npm进行开源，此站点也是自己尝试新技术提升网站性能的实验站点。 */}
                  </Descript>
                </Dividing>
              </section>
            </div>
          </div>
        </div>
        <Style />
      </div>
    )
  }
}
export default Index;