import React from 'react';
import Head from '../components/Head';
import BlogNav from '../components/BlogNav';
import BlogData from '../components/BlogData';
import ToTop from '../components/ToTop';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Search from '../components/Search';
import List from '../components/List';
import Structure from '../components/BlogStructure';


class BlogPage extends React.Component {
  state = {
    isFixed: false,
    isDisplayToTop: false,
    visible: false,
  }

  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }

  componentDidMount() {
    const height = this.nav.current.clientHeight + 10;
    const windowHeight = document.body.clientHeight + 100;
    const windowHandle = () => {
      const nowHeight = window.pageYOffset;
      if (nowHeight >= height) {
        this.setState({
          isFixed: true,
        });
      } else {
        this.setState({
          isFixed: false,
        });
      }
      if (nowHeight >= windowHeight) {
        this.setState({
          isDisplayToTop: true,
        });
      } else {
        this.setState({
          isDisplayToTop: false,
        });
      }
    };
    windowHandle(); // 页面加载，进行一次计算
    window.addEventListener('scroll', windowHandle);
  }

  changeVisible = () => {
    this.setState(prevSate => ({
      visible: !prevSate.visible,
    }));
  }

  handleModalOk = () => {
    this.setState({
      visible: false,
    });
  }

  handleModalCancel = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { isFixed, isDisplayToTop, visible } = this.state;
    const {
      children,
      navIndex,
      title,
      isArticle,
      content,
      now,
      statisticsData,
    } = this.props;
    const items = [{
      name: '首页',
      link: '/blog',
      icon: 'home',
    }, {
      name: '标签',
      link: '/blog/tag',
      icon: 'tags',
    }, {
      name: '分类',
      link: '/blog/category',
      icon: 'table',
    }, {
      name: '归档',
      link: '/blog/archives',
      icon: 'archive',
    }, {
      name: '搜索',
      icon: 'search',
      onClick: this.changeVisible,
    }];
    return (
      <div className="wraper">
        <Head title={title || '博客主页'} />
        <div className="can">
          <div className="left">
            <div className="nav" ref={this.nav}>
              <BlogNav
                navIndex={navIndex}
                items={items}
                renderItem={
                  (currentIndex, items) => items.map(
                    ({ link, icon, onClick, name }, index) =>
                      (
                        <BlogNav.Item
                          href={link}
                          icon={icon}
                          onClick={onClick}
                          currentIndex={currentIndex === index}
                        >
                          {name}
                        </BlogNav.Item>
                      )
                    )
                  }
              />
              {
                <Modal
                  onOK={this.handleModalOk}
                  onCancel={this.handleModalCancel}
                  visible={visible}
                >
                  <Search
                    onClose={this.handleModalCancel}
                  />
                  <div className="list">
                    <List
                      dataSource={['xian', 'zai', 'xian', 'baijin', 'jinxing']}
                      renderItem={item =>
                        (
                          <List.Item
                            title={item}
                            content="xiand afsdfsdhfkjsdh"
                          />
                        )
                      }
                    />
                  </div>
                </Modal>
              }
            </div>
            {/* 在这边显示相关目录 */}
            <div className={!isFixed ? 'data' : 'data dataNow'}>
              {
                isArticle ? <Structure data={content} now={now}></Structure>
                  :
                  <BlogData
                    {...statisticsData}
                  />
              }
            </div>
          </div>
          <div className="right">
            <div className="content">
              {children}
            </div>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
        <div className="toTap">
          <ToTop isDisplay={isDisplayToTop} />
        </div>
        <style jsx>
          {`
          @media screen and (max-width: 1340px) {
            .left {
              width: 100%;
            }
            .data {
              display: none;
            }
            .content {
              width: 100vw!important;
            }
          }
          .wraper {
            max-width: 1340px;
            margin: 0 auto;
          }
          .left {
            float: left;
          }
          .data.dataNow {
            top: 0;
            position: fixed;
          }
          .nav{
            margin-bottom: 10px;
          }
          .right {
            float: right;
          }
          .content {
            width: 1100px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 30px;
            min-height: 110vh;
          }
          footer{
            padding: 50px 0;
          }
          .list {
            width: 900px;
            height: 500px;
            overflow-y: scroll;

          }
        `}
        </style>
        <style global jsx>
          {`
            body {
              background: #f5f7f9!important;
            }
          `}
        </style>
      </div>
    )
  }
}

export default BlogPage;