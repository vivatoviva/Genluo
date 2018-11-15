import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avtor from '../Avtor';

export default class Input extends Component {
  static propTypes = {
    isNeedAvtor: PropTypes.bool,
    ok: PropTypes.func,
    avtorImgUrl: PropTypes.string,
    defaultInputFocus: PropTypes.bool,
  }

  static defaultProps = {
    isNeedAvtor: false,
    ok: null,
    avtorImgUrl: '',
    defaultInputFocus: false,
  }

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  state = {
    inputValue: '',
    operateActive: false,
  }

  componentDidMount() {
    const { defaultInputFocus } = this.props;
    if (defaultInputFocus) {
      this.input.current.focus();
    }
  }

  handleOk = () => {
    const { ok } = this.props;
    const { inputValue } = this.state;
    // 存在成功回掉函数
    if (ok && inputValue) {
      ok(inputValue);
    } else {
      this.input.current.focus();
    }
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleInputFocus = () => {
    this.setState(({ operateActive }) => ({
      operateActive: !operateActive,
    }));
  }

  render() {
    const { inputValue, operateActive } = this.state;
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
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputFocus}
              ref={this.input}
            />
            {
              operateActive && (
                <div className="operate">
                  <button onClick={this.handleOk} type="button">评论</button>
                </div>
              )
            }
          </div>
        </div>
        <style jsx>
          {`
            .wrapper {
              width: 100%;
              min-height: 80px;
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
            .input .operate {
              width: 100%;
              box-sizing: border-box;
              padding: 10px 0px;
              overflow: hidden;
            }
            .operate button {
              width: 80px;
              line-height: 33px;
              font-size: 15px;
              background: #027fff;
              outline: 0;
              cursor: pointer;
              color: #fff;
              border-radius: 4px;
              text-align: center;
              float: right;
            }
          `}
        </style>
      </div>
    );
  }
}
