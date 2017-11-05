import React, { PropTypes } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import ScaleSheet from 'react-native-scalesheet';

const styles = ScaleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'large',
};

export default Spinner;
