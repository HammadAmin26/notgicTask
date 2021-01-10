import React from 'react';
import {Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Fonts} from '../theme/Fonts';
import {Colors} from '../theme/Colors';

const ResponsiveText = (props) => {
  const {style, children} = props;
  let fontSize = wp('4%');
  if (style && style.fontSize) {
    fontSize = wp(style.fontSize);
  }
  return (
    <Text
      style={{
        ...styles.text,
        ...props.style,
        ...{fontSize},
      }}>
      {children}
    </Text>
  );
};

export default ResponsiveText;

const styles = {
  text: {
    color: Colors.text,
    fontFamily: Fonts.WorkSans.Regular,
  },
};
