import React from 'react';
import {Image} from 'react-native';
import ResponsiveText from '../components/ResponsiveText';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Fonts} from '../theme/Fonts';

const TabBarSingleIcon = (props) => {
  const {route, color} = props;
  if (route.name === 'Profile') {
    return (
      <>
        <Image
          source={require('../assets/icons/profile.png')}
          style={[styles.tabBarIcon, {tintColor: color}]}
        />
        <ResponsiveText
          style={{
            color: color,
            ...styles.title,
          }}>
          Profile
        </ResponsiveText>
      </>
    );
  } else if (route.name === 'Orders') {
    return (
      <>
        <Image
          source={require('../assets/icons/cart.png')}
          style={[styles.tabBarIcon, {tintColor: color}]}
        />
        <ResponsiveText
          style={{
            color: color,
            ...styles.title,
          }}>
          Orders
        </ResponsiveText>
      </>
    );
  } else if (route.name === 'Settings') {
    return (
      <>
        <Image
          source={require('../assets/icons/settings.png')}
          style={[styles.tabBarIcon, {tintColor: color}]}
        />
        <ResponsiveText
          style={{
            color: color,
            ...styles.title,
          }}>
          Settings
        </ResponsiveText>
      </>
    );
  } else if (route.name === 'MyWallet') {
    return (
      <>
        <Image
          source={require('../assets/icons/dollor-outline.png')}
          style={[styles.tabBarIcon, {tintColor: color}]}
        />
        <ResponsiveText
          style={{
            color: color,
            ...styles.title,
          }}>
          MyWallet
        </ResponsiveText>
      </>
    );
  }
  return null;
};

export default TabBarSingleIcon;

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  tabBarIcon: {
    height: wp(6.5),
    width: wp(6.5),
    resizeMode: 'contain',
    marginBottom: 2,
  },
  title: {
    fontSize: 4,
    fontFamily: Fonts.WorkSans.Bold,
  },
};
