import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from 'skydreamer/config/colors';
import gradient from 'skydreamer/config/gradient';
import Scaling from 'skydreamer/utils/scaling';

const { start, end } = gradient.buttonWarm;
const { width } = Dimensions.get('screen');

const styles = Scaling.newStylesheet({
  buttonContainer: {
    alignItems: 'center',
  },
  gradient: {
    width: width * 0.7,
    borderRadius: 1000,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

const Button = ({ title, onPress, colors }) => (
  <TouchableOpacity
    style={styles.buttonContainer}
    onPress={onPress}
  >
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={styles.gradient}
    >
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
Button.defaultProps = {
  colors: colors.gradients.buttonWarm,
  withBorder: false,
};

export default Button;
