import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom';

// 将节点渲染到body根部使用
class NewPortal extends React.Component {

  state = {
    renderDom: <div>xianzai</div>
  }
  // 组件渲染完成之后进行
  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { children } = this.props;
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
    this.setState({
      renderDom: ReactDOM.createPortal(children, this.node)
    })
    return {
      renderDom: ReactDOM.createPortal(children, this.node)
    }
  }
  render() {
    return this.state.renderDom
  }
}



/**
 *
 *
 * @export component
 * @class
 * @extends {PureComponent}
 * @param onOk
 * @param onCancel
 * @param visible
 */
export default class Modal extends PureComponent {
  state = {
    visible: true,
  }

  componentWillMount () {
    this.setState({visible: this.props.visible})
  }

  handleConfim = () => {
    const { onOK } = this.props;
    onOK && onOK();
    
    this.setState({
      visible: false,
    })
  }

  handleCancle = () => {
    const { onCancel } = this.props;
    onCancel && onCancel();

    this.setState({
      visible: false,
    })
  }

  render() {
    const { title, children } = this.props;
    const { visible = null } = this.state;

    return (visible &&
        <div className="wrapper">
          <div className="modal">
            <div className="modal-title">
              {title}
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-operator"
            >
              <button className="cancel" onClick={this.handleCancle}>取消</button>
              <button className="ok" onClick={this.handleConfim}>确定</button>
            </div>
          </div>
          <div className="mask"></div>
          <style jsx>{`
            .wrapper {
              width: 100%;
              height: 100%;
              position: absolute;
            }
            .mask {
              position: absolute;
              top: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, .8);
              z-index: -1;
            }
            .modal {
              display: inline-block;
              min-width: 900px;
              min-height: 400px;
              background-color: #fff;
              position: relative;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border-radius: 5px;
              padding-bottom: 60px;
            }
            .modal-title {
              width: 100%;
              font-size: 18px;
              line-height: 3;
              text-indent: 10px;
              background-color: rgb(238,238,238);
            }
            .modal-body {
              padding: 10px;
            }
            button {
              display: inline-block;
              line-height: 1.5;
              font-size: 18px;
              padding: 5px 20px;
              background-color: #fff;
              outline: 0;
              border: 1px solid #eee;
              cursor: pointer;
              border-radius: 6px;
              transition: .3s all ease;
              color: rgb(165, 165, 165);
            }
            button.ok {
              color: #fff;
              background-color: #40a9ff;
            }
            button.ok:hover {
              background-color: #2d9efa;
            }
            button.cancel:hover {
              border-color: #40a9ff;
              color: #40a9ff;
            }
            button + button {
              margin-left: 15px;
            }
            .modal-operator {
              position: absolute;
              bottom: 0;
              width: 200px;
              margin-top: 30px;
              padding: 10px 15px;
              right: 0;
            }
          `}</style>
        </div>
    )
  }
}
