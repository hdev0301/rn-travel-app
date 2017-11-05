import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Divider } from 'skydreamer/components/common';
import Scaling from 'skydreamer/utils/scaling';

import TravelListRowHeader from './TravelListRowHeader';
import TravelListRowSubHeader from './TravelListRowSubHeader';

const styles = Scaling.newStylesheet({
  touchableContainer: {
    flex: 1,
    paddingTop: 35,
  },
});

const TravelListRow = ({
  companyName, // eslint-disable-line no-unused-vars
  companyLogoUri,
  price,
  moneySymbol,
  departureDate,
  departureTimeArr,
  arrivalDate,
  arrivalTimeArr,
  onPress,
}) => (
  <View
    style={styles.touchableContainer}
    onPress={onPress}
  >
    <TravelListRowHeader
      price={price}
      moneySymbol={moneySymbol}
      companyLogoUri={companyLogoUri}
    />
    <TravelListRowSubHeader
      date={departureDate}
      label="Departure"
      timeArr={departureTimeArr}
      type="departure"
    />
    <Divider horizontal />
    <TravelListRowSubHeader
      date={arrivalDate}
      label="Return"
      timeArr={arrivalTimeArr}
      type="return"
    />
  </View>
);

TravelListRow.propTypes = {
  companyName: PropTypes.string,
  companyLogoUri: PropTypes.string,
  price: PropTypes.number,
  moneySymbol: PropTypes.string,
  departureDate: PropTypes.string,
  departureTimeArr: PropTypes.arrayOf(PropTypes.string),
  arrivalDate: PropTypes.string,
  arrivalTimeArr: PropTypes.arrayOf(PropTypes.string),
  onPress: PropTypes.func.isRequired,
};

export default TravelListRow;
