import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import TravelListRow from './TravelListRow';

export default class TravelList extends Component {
  static propTypes = {
    travelTimeTable: PropTypes.arrayOf(
        PropTypes.shape({
          companyName: PropTypes.string, // 'Emirates'
          companyLogoUri: PropTypes.string,
          price: PropTypes.number, // 120
          moneySymbol: PropTypes.string, // '$'
          departureDate: PropTypes.string, // '25 Oct, Fri', to be generated with moment
          departureTimeArr: PropTypes.arrayOf(PropTypes.string), // ['12:50', '12:50'], pretty easy to handle
          arrivalDate: PropTypes.string, // '9 Nov, Fri', to be generated with moment
          arrivalTimeArr: PropTypes.arrayOf(PropTypes.string), // ['17:50', '21:20'], pretty easy to handle
        }),
      ),
  };

  handleOnPress = () => {

  }

  render() {
    const {
        travelTimeTable,
      } = this.props;

    return (
      <FlatList
        data={travelTimeTable}
        keyExtractor={(_, i) => i}
        renderItem={({ item }) =>
            (<TravelListRow
              onPress={this.handleOnPress}
              {...item}
            />)
          }
      />
    );
  }
}
