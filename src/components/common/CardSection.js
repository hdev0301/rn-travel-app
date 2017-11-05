import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import ScaleSheet from 'react-native-scalesheet';

const styles = ScaleSheet.create({
  containerStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'relative',
  },
});

const CardSection = ({ children, style }) => (
  <View style={[styles.containerStyle, style]}>
    {children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardSection;
