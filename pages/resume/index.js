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
        padding:40px 0px;
        width: 100%;
      }
      div.resume {
        max-width: 1024px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0px 0px 15px rgb(208, 208, 208);
      }
      h1 {
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
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        line-height: 1.5;
        font-size: 14px;
        transition: color .3s ease;
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
                <li>男 / 1997.08</li>
                <li>绩点： 3.53（ 前5% ）</li>
                <li>重庆邮电大学 | 信息管理与信息系统</li>
              </ul>
              <ul className="right influence">
                <li>
                  <a href="http://blogoog.com/">www.blogoog.com<span><i class="fas fa-home"></i> </span></a>
                </li>
                <li>
                  <a href="tel:17784455445">
                    17784455445 <span><i class="fas fa-phone"></i> </span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/vivatoviva">
                    github.com/vivatoviva
                    <span><i class="fas fa-github"></i></span>
                  </a>
                </li>
                <li>
                  <a href="mailto:1461304646@qq.com">
                    1461304646@qq.com 
                    <span><i class="fas fa-envelope"></i></span>
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
                  <Item time="2018.7 - 2017.6" tag="创业团队">勤奋峰</Item>
                  <Item time="2018.7 - 2017.6" tag="实习">阿里巴巴飞天事业部</Item>
                </Dividing>
              </section>
              <section>
                <Dividing
                  title="专业技能"
                  icon="tree"
                > 
                  <Descript isItem>
                  掌握Web前端开发基本技能，熟悉<span>W3C标准</span>、<span>页面布局架构</span>、<span>前端语义化</span>、<span>浏览器兼容性</span>等，懂些审美，擅长设计，重视用户体验与代码可维护性，有近2年的前端开发经验。
                  </Descript>
                  <Descript isItem>
                  掌握Web前端开发基本技能，熟悉<span>W3C标准</span>、<span>页面布局架构</span>、<span>前端语义化</span>、<span>浏览器兼容性</span>等，懂些审美，擅长设计，重视用户体验与代码可维护性，有近2年的前端开发经验。
                  </Descript>
                  <Descript isItem>
                  掌握Web前端开发基本技能，熟悉<span>W3C标准</span>、<span>页面布局架构</span>、<span>前端语义化</span>、<span>浏览器兼容性</span>等，懂些审美，擅长设计，重视用户体验与代码可维护性，有近2年的前端开发经验。
                  </Descript>
                  <Descript isItem>
                  掌握Web前端开发基本技能，熟悉<span>W3C标准</span>、<span>页面布局架构</span>、<span>前端语义化</span>、<span>浏览器兼容性</span>等，懂些审美，擅长设计，重视用户体验与代码可维护性，有近2年的前端开发经验。
                  </Descript>
                  <Descript isItem>
                  掌握Web前端开发基本技能，熟悉<span>W3C标准</span>、<span>页面布局架构</span>、<span>前端语义化</span>、<span>浏览器兼容性</span>等，懂些审美，擅长设计，重视用户体验与代码可维护性，有近2年的前端开发经验。
                  </Descript>
                  <Descript isItem>
                  掌握Web前端开发基本技能，熟悉<span>W3C标准</span>、<span>页面布局架构</span>、<span>前端语义化</span>、<span>浏览器兼容性</span>等，懂些审美，擅长设计，重视用户体验与代码可维护性，有近2年的前端开发经验。
                  </Descript>
                  <Descript isItem>
                  掌握Web前端开发基本技能，熟悉<span>W3C标准</span>、<span>页面布局架构</span>、<span>前端语义化</span>、<span>浏览器兼容性</span>等，懂些审美，擅长设计，重视用户体验与代码可维护性，有近2年的前端开发经验。
                  </Descript>
                  <Descript isItem>
                  掌握Web前端开发基本技能，熟悉<span>W3C标准</span>、<span>页面布局架构</span>、<span>前端语义化</span>、<span>浏览器兼容性</span>等，懂些审美，擅长设计，重视用户体验与代码可维护性，有近2年的前端开发经验。
                  </Descript>
                </Dividing>
              </section>
              <section>
                <Dividing
                  title="奖项证书"
                  icon="certificate"
                >
                  <Item time="2018.7 - 2017.6" tag="教育部">计算机四级 网络技术</Item>
                  <Item time="2018.7 - 2017.6" tag="校级">三好学生</Item>
                  <Item time="2018.7 - 2017.6" tag="校级">二等奖学金</Item>
                </Dividing>
              </section>
            </div>
            <div className="left item">
              <section>
                <Dividing
                  title="项目经验"
                  icon="project-diagram"
                >
                  <Item time="2015.6" tag={{name: 'Link', link: "https://www.google.com/"}}>北京crm系统 · 中后台</Item>
                  <Descript >学习了比较好的方法，苦于没有一直维护的项目，所以进行此项目，本项目将有自己全权维护，进行开发，在主页关于中有详细的说明</Descript>
                  <Item time="2015.6" tag="Link">内部搭建系统 · 搭建生态</Item>
                  <Descript >提出想法项目牵头产品策划前端开发代码开源 基于微信小程序MINA框架的WXML、WXSS、JS为代码语言进行开发，视图层采用Flex弹性布局，逻辑层采用模块化模式开发。 此外还利用gulp、Express、ejs、Echarts等技术完成对产品官网及数据大盘的开发。</Descript>
                  <Item time="2015.6" tag="Link">享即达项目 · 外包项目</Item>
                  <Descript >提出想法项目牵头产品策划前端开发代码开源 基于微信小程序MINA框架的WXML、WXSS、JS为代码语言进行开发，视图层采用Flex弹性布局，逻辑层采用模块化模式开发。 此外还利用gulp、Express、ejs、Echarts等技术完成对产品官网及数据大盘的开发。</Descript>
                </Dividing>
              </section>
              <section>
                <Dividing
                  title="个人作品"
                  icon="user"
                >
                  <Item time="2018.7 - 2017.6" tag="Link">个人站点建设</Item>
                  <Descript >学习了比较好的方法，苦于没有一直维护的项目，所以进行此项目，本项目将有自己全权维护，进行开发，在主页关于中有详细的说明</Descript>
                  <Item time="2018.7 - 2017.6" tag="Link">个人站点建设</Item>
                  <Descript >学习了比较好的方法，苦于没有一直维护的项目，所以进行此项目，本项目将有自己全权维护，进行开发，在主页关于中有详细的说明</Descript>
                  <Item time="2018.7 - 2017.6" tag="Link">个人站点建设</Item>
                  <Descript >学习了比较好的方法，苦于没有一直维护的项目，所以进行此项目，本项目将有自己全权维护，进行开发，在主页关于中有详细的说明</Descript>
                  <Item time="2018.7 - 2017.6" tag="Link">个人站点建设</Item>
                  <Descript >学习了比较好的方法，苦于没有一直维护的项目，所以进行此项目，本项目将有自己全权维护，进行开发，在主页关于中有详细的说明</Descript>
                  <Item time="2018.7 - 2017.6" tag="Link">个人站点建设</Item>
                  <Descript >学习了比较好的方法，苦于没有一直维护的项目，所以进行此项目，本项目将有自己全权维护，进行开发，在主页关于中有详细的说明</Descript>
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