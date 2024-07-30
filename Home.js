import { View, Text, Button } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '50%'
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold'
      }}>
        INI HALAMAN HOME
      </Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Ke Halaman Login"
          onPress={() => navigation.navigate('LoginPage')}
        />
      </View>
    </View>
  );
};

export default Home;
