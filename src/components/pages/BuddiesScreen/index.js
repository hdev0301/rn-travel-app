import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Dimensions, Animated, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import BuddiesItem from './BuddiesItem';
import { map as _map, forEach as _forEach } from 'lodash';
import ScaleSheet from 'react-native-scalesheet';
import buddiesDummyItems from '../../fixtures/buddies';

const window = Dimensions.get('window');

const styles = ScaleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    position: 'absolute',
    backgroundColor: 'rgb(229,245,223)',
    width: 3 * window.width,
    height: window.height,
  },
  animatedViewContainer: {
    height: window.height,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

class BuddiesScreen extends Component {

  static propTypes = {
    groupItems: PropTypes.object,
  }

  static displayName = 'Buddies Screen';

  animValue = new Animated.Value(0);

  componentDidMount() {
    const { groupItems } = this.props;
    const animationDuration = this.calculateAnimationDuration(groupItems);
    this.animateFromLeftToRight(animationDuration);
  }

  calculateAnimationDuration = (groupItems) => {
    let length = 0;
    _forEach(groupItems, (group) => {
      length += group.users.length;
    });
    return (length * 20000) / 6; // lets assume at a time we show 6 items and it takes 5 second to go from end to end.
  }

  animateFromLeftToRight = (animationDuration) => {
    Animated.timing(
      this.animValue,
      {
        toValue: 1,
        duration: animationDuration || 10000,
      },
    ).start();
  }

  render() {
    const { groupItems } = this.props;
    const items = _map(groupItems, group => _map(group.users, (item) => {
      const { group_id } = group;
      return this.renderItem(item, group_id);
    }));
    const deviceWidth = window.width;
    const translateX = this.animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-deviceWidth * 2, 0],
    });
    return (
      <ScrollView style={styles.container}>
        <Animated.View style={[{ transform: [{ translateX }] }, styles.animatedViewContainer]}>
          {items}
        </Animated.View>
      </ScrollView>
    );
  }

  renderItem = (item, group_id) => <BuddiesItem item={item} group_id={group_id} />
}

const mapStateToProps = () => ({
  groupItems: buddiesDummyItems,
});

export default connect(mapStateToProps)(BuddiesScreen);
