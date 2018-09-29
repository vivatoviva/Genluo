import React from 'react'
import mdUtils  from '../../utils/markdownToHtml'

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.converter = new mdUtils.Converter(props.content)
  }
  render() {
    const { content } = this.props;
    return (
      <div>
        <div
        style={{}}
          dangerouslySetInnerHTML={{
            __html: this.converter.toHtml()
          }}></div>
      </div>
    )
  }
}