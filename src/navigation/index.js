import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Profile from '../screens/dashboard/Profile';
import Orders from '../screens/dashboard/Orders';
import Settings from '../screens/dashboard/Settings';
import MyWallet from '../screens/dashboard/MyWallet';
import TabBarSingleIcon from './TabBarIcons';
import {Colors} from '../theme/Colors';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Orders"
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'rgba(255,255,255,0.7)',
          style: styles.tabBarStyle,
          showLabel: false,
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            return (
              <TabBarSingleIcon route={route} color={color} focused={focused} />
            );
          },
        })}>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="MyWallet" component={MyWallet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = {
  tabBarStyle: {
    overflow: 'hidden',
    height: hp(10),
    borderTopWidth: 0,
    elevation: 0,
    borderTopLeftRadius: wp('8'),
    borderTopRightRadius: wp('8'),
    paddingHorizontal: 10,
    position: 'absolute',
    backgroundColor: Colors.green,
  },
};
