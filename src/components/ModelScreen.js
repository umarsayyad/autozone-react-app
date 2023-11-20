// ModelScreen.js
import React, { useState, useEffect } from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

const ModelScreen = ({ route, navigation }) => {
  const { make } = route.params;
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`)
      .then(response => {
        setModels(response.data.Results);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [make]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      {models.map(model => (
        <Button key={model.Model_ID} title={model.Model_Name} onPress={() => navigation.navigate('FinalScreen', { model: model.Model_Name })} />
      ))}
    </View>
  );
};

export default ModelScreen;
