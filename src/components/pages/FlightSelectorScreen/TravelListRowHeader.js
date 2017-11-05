import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
} from 'react-native';
import Scaling from 'skydreamer/utils/scaling';

const styles = Scaling.newStylesheet({
  price: {
    fontSize: 32,
    color: '#222',
  },
  symbol: {
    marginTop: 5,
    fontSize: 16,
    color: '#222',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const TravelListRowHeader = ({ price, moneySymbol, companyLogoUri }) => (
  <View style={styles.flexRow}>
    <View style={styles.flexRow}>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.symbol}>{moneySymbol}</Text>
    </View>
    <View style={styles.imageContainer}>
      <Image
        resizeMode="contain"
        // @TODO: change the style
        source={{
          uri: companyLogoUri,
          width: 100,
          height: 30,
        }}
      />
    </View>
  </View>
);

TravelListRowHeader.propTypes = {
  price: PropTypes.number.isRequired,
  moneySymbol: PropTypes.string.isRequired,
  companyLogoUri: PropTypes.string.isRequired,
};

export default TravelListRowHeader;
