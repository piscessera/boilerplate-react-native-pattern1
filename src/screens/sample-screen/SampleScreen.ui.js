import React from 'react';
import { View, Image } from 'react-native';

import styles from './SampleScreen.styles';

import R from 'res/R';

const UI = ({image}) =>

<View style={styles.screenContainer}>
  <Image
    style={styles.logo}
    source={image}
  />
</View>

;

export { UI }