import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { UI } from './SampleScreen.ui';

import R from 'res/R';

export default class SampleScreen extends Component {

  render() {
    return (
      <UI
        image={R.images.logo}
      />
    );
  }

}