import React from 'react';
import { PixelRatio, Animated, View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import colors from 'skydreamer/config/colors';
import { swipeCardActions } from 'skydreamer/redux/actions';
import SwipeDeck from 'react-native-swipe-cards';
import Card from './Card';
import CachedImage from 'react-native-cached-image';
import Scaling from 'skydreamer/utils/scaling';
import Ionicon from 'react-native-vector-icons/Ionicons';
const ImageCacheProvider = CachedImage.ImageCacheProvider;
const { height } = Dimensions.get('window');

const modalHeightVal = (height * PixelRatio.get()) > 1000 ? -200 : -158;

class SwipeCardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cards: props.cards, modalHeight: new Animated.Value(modalHeightVal), modalOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    if (this.props.fetchRequired && !this.props.fetching) {
      this.props.fetchCards(this.props.fetchPageIndex);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetchRequired && !nextProps.fetching && !nextProps.empty) {
      this.props.fetchCards(nextProps.fetchPageIndex);
    }
    this.setState(() => ({ cards: nextProps.cards }));
    const images = [];
    nextProps.cards.forEach((card) => {
      card.groupUsers = nextProps.groupUsers;
      images.push(card.image);
    });

    ImageCacheProvider.cacheMultipleImages(images);
  }

  toggleModal() {
    Animated.timing(this.state.modalHeight, {
      toValue: this.state.modalOpen ? modalHeightVal : ((height / 2) - (330 / 2) + 50),
      duration: 300,
    }).start();

    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    const { groupUsers } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.lightPink }}>
        <SwipeDeck
          cards={this.state.cards}
          renderCard={data => <Card {...data} />}
          renderNoMoreCards={() => <View />}
          handleYup={this.props.onOfferApproved}
          handleNope={this.props.onOfferDeclined}
          onClickHandler={() => {}}
          hasMaybeAction={false}
        />

        <Animated.View style={[styles.modal, { bottom: this.state.modalHeight }]}>
          <View style={styles.modalContainer}>
            <View style={styles.modalSpacer} />
            <Text style={styles.modalTitle}>Ibiza 2017</Text>
            <View style={styles.modalSeperator} />
            <ScrollView style={styles.modalScrollview}>
              <RowItem name="Ibiza 2017" groupUsers={groupUsers} />
              <RowItem name="EDEN Concert" groupUsers={groupUsers} />
              <RowItem name="Summer Vacation" groupUsers={groupUsers} />
              <RowItem name="Graduation Party" groupUsers={groupUsers} />
              <RowItem name="Michelle" groupUsers={groupUsers} />
              <View style={styles.modalSpacer} />
            </ScrollView>
            <TouchableOpacity style={styles.modalIcon} onPress={this.toggleModal}>
              <Ionicon name={`${this.state.modalOpen ? 'ios-arrow-down' : 'ios-arrow-up'}`} size={Scaling.vertical(38)} style={{ padding: 10 }} color="rgb(236, 77, 72)" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalMainAvatarContainer}>
            <CachedImage style={styles.modalMainAvatar} source={{ uri: groupUsers[0] }} />
            <CachedImage style={styles.modalMainAvatar} source={{ uri: groupUsers[1] }} />
            <CachedImage style={styles.modalMainAvatar} source={{ uri: groupUsers[2] }} />
          </View>
        </Animated.View>
      </View>
    );
  }
}

const RowItem = ({ name, groupUsers }) => (
  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: Scaling.vertical(20), marginTop: Scaling.vertical(15) }}>
    <Text style={{ flex: 6, fontSize: Scaling.vertical(18), color: 'rgb(236, 77, 72)' }}>{name}</Text>
    <View style={{ flexDirection: 'row', flex: 4, justifyContent: 'center', alignItems: 'center' }}>
      <CachedImage style={styles.modalSmallAvatar} source={{ uri: groupUsers[0] }} />
      <CachedImage style={styles.modalSmallAvatar} source={{ uri: groupUsers[1] }} />
      <CachedImage style={styles.modalSmallAvatar} source={{ uri: groupUsers[2] }} />
    </View>
  </View>
);

const styles = Scaling.newStylesheet({
  modal: {
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
    height: 330,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 30,
    height: 300,
    width: 375,
    elevation: 1,
  },
  modalMainAvatarContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
    top: 18,
    elevation: 2,
  },
  modalMainAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  modalSmallAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginHorizontal: 2,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  modalIcon: {
    position: 'absolute',
    right: 10,
    top: -5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(236, 77, 72)',
    textAlign: 'center',
  },
  modalSpacer: {
    marginTop: 35,
  },
  modalSeperator: {
    width: 340,
    marginLeft: 20,
    marginTop: 5,
    height: 2,
    backgroundColor: 'rgb(236, 77, 72)',
  },
  modalScrollview: {
    marginTop: 20,
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

const mapStateToProps = ({ swipeCards }) => ({
  cards: swipeCards.collection,
  fetchRequired: swipeCards.fetchRequired,
  fetching: swipeCards.fetching,
  fetchPageIndex: swipeCards.fetchPageIndex,
  groupUsers: swipeCards.groupUsers,
  empty: swipeCards.empty,
});

const mapDispatch = {
  fetchCards: swipeCardActions.fetchCards,
  onOfferApproved: swipeCardActions.onOfferApproved,
  onOfferDeclined: swipeCardActions.onOfferDeclined,
};

export default connect(
    mapStateToProps,
    mapDispatch,
)(SwipeCardScreen);
