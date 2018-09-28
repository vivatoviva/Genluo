import React from 'react'


/**
 *
 *
 * @export
 * @class
 * @extends {React.PureComponent}
 * @param onClose
 * @param onChange
 */

export default class extends React.PureComponent {
  
  state = {
    value: '',
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    const value = e.target.value;
    this.setState({
      value,
    })
    onChange && onChange(value);
  }
  
  handleDelete = () => {
    const { onChange, onClose } = this.props;
    this.setState({
      value: '',
    })
    onChange && onChange();
    onClose && onClose();
  }

  render() {
    const { value } = this.state;
    return (
      <div className="search">
        <div className="wrapper">
          <span className="icon icon-search"><i className="fas fa-search"></i></span>
          <div className="input">
            <input
              type="text"
              placeholder="搜索..."
              onChange={this.handleChange}
              value={value}
            />
          </div>
          <span
            className="icon icon-times"
            onClick={this.handleDelete}
          ><i className="fa fa-times-circle"></i></span>
        </div>
        <style jsx>{`
            .search {
              width: 100%;
              background-color: #eee;
            }
            .wrapper {
              padding: 10px 0px;
              line-height: 30px;
              overflow: hidden;
            }
            .icon {
              float: left;
              font-size: 20px;
              padding: 0 10px;
              color: #999;
            }
            .icon-times {
              float: right;
              cursor: pointer;
              border-left: 1px solid #999;
            }
            .input {
              float: left;
              width: calc(100% - 92px);
            }
            input {
              display: block;
              background-color:transparent;
              outline: 0;
              border: 0;
              font-size: 20px;
              line-height: 30px;
              width: 100%;
            }
        `}</style>
      </div>
    )
  }
}