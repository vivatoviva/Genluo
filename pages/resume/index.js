import React from 'react';
import Head from '../../components/Head'
import Dividing from '../../components/resume/DivdingLine'
import Item from '../../components/resume/Item'
import Descript from '../../components/resume/descript'

const Style = () =>
  <>
    <style jsx global>{`
        body {
          background-color: rgb(238, 238, 238);
        }
    `}</style>
    <style jsx>{`
      @media screen and (max-width: 1340px) {
      }
      div.wraper {
        box-sizing: border-box;
        color: #333;
        font-family: "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
        width: 100%;
      }
      div.resume {
        max-width: 1024px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0px 0px 15px rgb(208, 208, 208);
      }
      h1 {
        font-weight: normal;
        color: #fff;
        font-size: 50px;
        position:relative;
      }
      h1 small {
        font-size: 23px;
      }
      header {
        background-color: rgb(0, 179, 138);
        overflow: hidden;
        padding: 40px 55px;
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
        padding-top: 20px;
        padding-bottom: 30px;
      }
      .body .item {
        display: inline-block;
        width: 50%;
      }
    `}</style>  
  </>
  
class Index extends React.Component {
  render() {
    return (
      <div className="wraper">
        <Head title="简历"></Head>
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
                <li>绩点：3.53 / 4.00</li>
                <li>重庆邮电大学 | 信息管理与信息系统 | 本科 | 2020年毕业</li>
              </ul>
              <ul className="right influence">
                <li>
                  <a href="tel:17784455445">
                    17784455445 <span><i className="fas fa-phone"></i> </span>
                  </a>
                </li>
                <li>
                  <a href="http://blogoog.com/">www.blogoog.com<span><i className="fas fa-home"></i> </span></a>
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
                  <Item time="2018.08 ~ 至今" tag="创业合伙人">校园行平台 · 技术合伙人</Item>
                  <Item time="2017.05 ~ 至今" tag="创业团队">勤奋峰 · 前端组</Item>
                  <Item time="2016.09 ~ 2017.09" tag="学生组织">重邮微校 · 项目部</Item>
                </Dividing>
              </section>
              <section>
                <Dividing
                  title="专业技能"
                  icon="tree"
                > 
                  <Descript isItem>
                  掌握web开发基本技能，熟悉<span>W3c标准</span>、<span>页面架构布局</span>、<span>前端语义化</span>，懂些<span>审美</span>、重视<span>用户体验</span>及<span>代码可维护性</span>，有近两年的开发经验
                  </Descript>
                  <Descript isItem>
                  对现代的框架<span>React及其相关技术栈</span>、<span>Nextjs</span>、<span>Eggjs</span>、<span>Koajs</span>等有着较熟的实践和较深的感悟
                  </Descript>
                  <Descript isItem>
                  对<span>计算机网络</span>、<span>性能优化</span>、<span>前端工程化</span>、<span>前端安全</span>、<span>es6</span>、<span>Nodejs</span>等有一定的了解和思考
                  </Descript>
                  <Descript isItem>
                  熟练使用Git进行<span>版本控制</span>、<span>团队合作</span>，<span>Linux</span>、<span>Nginx</span>等环境部署，了解项目开发流程及其开发调试工具的使用。
                  </Descript>
                  <Descript isItem>
                  熟练相关爬虫，主要使用的<span>Nodejs</span>和<span>Python</span>的<span>Scrapy</span>框架进行大规模爬取数据，并且熟悉相关爬虫库，并在github上开源的相关爬虫代码
                  </Descript>
                  <Descript isItem>
                  
                  </Descript>       
                </Dividing>
              </section>
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
                  <Item time="2018.10" tag="Link">宅居修项目 · 外包项目</Item>
                  <Descript >
                    <span>二期开发</span>，使用<span>Wepy</span>框架在一期项目的基础上进行小程序的二期开发，视图层采用<span>Flex弹性布局</span>，基于组件化的开发模式，<span>类VUE</span>的相关开发体验，此外，还使用<span>ant-desgin</span>相关技术对管理端进行二次开发，学习学长的相关代码
                  </Descript>
                  <Item time="2018.07" tag={{name: 'Link', link: "https://www.google.com/"}}>CRM系统 · 中后台</Item>
                  <Descript>
                    <span>项目推动</span>，<span>前端开发</span>，使用ant-degin-pro开发的一套后台系统，实现<span>权限管理</span>，<span>数据可视化</span>，<span>数据mock</span>等等，推动产品、后台共同交付此产品，并在项目后期进行相关维护、二次开发
                  </Descript>
                  <Item time="2018.02" tag="Link">内部搭建系统 · 搭建生态</Item>
                  <Descript >
                    <span>成长系统</span>大四学长带着做的一套系统，前期主要使用<span>Eggjs</span>负责搭建系统核心生态后端的构建和<span>管理端</span>的开发，弄懂整套系统的设计，后期作为系统的<span>负责人</span>，提出想法，并牵头进行开发，搭建并且维护线上<span>Linux服务器环境</span>
                  </Descript>
                  {/* <Item time="2015.6" tag="Link">ABO微信 · 微信H5</Item>
                  <Descript >
                    使用webpack配置项目，使用ejs、Zeptojs、sass等实现组件化，并且将其制作成勤奋峰前端脚手架工具，并且一直维护至今
                  </Descript> */}

                </Dividing>
              </section>
              <section>
                <Dividing
                  title="个人作品"
                  icon="user"
                >
                  <Item time="2018.09 ~ 至今" tag="Link">个人站点建设</Item>
                  <Descript >
                    个人站点的开发，主要包括<span>博客</span>、<span>简历</span>、<span>介绍</span>等几个主要模块，前端使用<span>Nextjs</span>进行<span>同构处理</span>，后端使用<span>Koajs</span>和<span>mysql</span>技术栈提供支持，管理端使用antd-desgin-pro进行搭建，并进行部署上线，使用<span>nginx</span>和<span>node</span>部署、<span>按需加载</span>、<span>预加载</span>等降低首屏渲染事件，为用户提供快速的响应，和优秀的网站体验，并将项目的项目的几个功能点抽离出来上传到npm，主要的<span>genluo-cli</span>、<span>github-push</span>、<span>markdownToDom</span>，<span>koa-mysql</span>等的封装。也是自己主要尝试新技术的实现项目，配置<span>Https</span>、<span>http2.0</span>等等新技术的实验地
                  </Descript>
                  {/* <Item time="2018.9 ~ 至今" tag="Link">koa-mysql</Item>
                  <Descript >
                    个人站点抽离出的一个子项目，主要用于传入约定的对象，生成对应的mysql语句，方便与开发，主要是想模仿Moggoose、egg-mysql，实现方便的操作数据库
                  </Descript> */}
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