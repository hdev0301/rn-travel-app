import React, { PropTypes } from 'react';
import { View } from 'react-native';
import ScaleSheet from 'react-native-scalesheet';

const styles = ScaleSheet.create({
  dividerHorizontal: {
    height: 2,
    width: '100%',
    backgroundColor: '#f4f7fe',
  },
  dividerVertical: {
    height: 100,
    width: 1,
    backgroundColor: '#f4f7fe',
  },
});

const getDefaultStyles = (props) => {
  const defaultStyles = [];
  if (props.horizontal) {
    defaultStyles.push(styles.dividerHorizontal);
  } else {
    defaultStyles.push(styles.dividerVertical);
  }
  defaultStyles.push(props.style);
  return defaultStyles;
};

const Divider = (props) => {
  const defaultStyles = getDefaultStyles(props);

  return (
    <View
      style={defaultStyles}
    />
  );
};

Divider.propTypes = {
  style: PropTypes.any,
  horizontal: PropTypes.bool,
};

Divider.defaultProps = {
  style: {},
};

export default Divider;
