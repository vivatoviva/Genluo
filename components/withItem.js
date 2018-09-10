import React from 'react';

export default (Item) =>
  class extends React.Component {

    render() {
      return (
        <div className='wraper'>
          <Item {...this.props} />
          <style jsx>{`
            .wraper {
              width: 230px;
            }
          `}</style>
        </div>
      )
    }
  }
