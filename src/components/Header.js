import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../theme/StyleConstants';
import ToggleButton from './ToggleButton';
import {handleThemeVisibility} from '../redux/theme/theme-actions';
import {DARK_THEME, LIGHT_THEME} from '../redux/theme/theme-constants';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

const Header = ({title}) => {
  const theme = useTheme();
  const styles = useStyle(theme);

  const dispatch = useDispatch();

  const toggleTheme = useSelector(state => state.ThemeReducer.isDarkMode);

  const handleToggleVisibility = () => {
    if (toggleTheme) {
      dispatch(handleThemeVisibility(LIGHT_THEME));
    } else {
      dispatch(handleThemeVisibility(DARK_THEME));
    }
  };

  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.title}>{title}</Text>
      <ToggleButton
        size={0.8}
        toggle={toggleTheme}
        handleToggleVisibility={handleToggleVisibility}
      />
    </View>
  );
};

export default Header;

const useStyle = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.header,
      height: moderateScaleVertical(60),
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: moderateScale(20),
    },
    title: {
      fontSize: textScale(22),
      fontWeight: '600',
      textAlign: 'center',
    },
  });
