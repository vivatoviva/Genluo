import React, { Component } from 'react';
import Content from '../../components/Content';
import Head from '../../components/Head';


export default class extends Component {
  handleClick = () => {
  }

  render() {
    return (
      <div className="wraper">
        <Head title="关于" />
        <div className="content">
          <Content
            content="
            ### 个人简介

            自己目前是重庆邮电大学的一名在校大三学生，从大一开始接触前端，然后在接下的学习生活中一直将前端作为自己发展方向，相信在最近的几年，前端是具有巨大的发展潜力，所以目前坚持前端，但是并不局限期待的自己的发展，其实相比前端层面的学习，我更加注重在平时生活中计算机相关课程的学习，比如操作系统、计算机网络、数据结构、算法、UML建模、计算机组成原理、线性代数、概率论与数理统计、数据库原理的相关课程，同时自己也喜欢本专业开设的管理学、会计学、经济学等等相关课程。反正我就是一个不挑的人，只要的知识我就从来不排斥。目前大三了，我想确定自己在大三这一年要研究点什么，对待一门知识需要有一定的深度，目前确定自己在大三主要学习 CS相关课程、Node深入学习、JS语言层面的深入学习、chrome相关机制、React架构设计、小程序的相关学习
            
            ### 为什么要建立这个站点
            
            我自己感觉有下面几点需求吧
            
            - 自己的品牌建设
            - 自己掌控的产品
            - 可以根据自己的需求不断迭代
            - 练习新的技术的试验站点
            - 想开源，帮助更多人建设高性能站点
            - 这个可以作为毕业设计，后面可以加入更加高级的功能
            
            
            
            ### 站点技术栈
            
            - 使用Next.js同构处理，实现服务器同构
            - 使用Koa.js作为后端支持，实现相关后端逻辑
            - 使用Mysql作为数据库存储，所有资源的存储
            - 使用antDesginPro构建了管理端，实现整个站点数据管理
            - 剩下的提升效率的相关插件等等，后面有时间在继续整理
            
            ### 站点特性
            
            用到这些基础我到底做了一个什么功能站点出来，现在总结下：
            
            - 首页
            - 博客
            - 简历页面
            - 关于我
            - 跳转Github
            - 管理端
            
            ### 站点预期
            
            这里写下站点想做，但是一直还没有做的事情
            
            - 保证数据库的文章的稳定性，将数据库文章保存成文件，自动化存储在本地
            - 数据统计系统
            - 全站搜索功能
            - 评论系统
            
            目前就这几个，这段时间就先解决这些问题，然后在想下一步的站点建设。            
"
          />
        </div>
        <style jsx>
          {`
          .content {
            padding: 20px;
            max-width: 1024px;
            margin: 0 auto;
          }
          `}
        </style>
      </div>
    );
  }
}
