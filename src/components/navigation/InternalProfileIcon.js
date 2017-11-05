import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScaleSheet from 'react-native-scalesheet';

const styles = ScaleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  selectedTextStyle: {
    fontWeight: 'bold',
    color: 'black',
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#AFA3C6',
  },
  indicator: {
    position: 'absolute',
    height: 4,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default class InternalProfileIcon extends Component {
  render() {
    const { title, selected, indicatorColor } = this.props;
    const style = selected ? styles.selectedTextStyle : styles.textStyle;
    return (
      <View style={styles.container}>
        <Text style={style}>{title}</Text>
        { selected && <View style={[styles.indicator, { backgroundColor: indicatorColor }]} /> }
      </View>
    );
  }
}
