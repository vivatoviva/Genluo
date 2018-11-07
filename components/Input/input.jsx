import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avtor from '../Avtor';

export default class Input extends Component {
  static propTypes = {
    isNeedAvtor: PropTypes.bool,
    ok: PropTypes.func,
    avtorImgUrl: PropTypes.string,
  }

  static defaultProps = {
    isNeedAvtor: false,
    ok: null,
    avtorImgUrl: '',
  }

  state = {
    inputValue: '',
  }

  handleOk = () => {
    const { ok } = this.props;
    const { inputValue } = this.state;
    // 存在成功回掉函数
    if (ok) {
      ok(inputValue);
    }
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    const { inputValue } = this.state;
    const { isNeedAvtor, avtorImgUrl } = this.props;
    return (
      <div className="wrapper">
        <div className="body">
          {
            isNeedAvtor && <div className="avtor"><Avtor imgUrl={avtorImgUrl} /></div>
          }
          <div className="input">
            <input
              placeholder="输入评论..."
              type="text"
              value={inputValue}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        {/* <div className="operate">
          <button onClick={this.handleOk} type="button">确定</button>
        </div> */}
        <style jsx>
          {`
            .wrapper {
              width: 100%;
              height: 80px;
              overflow: hidden;
              padding: 15px 0;
              box-sizing: border-box;
              background-color: #fafbfc;
            }
            .body {
              overflow: hidden;
            }
            .avtor {
              width: 50px;
              height: 50px;
              float: left;
            }
            .input {
              float: left;
              width: ${isNeedAvtor ? 'calc( 100% - 50px)' : '100%'};
              box-sizing: border-box;
              padding: 5px 20px;
              height: 100%;
            }
            .input input {
              width: 100%;
              height: 40px;
              box-sizing: border-box;
              padding: 5px 10px;
              font-sizing: 20px;
            }
          `}
        </style>
      </div>
    );
  }
}
