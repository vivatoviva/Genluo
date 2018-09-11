import withItem from './withItem';

const BlogData =  () =>
  <div className="warper">
    <div className="avtor"></div>
    <h5>Genluo</h5>
    <ul>
      <li><span>25</span><span>日志</span></li>
      <li><span>25</span><span>分类</span></li>
      <li><span>25</span><span>标签</span></li>
    </ul>
    <style jsx>{`
      .warper {
        padding: 30px 0 30px;
        background-color: #fff;
      }
      .avtor {
        width: 43.3%;
        padding-top: 44%;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        border: 3px solid transparent;
        outline: 1px solid rgb(238, 238, 238);
        margin: 0 auto;
        background-image: url('../static/images/98575859.jpg');
        position: relative;
        cursor: pointer;

      }
      .avtor::after {
        content: "";
        top: 0;
        right: 0;
        width: 50%;
        height: 50%;
        background-image: url('../static/images/github.png');
        background-size: 100%;

        position: absolute;
      }
      h5 {
        text-align: center;
        font-size: 20px;
        margin: 10px 0 30px;
      }
      ul {
        width: 212px;
        margin:0 auto;
      }
      li {
        width: 70px;
        display: inline-block;
        cursor: pointer;
      }
      li span {
        display: block;
        text-align: center;
      }
      li span:nth-child(1) {
        font-weight: 600;
        font-size: 15px;
      }
      li span:nth-child(2) {
        color: #999;
        font-size: 15px;
        margin-top: 3px;
      }
      li + li {
        border-left: 1px solid rgb(238, 238, 238);
      }
    `}</style>
  </div>

export default withItem(BlogData);
