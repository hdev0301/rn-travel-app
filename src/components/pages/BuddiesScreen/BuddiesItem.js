import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import CachedImage from 'react-native-cached-image';
import LinearGradient from 'react-native-linear-gradient';
import ScaleSheet from 'react-native-scalesheet';

const window = Dimensions.get('window');

const styles = ScaleSheet.create({
  outerContainer: {
    width: window.width / 2,
    height: (window.height - 150) / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default class BuddiesItem extends Component {

  static propTypes = {
    item: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      photo: PropTypes.string,
      profile_text: PropTypes.string,
    }),
    group_id: PropTypes.number,
  };

  animValue = new Animated.Value(0);

  componentDidMount() {
    this.animate(1);
  }

  animate = (toValue) => {
    this.animateY(toValue).start(() => {
      this.animate(toValue === 1 ? 0 : 1);
    });
  }

  animateY = toValue => Animated.timing(
          this.animValue, {
            toValue: toValue || 1,
            duration: 25000,
          },
      )

  randomSign = () => Math.round(Math.random()) * 2 - 1

  getGradientColor = group_id => ['#4c669f', '#f4f6f6']

  render() {
    const { item, group_id } = this.props;
    const { photo } = item;
    const translateY = this.animValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, this.randomSign() * 30 * 5 * Math.random() * Math.random(), this.randomSign() * 5 * Math.random(), this.randomSign() * 30 * 5 * Math.random() * Math.random(), 0],
    });
    return (
      <Animated.View style={[styles.outerContainer, { transform: [{ translateY }] }]}>
        <LinearGradient colors={this.getGradientColor(group_id)} style={styles.container}>
          <CachedImage style={styles.itemImage} source={{ uri: photo }} />
        </LinearGradient>
      </Animated.View>
    );
  }
}
