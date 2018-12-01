import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avtor from '../Avtor';

export default class Input extends Component {
  static propTypes = {
    isNeedAvtor: PropTypes.bool,
    ok: PropTypes.func,
    avtorImgUrl: PropTypes.string,
    defaultInputFocus: PropTypes.bool,
    hide: PropTypes.func,
  }

  static defaultProps = {
    isNeedAvtor: false,
    ok: null,
    avtorImgUrl: '',
    defaultInputFocus: false,
    hide: null,
  }

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  state = {
    inputValue: '',
    operateActive: false,
    canSubmit: false,
  }

  componentDidMount() {
    const { defaultInputFocus } = this.props;
    if (defaultInputFocus) {
      this.inputFocus();
    }
  }

  inputFocus = () => {
    this.input.current.focus();
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
    const textValue = e.target.innerHTML;
    this.setState({
      inputValue: textValue,
    });
    if (textValue.length > 0) {
      this.setState({
        canSubmit: true,
      });
    } else {
      this.setState({
        canSubmit: false,
      });
    }
  }

  handleInputFocus = (e) => {
    console.log(e.target.setSelectionRangit);
    this.setState({
      operateActive: true,
    });
  }

  handleInputBlur = () => {
    const { inputValue } = this.state;
    const { hide } = this.props;
    if (inputValue.length === 0) {
      this.setState({
        operateActive: false,
      });
      if (hide) hide();
    }
  }

  handleOtherClick = () => {
    const { operateActive } = this.state;
    if (operateActive) this.inputFocus();
  }

  render() {
    const { operateActive, canSubmit } = this.state;
    const { isNeedAvtor, avtorImgUrl } = this.props;
    return (
      <div className="wrapper">
        <div className="body" onClick={this.handleOtherClick} role="presentation">
          {
            isNeedAvtor && <div className="avtor"><Avtor imgUrl={avtorImgUrl} /></div>
          }
          <div className="input-wrapper">
            <div className={`input-box ${operateActive && 'active'}`}>
              <div
                className={canSubmit ? 'rich-input' : 'rich-input empty'}
                ref={this.input}
                contentEditable
                placeholder="请评论..."
                onInput={this.handleInputChange}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              />
            </div>
            {
              operateActive && (
                <div className="operate">
                  <span>Ctrl + Enter 快捷发送</span>
                  <button
                    onClick={this.handleOk}
                    type="button"
                    className={canSubmit && 'canSubmit'}
                  >
                    评论
                  </button>
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
              box-sizing: border-box;
              padding: 5px;
              float: left;
            }
            .input-wrapper {
              float: left;
              width: ${isNeedAvtor ? 'calc( 100% - 50px)' : '100%'};
              box-sizing: border-box;
              padding: 8px 20px;
              height: 100%;
            }

            .input-box {
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              border: 1px solid #eee;
              border-radius: 4px;
            }
            .input-box.active {
              border: 1px solid rgb(0, 127, 255);
            }
            .rich-input {
              outline: 0;
              padding: 7px 12px;
              line-height: 22px;
              color: #17181a;
              text-align: justify;
            }

            .empty:before {
              content: attr(placeholder);
              position: absolute;
              opacity: .4;
              pointer-events: none;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }

            .operate {
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
              border: 0;
              color: #fff;
              border-radius: 4px;
              text-align: center;
              float: right;
              opacity: 0.4;
              tranition: all 300ms;
            }
            .operate button:hover {
              background-color: #0371df;
            }
            .operate span {
              color: #aaa;
              line-height: 33px;

            }
            .operate button.canSubmit {
              opacity: 1;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  }
}
