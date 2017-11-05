import React, { Component } from 'react';
import { View, Image } from 'react-native';
import ScaleSheet from 'react-native-scalesheet';

const styles = ScaleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default class InternalCardTabIcon extends Component {
  render() {
    const { selected, iconOn, iconOff } = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={selected ? iconOn : iconOff} resizeMode="contain" />
      </View>
    );
  }
}
