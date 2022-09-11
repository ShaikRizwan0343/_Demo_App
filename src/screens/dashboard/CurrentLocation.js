import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  getCurrentLocation,
  locationPermission,
} from '../../helpers/LocationPermission';
import Header from '../../components/Header';
import {useTheme} from '@react-navigation/native';
import {moderateScale, textScale} from '../../theme/StyleConstants';
import {useState} from 'react';

const CurrentLocation = () => {
  const theme = useTheme();
  const styles = useStyle(theme);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    getLiveLocation();
  }, []);

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {heading, latitude, longitude} = await getCurrentLocation();
      setLatitude(latitude);
      setLongitude(longitude);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Current Location'} />
      <View style={styles.wrapper}>
        <Text style={[styles.text, {fontWeight: '600'}]}>CurrentLocation</Text>
        <Text style={styles.text}>Latitude: {latitude}</Text>
        <Text style={styles.text}>Longitude: {longitude}</Text>
      </View>
    </View>
  );
};

export default CurrentLocation;

const useStyle = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    text: {
      color: theme.colors.text,
      alignSelf: 'center',
      fontSize: textScale(22),
    },
    wrapper: {
      flex: 1,
      justifyContent: 'center',
    },
  });
