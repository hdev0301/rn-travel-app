import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator, Image, View, Text, TouchableOpacity } from 'react-native';
import { sessionActions } from 'skydreamer/redux/actions';
import { Actions } from 'react-native-router-flux';
import firebase from 'skydreamer/utils/firebase';
import deepEqual from 'deep-equal';
import ScaleSheet from 'react-native-scalesheet';
import colors from 'skydreamer/config/colors';

const styles = ScaleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: 350,
    height: 500,
    elevation: 3,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    marginBottom: 50,
  },
  rowContainer: {
    marginTop: 15,
    height: 64,
    flexDirection: 'row',
  },
  avatarContainer: {
    marginLeft: 10,
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
  nameLabel: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  infoContainer: {
    flex: 1,
    height: 64,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  previewLabel: {
    paddingRight: 20,
  },
  timeLabel: {
    position: 'absolute',
    right: 25,
    bottom: 0,
    fontSize: 10,
  },
});

class ChatListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { collection: this.generateCollection(props.sessions) };
    this.collection = null;
  }

  componentWillReceiveProps(nextProps) {
    if (!deepEqual(nextProps.sessions, this.collection)) {
      this.collection = nextProps.sessions;
      this.setState({ collection: this.generateCollection(nextProps.sessions) });
    }
  }

  generateCollection = (sessions) => {
    const arr = [];
    for (const key in sessions) {
      const session = sessions[key];
      session.key = key;
      session._key = key;
      arr.push(session);
    }

    return arr.sort((a, b) => a.created_at - b.created_at);
  }

  render() {
    const { collection } = this.state;
    console.warn(collection.length);
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            style={styles.list} data={this.state.collection} renderItem={({ item }) => (<ItemRow onPress={this.props.openChat} {...item} />)}
          />
        </View>
      </View>
    );
  }
}

const ItemRow = ({ _key, id, onPress, group_name, image }) => (
  <TouchableOpacity onPress={() => onPress(_key)} style={styles.rowContainer}>
    <View style={styles.avatarContainer}>
      <Image source={{ uri: image }} style={styles.avatar} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.nameLabel}>{group_name}</Text>
      <Text style={styles.previewLabel} numberOfLines={1}>Great! I think we should go together! Monday?</Text>
      <Text style={styles.timeLabel}>10:15 PM</Text>
    </View>
  </TouchableOpacity>
);


const mapStateToProps = ({ sessions }) => ({
  sessions: sessions.collection,
});

const mapDispatch = {
  openChat: sessionActions.openChat,
};

export default connect(mapStateToProps, mapDispatch)(ChatListScreen);
