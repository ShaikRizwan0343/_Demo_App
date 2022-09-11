import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import {moderateScale, moderateScaleVertical} from '../theme/StyleConstants';

const Loader = ({loading}) => {
  const theme = useTheme();
  const styles = useStyle(theme);
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={true} color={'#000'} size="large" />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const useStyle = theme =>
  StyleSheet.create({
    activityIndicatorWrapper: {
      backgroundColor: theme.colors.header,
      borderRadius: moderateScale(10),
      height: moderateScaleVertical(80),
      width: moderateScale(80),
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
