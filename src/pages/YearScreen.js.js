import React from 'react';
import { View, Button, Text } from 'react-native';

const YearScreen = ({ navigation }) => {
  const years = Array.from({ length: 30 }, (_, index) => 1995 + index);

  return (
    <View>
      {years.map(year => (
        <Button key={year} title={year.toString()} onPress={() => navigation.navigate('MakeScreen', { year })} />
      ))}
    </View>
  );
};

export default YearScreen;