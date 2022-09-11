import React, {useState, FC} from 'react';
import {TouchableOpacity, Animated, StyleSheet, Easing} from 'react-native';
import {useTheme} from '@react-navigation/native';

const containerStyle = (size, isActive) => ({
  backgroundColor: isActive ? 'green' : 'gray',
  height: 32 * size,
  width: 64 * size,
  borderRadius: 32,
  padding: 4 * size,
});

const toggleStyle = (size, animatedValue) => ({
  height: 24 * size,
  width: 24 * size,
  backgroundColor: '#fff',
  borderRadius: 32,
  transform: [
    {
      translateX: animatedValue,
    },
  ],
});

const ToggleButton = ({size, toggle, handleToggleVisibility}) => {
  const theme = useTheme();

  const [isActive, setIsActive] = useState(toggle);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const toggleHandle = () => {
    Animated.timing(animatedValue, {
      toValue: isActive ? 0 : 32 * size,
      duration: 250,
      easing: Easing.bounce,
      delay: 0,
      useNativeDriver: true,
    }).start();
    setIsActive(!isActive);
    handleToggleVisibility();
  };

  return (
    <TouchableOpacity
      style={containerStyle(size, isActive)}
      onPress={() => toggleHandle()}
      activeOpacity={0.8}>
      <Animated.View style={toggleStyle(size, animatedValue)} />
    </TouchableOpacity>
  );
};

export default ToggleButton;
