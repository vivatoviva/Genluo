import React from 'react';



export default (Item) =>
  class extends React.Component {

    render() {
      return (
        <div className='wraper'>
          <Item {...this.props} />
          <style jsx>{`
            @media screen and (max-width: 1340px) {
              .wraper {
                width: 100%!important;
              }
            }
            .wraper {
              width: 230px;
            }
          `}</style>
        </div>
      )
    }
  }
