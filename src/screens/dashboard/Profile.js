import React from 'react';
import {View} from 'react-native';
import ResponsiveText from '../../components/ResponsiveText';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ResponsiveText>Profile Screen</ResponsiveText>
    </View>
  );
};

export default Profile;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
};
