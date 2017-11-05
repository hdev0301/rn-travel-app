import React from 'react';
import { View, Text } from 'react-native';
import Scaling from 'skydreamer/utils/scaling';

export default class Timstamp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timestamp}>July 26, 2015</Text>
      </View>
    );
  }
}

const styles = Scaling.newStylesheet({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timestamp: {
    fontSize: 13,
  },
});
