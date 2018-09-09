import React from 'react';

export default (Item) =>
  class extends React.Component { 
    render() {
      return (
        <div className='wraper'>
          <Item />
          <style jsx>{`
            .wraper {
              width: 300px;
            }
          `}</style>
        </div>
      )
    }
  }
