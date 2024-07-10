import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import { useFonts } from 'expo-font';

const HomeScreen = ({navigation}) => (
  <View style={{
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center',


  }}>
    <Text style={{
      fontFamily: 'MetroMedium'
    }}>
      Home Screen
    </Text>

    <TouchableOpacity style={{
      marginTop: 15
    }}
    onPress={() => navigation.navigate('SignUp')}>
      <Text style={{
        fontFamily: 'MetroMedium'

      }}> Ke Halaman SignUp</Text>
    </TouchableOpacity>
  </View>
);

const Stack = createNativeStackNavigator();

const App =() => {
  const [dapatFont] = useFonts({

     'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
     'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
   });

  if (!dapatFont){
    return <Text style={{ fontFamily: 'NetroMedium'}}> Font tida ditemukang ...</Text>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;