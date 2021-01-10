import React from 'react';
import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import ResponsiveText from './ResponsiveText';
import {Fonts} from '../theme/Fonts';
import {Colors} from '../theme/Colors';

const Button = (props) => {
  const {
    loading,
    disabled,
    onPress,
    containerStyle,
    leftIcon,
    leftIconStyle,
    text,
    textStyle,
    rightIcon,
    rightIconStyle,
  } = props;
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      onPress={onPress}
      style={[styles.ButtonStyle, containerStyle]}>
      {leftIcon && (
        <View style={[styles.leftStyle, leftIconStyle]}>{leftIcon}</View>
      )}
      {(loading && <ActivityIndicator size={'small'} color={'#fff'} />) ||
        (text && (
          <ResponsiveText style={{...styles.textStyle, ...textStyle}}>
            {text}
          </ResponsiveText>
        ))}
      {rightIcon && (
        <View style={[styles.leftStyle, rightIconStyle]}>{rightIcon}</View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  ButtonStyle: {
    height: wp('13%'),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textStyle: {
    color: Colors.buttonText,
    fontFamily: Fonts.WorkSans.Bold,
    fontSize: 5.5,
  },
  leftStyle: {},
};
