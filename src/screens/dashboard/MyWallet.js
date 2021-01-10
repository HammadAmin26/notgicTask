import React from 'react';
import {View} from 'react-native';
import ResponsiveText from '../../components/ResponsiveText';

const MyWallet = () => {
  return (
    <View style={styles.container}>
      <ResponsiveText>My Wallet Screen</ResponsiveText>
    </View>
  );
};

export default MyWallet;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

};
