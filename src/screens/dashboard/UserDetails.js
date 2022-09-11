import axios from 'axios';
import React, {FC, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute, useTheme} from '@react-navigation/native';

const UserDetails = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = useStyle(theme);

  const {
    params: {userId},
  } = useRoute();

  const [usersDetail, setUserDetail] = useState();
  useEffect(() => {
    getUserDetail();
  }, [userId]);

  const getUserDetail = async () => {
    const headers = {'app-id': '6186158c7f5fa01a0b0240f4'};
    try {
      const res = await axios['get'](
        `https://dummyapi.io/data/v1/user/${userId}`,
        {headers},
      );
      setUserDetail(res.data);
    } catch (error) {
      console.log('erro riased', error);
      alert('error');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginHorizontal: 24}}>
        <Text
          style={{
            ...styles.nameText,
            alignSelf: 'center',
            color: theme.colors.text,
          }}>
          User Detail
        </Text>
        <Image source={{uri: usersDetail?.picture}} style={styles.imgStyle} />
        <Text style={[styles.nameText, {color: theme.colors.text}]}>
          {usersDetail?.firstName} {usersDetail?.lastName}
        </Text>

        <Text style={{color: theme.colors.text}}>
          Email: {usersDetail?.email}
        </Text>
        <Text style={{marginVertical: 8, color: theme.colors.text}}>
          Phone: {usersDetail?.phone}
        </Text>
        <TouchableOpacity style={styles.btnStyle}>
          <Text
            style={{
              color: 'blue',
            }}>
            Share this user
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: theme.colors.text,
            }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const useStyle = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    imgStyle: {
      width: '100%',
      height: '40%',
      borderRadius: 30,
      backgroundColor: theme.colors.backgroundColor,
      alignSelf: 'center',
      marginTop: 16,
      resizeMode: 'cover',
    },
    nameText: {
      fontWeight: 'bold',
      fontSize: 16,
      marginLeft: 8,
      alignSelf: 'center',
      marginVertical: 8,
    },
    btnStyle: {
      height: 42,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: theme.colors.blue,
      marginVertical: 8,
    },
  });

export default UserDetails;
