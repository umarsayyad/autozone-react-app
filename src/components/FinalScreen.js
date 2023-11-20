// FinalScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const FinalScreen = ({ route }) => {
  const { year, make, model } = route.params;

  return (
    <View>
      <Text>Year: {year}</Text>
      <Text>Make: {make}</Text>
      <Text>Model: {model}</Text>
    </View>
  );
};

export default FinalScreen;
