import Layout from '../../../layout/BlogLayout';
import TimeLine from '../../../components/TimeLine';
import React, { Component } from 'react';

export default class DetailPage extends Component {

  render() {
    return (
      <Layout navIndex={1}>
        <TimeLine></TimeLine>
      </Layout>
    )
  }
}