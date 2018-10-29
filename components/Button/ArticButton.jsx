import React from 'react';
import PropsTypes from 'prop-types';
import WithLink from '../WithLink';

const ArticButton = ({
  href,
  as,
  paramsData,
  children,
}) => (
  <button type="button">
    <WithLink
      href={href}
      as={as}
      paramsData={paramsData}
    >
      <a href={false}>{children}</a>
    </WithLink>

    <style jsx>
      {`
        button {
          background-color: #fff;
          outline: 0;
          border: 0;
          cursor: pointer;
          width: 120px;
          height: 36px;
          font-size: 17px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 50px;
          padding: 0;
        }
        a {
          border: 3px solid rgb(85, 85, 85);
          display: block;
          width: 100%;
          height: 100%;
          line-height: 36px;
          color: #000;
          transition: 300ms all ease;
        }
        a:hover {
          background-color: rgb(85, 85, 85);
          color: #fff;
          text-decoration: none;
        }
      `}
    </style>
  </button>
);

ArticButton.propTypes = {
  href: PropsTypes.string.isRequired,
  as: PropsTypes.string.isRequired,
  paramsData: PropsTypes.shape({}).isRequired,
  children: PropsTypes.string,
};

ArticButton.defaultProps = {
  children: '阅读全文',
};

export default ArticButton;
