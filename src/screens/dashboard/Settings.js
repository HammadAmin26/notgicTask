import React from 'react';
import {View} from 'react-native';
import ResponsiveText from '../../components/ResponsiveText';

const Settings = () => {
  return (
    <View style={styles.container}>
      <ResponsiveText>Settings Screen</ResponsiveText>
    </View>
  );
};

export default Settings;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

};

