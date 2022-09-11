import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import {androidCameraPermission} from '../../helpers/CameraPermission';
import ImagePicker from 'react-native-image-crop-picker';
import {moderateScale, moderateScaleVertical} from '../../theme/StyleConstants';
import CustomButton from '../../components/CustomButton';
import ImagePath from '../../helpers/ImagePath';
import {useTheme} from '@react-navigation/native';

const Selfie = () => {
  const theme = useTheme();
  const styles = useStyle(theme);

  const [image_url, setImage_url] = useState('');

  const captureImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS == 'ios') {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        useFrontCamera: true,
      })
        .then(image => {
          setImage_url(image.path);
        })
        .catch(e => alert(e));
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Camera'} />
      <CustomButton btnText={'Open Camera'} onPress={captureImage} />
      <View style={styles.imageWrapper}>
        {image_url ? (
          <Image
            source={{
              uri: image_url,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={ImagePath.ic_profile}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </View>
    </View>
  );
};

export default Selfie;

const useStyle = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor,
    },
    imageWrapper: {
      height: moderateScaleVertical(80),
      width: moderateScale(80),
      borderRadius: moderateScale(40),
      alignSelf: 'center',
      marginTop: moderateScaleVertical(50),
    },
    image: {
      height: moderateScaleVertical(80),
      borderRadius: moderateScale(40),
      width: moderateScale(80),
    },
  });
