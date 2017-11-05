import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import Scaling from 'skydreamer/utils/scaling';

import { TravelListHeader } from 'skydreamer/components/common';
import TravelList from './TravelList';
import Button from './Button';

export default class FlightSelectorScreen extends PureComponent {

  state = {
    travelTimeTable: [
      {
        companyName: 'Emirates',
        companyLogoUri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBLo5Axhi1kEwuwPrWNiE6cWsF7YJj8eKtZPHtRSrTI9cbWc7r',
        price: 120,
        moneySymbol: '$',
        departureDate: '25 Oct, Fri',
        departureTimeArr: ['12:50', '12.50'],
        arrivalDate: '9 Nov, Fri',
        arrivalTimeArr: ['17:50', '21:20'],
      },
      {
        companyName: 'Wizz',
        companyLogoUri: 'http://aviadoresanonimos.weebly.com/uploads/2/8/6/5/28652649/9934795_orig.jpg',
        price: 129,
        moneySymbol: '$',
        departureDate: '25 Oct, Fri',
        departureTimeArr: ['12:50', '12.50'],
        arrivalDate: '9 Nov, Fri',
        arrivalTimeArr: ['17:50', '21:20'],
      },
    ],
  };

  handleAdjustDate = () => {
      // console.log(`handlehandleAdjustDate@FlightSelectorLayout`);
      // Actions.adjustDate();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <View style={styles.content}>
            <TravelListHeader
              departureAcronym="VIE"
              arrivalAcronym="BAR"
              departureCity="Vienna"
              arrivalCity="Barcelona"
            />
            <Button
              title="Adjust date"
              onPress={this.handleAdjustDate}
            />
            <TravelList travelTimeTable={this.state.travelTimeTable} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = Scaling.newStylesheet({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: '#fff',
  },
  content: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
