import React from 'react';
import {SafeAreaView, Image, Dimensions, StatusBar, View} from 'react-native';
import {Colors} from '../theme/Colors';

const Container = (props) => {
  const {
    statusBarColor,
    backgroundImageStyle,
    barStyle,
    backgroundImage,
    overlay,
    overlayColor,
    style,
  } = props;

  let statusBarStyle = barStyle ? barStyle : 'dark-content';

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar
        backgroundColor={statusBarColor || Colors.gold}
        barStyle={statusBarStyle}
        translucent={false}
      />
      {backgroundImage && (
        <Image
          source={backgroundImage}
          style={[styles.backgroundImage, backgroundImageStyle]}
        />
      )}
      {overlay && (
        <View
          style={[
            styles.overlayStyle,
            {backgroundColor: overlayColor || 'black'},
          ]}
        />
      )}
      {props.children}
    </SafeAreaView>
  );
};

export default Container;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
};
