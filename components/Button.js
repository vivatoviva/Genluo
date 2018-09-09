import React from 'react'

export default class Button extends React.Component {
  render() {
    const { buttonTitle, buttonStyle } = this.props;
    return (
      <div>
        <div className="button">
          {buttonTitle}
        </div>
        <style jsx>{`
          .button{
            width: 80px;
            border: 2px solid #999;
            border-radius: 30px;
            text-align: center;
            color: #999;
            font-weight: 500;
            padding: 10px;
            font-size: 20px;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}