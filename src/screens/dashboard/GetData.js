import React, {useEffect, useState, useCallback, useReducer} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import axios from 'axios';
import Header from '../../components/Header';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../theme/StyleConstants';
import {route} from '../../utils/constants/routeNames';
import {
  INITIAL_STATE,
  PostReducer,
} from '../../utils/serviceHelper/useReducer/PostReducer';
import {ACTION_TYPES} from '../../utils/serviceHelper/useReducer/useReducerConstants';
import Loader from '../../components/Loader';

const GetData = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = useStyle(theme);

  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

  const [usersData, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    dispatch({type: ACTION_TYPES.FETCH_START});
    const headers = {'app-id': '6186158c7f5fa01a0b0240f4'};
    try {
      const res = await axios['get']('https://dummyapi.io/data/v1/user', {
        headers,
      });
      dispatch({type: ACTION_TYPES.FETCH_SUCCESS});
      setUsers(res.data.data);
    } catch (error) {
      dispatch({type: ACTION_TYPES.FETCH_ERROR});
      console.log('erro riased', error);
      alert('error');
    }
  };

  const onPressItem = item => {
    navigation.navigate(route.UserDetails, {userId: item.id});
  };

  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          activeOpacity={0.8}
          onPress={() => onPressItem(item)}>
          <Image style={styles.imgStyle} source={{uri: item?.picture}} />
          <Text style={[styles.nameText, {color: theme?.colors?.userText}]}>
            {item?.firstName} {item?.lastName}
          </Text>
        </TouchableOpacity>
      );
    },
    [usersData],
  );

  return (
    <View style={styles.container}>
      <Header title={'Get Data'} />
      <Loader loading={state.loading} />
      <View style={{paddingHorizontal: moderateScale(20)}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={usersData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View style={{marginBottom: moderateScaleVertical(40)}} />
          )}
          ListHeaderComponent={() => (
            <View style={{height: moderateScaleVertical(10)}} />
          )}
        />
      </View>
    </View>
  );
};

const useStyle = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor,
    },
    imgStyle: {
      width: moderateScale(60),
      height: moderateScaleVertical(60),
      borderRadius: moderateScale(30),
    },
    nameText: {
      fontWeight: 'bold',
      fontSize: textScale(16),
      marginLeft: moderateScale(6),
      color: theme.colors.text,
    },
  });

export default GetData;
