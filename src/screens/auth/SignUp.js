import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RFValue} from 'react-native-responsive-fontsize';
import {route} from '../../utils/constants/routeNames';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [nameError, setNameError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const validate = async () => {
    Keyboard.dismiss();
    let valid = true;
    if (!name) {
      setNameError('Name is required');
      valid = false;
    }
    if (!phone) {
      setPhoneError('Phone is required');
      valid = false;
    }
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      setEmailError('Invalid email');
      valid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    }
    if (valid) {
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({
          name,
          phone,
          email,
          password,
        }),
      );
      navigation.navigate(route.login);
    }
  };

  return (
    <View
      style={{flex: 1, backgroundColor: '#c8daed', justifyContent: 'flex-end'}}>
      <View
        style={{
          flex: 0.9,
          backgroundColor: '#f0f5fc',
          marginTop: '10%',
          marginHorizontal: 2,
          borderRadius: 18,
          paddingHorizontal: '4%',
        }}>
        <View style={{marginTop: 30}}>
          <View style={styles.textInputWrapper}>
            <Ionicons
              name="person-outline"
              size={25}
              color="rgba(159, 172, 250, 1)"
            />
            <TextInput
              style={styles.textInputStyles}
              placeholder={'Enter your Name'}
              placeholderTextColor="rgba(159, 172, 250, 1)"
              onChangeText={text => setName(text)}
              onFocus={() => {
                setNameError('');
              }}
            />
          </View>
          {!!nameError && <Text style={{color: 'red'}}>{nameError}</Text>}
          <View style={styles.textInputWrapper}>
            <FontAwesome
              name="mobile-phone"
              size={25}
              color="rgba(159, 172, 250, 1)"
            />
            <TextInput
              style={styles.textInputStyles}
              placeholder={'Enter your Number'}
              placeholderTextColor="rgba(159, 172, 250, 1)"
              onChangeText={text => setPhone(text)}
              onFocus={() => {
                setPhoneError('');
              }}
              keyboardType="phone-pad"
            />
          </View>
          {!!phoneError && <Text style={{color: 'red'}}>{phoneError}</Text>}
          <View style={styles.textInputWrapper}>
            <MaterialCommunityIcons
              name="email-outline"
              size={25}
              color="rgba(159, 172, 250, 1)"
            />
            <TextInput
              style={styles.textInputStyles}
              placeholder={'Enter your email'}
              placeholderTextColor="rgba(159, 172, 250, 1)"
              onChangeText={text => setEmail(text)}
              onFocus={() => {
                setEmailError('');
              }}
            />
          </View>
          {!!emailError && <Text style={{color: 'red'}}>{emailError}</Text>}
          <View style={styles.textInputWrapper}>
            <MaterialCommunityIcons
              name="onepassword"
              size={25}
              color="rgba(159, 172, 250, 1)"
            />
            <TextInput
              style={styles.textInputStyles}
              placeholder={'Enter your Password'}
              placeholderTextColor="rgba(159, 172, 250, 1)"
              onChangeText={text => setPassword(text)}
              onFocus={() => {
                setPasswordError('');
              }}
            />
          </View>
          {!!passwordError && (
            <Text style={{color: 'red'}}>{passwordError}</Text>
          )}
          <TouchableOpacity
            onPress={() => validate()}
            style={{
              backgroundColor: 'rgba(5, 19, 103, 1)',
              borderRadius: 8,
              marginTop: 40,
            }}>
            <Text
              style={{
                paddingVertical: 15,
                color: '#fff',
                alignSelf: 'center',
                fontSize: RFValue(16),
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={styles.accountTextWrapper}>
            <Text style={styles.attrbuted_textlabel_AlreadyHaveAnAccoText}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(route.login)}>
              <Text style={styles.attrbuted_textlabel_AlreadyHaveAnAccoText3}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(159, 172, 250, 1)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingRight: 20,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  textInputStyles: {
    paddingHorizontal: 20,
    fontWeight: 'normal',
    fontSize: RFValue(14),
    color: 'rgba(5, 19, 103, 1)',
  },
  attrbuted_textlabel_AlreadyHaveAnAccoText3: {
    fontWeight: 'normal',
    color: 'rgba(5, 19, 103, 1)',
    textAlign: 'center',
    fontSize: RFValue(16),
  },
  attrbuted_textlabel_AlreadyHaveAnAccoText: {
    color: 'rgba(47, 116, 250, 1)',
    textAlign: 'center',
    fontSize: RFValue(16),
  },
  accountTextWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
  },
});
