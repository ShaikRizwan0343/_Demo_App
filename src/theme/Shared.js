import {DefaultTheme} from '@react-navigation/native';

const Shared = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: '#FAFAFA',
    blue: '#0079C2',
    gray: '#E1E1E1',
    green: '#0DA01C',
    lightWhite: 'rgb(252, 254, 252)',
    orange: '#E58128',
    pablo: '#8692A6',
    primaryWhite: '#FFFFFF',
    red: '#E51414',
    yellow: '#FFC800',
    text: '#333333',
    header: '#ADD8E6',
    tabFocused: '#fff',
    userText: '#000',
  },
};

export default Shared;
