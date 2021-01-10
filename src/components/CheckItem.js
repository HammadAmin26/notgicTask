import React from 'react';
import {View, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ResponsiveText from './ResponsiveText';
import {Fonts} from '../theme/Fonts';
import {Colors} from '../theme/Colors';

const CheckItem = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Image
          source={require('../assets/icons/tick.png')}
          style={styles.tickIcon}
        />
      </View>
      <ResponsiveText style={styles.text}>{title}</ResponsiveText>
    </View>
  );
};

export default CheckItem;

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp('4'),
    paddingHorizontal: wp('4'),
  },
  checkboxContainer: {
    height: wp('7'),
    width: wp('7'),
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('10'),
  },
  tickIcon: {
    height: '90%',
    width: '90%',
    resizeMode: 'contain',
    tintColor: Colors.gold,
  },
  text: {
    fontFamily: Fonts.WorkSans.Bold,
  },
};
