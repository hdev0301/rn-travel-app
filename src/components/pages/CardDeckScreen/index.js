import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import ScaleSheet from 'react-native-scalesheet';
import Card from './Card';

const styles = ScaleSheet.create({
  list: {
    flex: 1,
    paddingTop: 8,
  },
  container: {
    flex: 1,
    marginTop: 68,
    marginBottom: 60,
  },
});

// TODO: Convert <ScrollView> to <FlatList> implementation

class CardDeckScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          <Card status="none" />
          <Card status="Liked" />
          <Card status="Booked" />
          <Card status="Liked" />
        </ScrollView>
      </View>
    );
  }
}


const mapStateToProps = state => ({

});

const mapDispatch = {

};

export default connect(
    mapStateToProps,
    mapDispatch,
)(CardDeckScreen);
