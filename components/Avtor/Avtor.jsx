import PropTypes from 'prop-types';
import React from 'react';

const Avtor = ({ imgUrl, shape, alt }) => (
  <div className="wrapper">
    <div className={`avtor ${shape}`}>
      <img src={imgUrl} alt={alt} />
    </div>
    <style jsx>
      {`
        .wraaper {
          height: 100%;
          width: 100%;

        }
        .circle {
          border-radius: 50%;
        }
        .square {
          border-radius: 4px;
        }
        .avtor {
          overflow: hidden;
          box-sizing: border-box;
          padding: 2px;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: inherited;
        }
      `}
    </style>
  </div>
);

Avtor.propTypes = {
  alt: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['circle', 'square']),
};

Avtor.defaultProps = {
  shape: 'square',
  alt: '图片缺失',
};

export default Avtor;
