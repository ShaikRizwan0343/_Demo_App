import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {RFValue} from 'react-native-responsive-fontsize';
import {
  FONTS,
  moderateScaleVertical,
  SCREEN_HEIGHT,
  textScale,
} from '../theme/StyleConstants';

const CustomButton = ({
  btnStyle = {},
  btnText,
  isDisable = false,
  onPress,
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isDisable}
      onPress={onPress}
      style={{
        ...styles.btnStyle,
        ...btnStyle,
      }}>
      <Text
        style={{
          ...styles.btnText,
          ...textStyle,
        }}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    backgroundColor: '#2E5BFF',
    borderRadius: 4,
    height: moderateScaleVertical(55),
    justifyContent: 'center',
    width: '100%',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: textScale(16),
    fontWeight: '500',
  },
});
