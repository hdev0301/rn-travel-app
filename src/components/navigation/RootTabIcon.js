import React, { Component } from 'react';
import { View, Image } from 'react-native';
import ScaleSheet from 'react-native-scalesheet';

const styles = ScaleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
  },
  indicator: {
    position: 'absolute',
    height: 4,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default class RootTabIcon extends Component {
  render() {
    const { selected, iconOn, iconOff, indicatorColor } = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={selected ? iconOn : iconOff} resizeMode="contain" />
        { selected && <View style={[styles.indicator, { backgroundColor: indicatorColor }]} /> }
      </View>
    );
  }
}
