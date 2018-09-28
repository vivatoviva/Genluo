import React from 'react'

class List extends React.PureComponent {
  render() {
    const { dataSource, renderItem  } = this.props;
    console.log(dataSource)
    return (
      <div>
        {
          dataSource.map(renderItem)
        }
        <style jsx>{`
          div {
            padding: 10px;
          }
        `}</style>
      </div> 
    )    
  }
}

export default List;
