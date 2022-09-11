import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('error raised during setItem');
  }
};

export const getItem = async key => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(data => {
        resolve(JSON.parse(data));
      })
      .catch(error => {
        reject(error);
      });
  });
};
