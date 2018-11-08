import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type }) => (
  <span>
    <i className={`fas fa-${type}`} />
  </span>
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
