import React from 'react';
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { sessionActions } from 'skydreamer/redux/actions';
import deepEqual from 'deep-equal';
import Scaling from 'skydreamer/utils/scaling';
import TextMessage from './TextMessage';
import Timestamp from './Timestamp';
import colors from 'skydreamer/config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

class ChatListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: props.messages,
      textInput: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!deepEqual(nextProps.messages, this.state.collection)) {
      this.setState({ collection: nextProps.messages });
    }
  }

  componentDidMount() {
    const { session } = this.props;
    const { lastFetchCount } = session;
    if (!lastFetchCount) {
      this.props.fetchMessages(session);
    }
  }

  sendMessage = () => {
    const { session } = this.props;
    const { textInput } = this.state;
    if (!textInput || textInput.trim().length < 1) return;
    this.setState({ textInput: '' });
    this.props.sendMessage(session.key, textInput, 'text');
  }

  render() {
    const { collection } = this.state;
    const { session } = this.props;
    const lastMessage = this.state.collection ? this.state.collection[0] : null;

        // this.props.fetchMessages(session, lastMessage)
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={collection}
          renderItem={({ item, index }) => {
            let prependedComponent = null;
            if (index % 20 === 0) {
              prependedComponent = <Timestamp message={item} />;
            }
            return (
              <TextMessage
                last={index > 0 ? collection[index - 1] : null}
                current={item}
                next={(index > collection.length - 1) ? null : collection[index + 1]}
                prependedComponent={prependedComponent}
              />
            );
          }}
        />

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Hello, I am a placeholder"
              placeholderTextColor="#AFA3C6"
              value={this.state.textInput}
              onChangeText={value => this.setState({ textInput: value })}
              underlineColorAndroid="white"
              multiline
            />
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <MaterialIcon name="emoticon-happy" size={Scaling.vertical(25)} style={styles.sendBtn} color={'#AFA3C6'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={this.sendMessage}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <FontAwesome name="send-o" size={Scaling.vertical(25)} style={styles.sendBtn} color={'#AFA3C6'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = Scaling.newStylesheet({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
    marginTop: 50,
  },
  list: {
    flex: 1,
    paddingTop: 10,
    marginHorizontal: 20,
  },
  footer: {
    height: 60,
    marginBottom: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 6,
    height: 60,
  },
  input: {
    height: 60,
    fontSize: 15,
    paddingLeft: 10,
  },
});

const mapStateToProps = ({ sessions }) => ({
  messages: sessions.messages[sessions.selected],
  session: sessions.collection[sessions.selected],
});

const mapDispatch = {
  fetchMessages: sessionActions.fetchMessages,
  sendMessage: sessionActions.sendMessage,
};

export default connect(mapStateToProps, mapDispatch)(ChatListScreen);
