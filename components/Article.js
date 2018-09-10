export default () =>
  <div className="wraper">
    <h1><span>前端之巅</span></h1>
    <div className="data">
      <ul>
        <li>发表于：2018年9月5日</li>
        <li>更新于：2018年9月6日</li>
        <li>分类于： web</li>
        <li>阅读次数：300</li>
      </ul>
    </div>
    <p>这段时间在学习缓存优化，在进行LS缓存优化的时候，动态插入script标签的时候，代码执行顺序前后会出错，但是代码插入到html中的顺序是正确的，思考了很久，最后发现这是 script的async的影响，但是通过这个过程发现自己对于页面渲染和代码执行顺序还是很模糊啊，一直想研究webkit，这次就做一个先驱吧，先行了解一波web页面是如何渲染出来</p>
    <button>阅读全文 »</button>
    <style jsx>{`
      .wraper {
        padding: 50px 0 50px;
        border-bottom: 1px dotted #999;

      }
      h1 {
        text-align: center;
        font-weight: 500;
        margin-bottom: 20px;
      }
      ul {
        display: flex;
        justify-content: center;

      }
      li {
        padding: 0 10px 0 10px;
        line-height: 1;
        color: rgb(153, 153, 153)
      }
      li + li {
        border-left: 1.5px solid rgb(153, 153, 153);
      }
      h1 span:hover {
        border-bottom: 2px solid #000;
      }
      p {
        text-align: justify;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 16px;
        line-height: 2;
        color: #555;
      }
      button {
        background-color: #fff;
        outline: 0;
        border: 3px solid rgb(85, 85, 85);
        cursor: pointer;
        width: 120px;
        height: 36px;
        font-size: 17px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        transition: 300ms all ease;
        margin-top: 50px;
      }
      button:hover {
        border-color: #000;
        background-color: #000;
        color: #fff;
      }
    `}</style>
  </div>
  