import React, { PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Scaling from 'skydreamer/utils/scaling';

const styles = Scaling.newStylesheet({
  flexRowCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#999',
    fontSize: 14,
  },
  dateTimeSection: {
    flex: 4,
  },
  dateLabel: {
    color: '#222',
    fontSize: 14,
    fontWeight: 'bold',
  },
  arrowIconWrapper: {
    paddingHorizontal: 5,
  },
  iconSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7.5,
  },
});

const TravelListRowSubHeader = ({ date, label, timeArr, type }) => (
  <View style={styles.flexRow}>
    <View style={{ flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
    </View>

    <View style={styles.flexRowCenter}>

      <View style={styles.dateTimeSection}>
        <Text style={styles.dateLabel}>{date}</Text>
        <View style={styles.flexRowCenter}>
          <Text>{timeArr[0]}</Text>
          <View style={styles.arrowIconWrapper}>
            <Icon
              name={type === 'departure' ? 'long-arrow-right' : 'long-arrow-left'}
              color="#a49dbc"
            />
          </View>
          <Text>{timeArr[1]}</Text>
        </View>
      </View>

      <View style={styles.iconSection}>
        <Icon
          name="plane"
          color="#a49dbc"
          size={15}
        />
      </View>

    </View>
  </View>
);

TravelListRowSubHeader.propTypes = {
  date: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  timeArr: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf(['departure', 'return']).isRequired,
};

export default TravelListRowSubHeader;
