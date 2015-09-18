import React, {Component, PropTypes} from 'react';
import ValidatedComponent from 'utils/validated-component.jsx'

import {Color} from '../styles/vars.js';

const style = {
  color: Color.gray
}

@Radium
export default class LoadingPage extends ValidatedComponent {

  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return <span style={[style]}>Crunching stdout...</span>;
  }

};
