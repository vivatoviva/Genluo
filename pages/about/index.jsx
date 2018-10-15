import React, { Component } from 'react';
import Content from '../../components/Content';
import Head from '../../components/Head';


export default class extends Component {
  handleClick = () => {
    console.log('xianzia');
  }

  render() {
    return (
      <div className="wraper">
        <Head title="关于" />
        <div className="content">
          <Content
            content="# 占位"
          />
        </div>
        <style jsx>
          {`
          .content {
            padding: 20px;
            max-width: 1024px;
            margin: 0 auto;
          }
          `}
        </style>
      </div>
    );
  }
}
