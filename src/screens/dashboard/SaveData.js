import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../theme/StyleConstants';
import {useTheme} from '@react-navigation/native';
import {getItem, setItem} from '../../helpers/LocalStorage';
import {useState} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';

const data = require('../../utils/staticData/Data.json');

const SaveData = () => {
  const theme = useTheme();
  const styles = useStyle(theme);

  const [_data, _setData] = useState([]);

  useEffect(() => {
    getItem('data').then(res => {
      _setData(res);
    });
  }, [_data]);

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <View style={styles.cardWrapper}>
          <Text
            style={[
              styles.text,
              {fontWeight: '600', color: theme.colors.blue},
            ]}>
            {item.title}
          </Text>
          <Text style={styles.text}>{item.body}</Text>
        </View>
      );
    },
    [_data],
  );

  const handleSave = async () => {
    await setItem('data', data);
    await getItem('data').then(res => {
      _setData(res);
    });
  };

  return (
    <View style={styles.container}>
      <Header title={'Save Data'} />
      <CustomButton
        btnText={'Save & Read Data'}
        btnStyle={styles.button}
        onPress={handleSave}
      />
      <FlatList
        data={_data ? _data : []}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => 'key' + index}
      />
    </View>
  );
};

export default SaveData;

const useStyle = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor,
    },
    button: {
      marginVertical: moderateScaleVertical(20),
      marginHorizontal: moderateScale(20),
      width: moderateScale(350),
      borderRadius: moderateScale(16),
    },
    text: {
      color: theme.colors.text,
      fontSize: textScale(22),
    },
    cardWrapper: {
      borderWidth: 1,
      borderColor: theme.colors.text,
      paddingHorizontal: moderateScale(20),
      paddingVertical: moderateScaleVertical(20),
      margin: moderateScale(10),
      marginTop: moderateScaleVertical(10),
    },
  });
