import React, { useState, useEffect } from 'react';
import { View, Button, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

const MakeScreen = ({ route, navigation }) => {
  const { year } = route.params;
  const [makes, setMakes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json&year=${year}`)
      .then(response => {
        setMakes(response.data.Results);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [year]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      {makes.map(make => (
        <Button key={make.MakeId} title={make.MakeName} onPress={() => navigation.navigate('ModelScreen', { make: make.MakeName })} />
      ))}
    </View>
  );
};

export default MakeScreen;
