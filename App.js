// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YearScreen from './src/pages/YearScreen.js';
import MakeScreen from './src/pages/MakeScreen';
import ModelScreen from './src/components/ModelScreen';
import FinalScreen from './src/components/FinalScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="YearScreen">
        <Stack.Screen name="YearScreen" component={YearScreen} options={{ title: 'Select Year' }} />
        <Stack.Screen name="MakeScreen" component={MakeScreen} options={{ title: 'Select Make' }} />
        <Stack.Screen name="ModelScreen" component={ModelScreen} options={{ title: 'Select Model' }} />
        <Stack.Screen name="FinalScreen" component={FinalScreen} options={{ title: 'Final Selection' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
