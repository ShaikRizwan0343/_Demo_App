import {DarkTheme} from '@react-navigation/native';

const CustomDarkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    backgroundColor: '#333333',
    blue: '#0079C2',
    gray: '#E1E1E1',
    green: '#0DA01C',
    lightWhite: 'rgb(252, 254, 252)',
    orange: '#E58128',
    pablo: '#8692A6',
    primaryWhite: '#333333',
    red: '#E51414',
    yellow: '#FFC800',
    text: 'rgb(252, 254, 252)',
    header: '#fff',
    tabFocused: '#000',
    userText: '#fff',
  },
};

export default CustomDarkTheme;
