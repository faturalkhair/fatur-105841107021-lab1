import { View, Text, Image} from 'react-native';
import react from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const VirtualSearch =(navigation) => {
  const[dapatFont] = useFonts({
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroSemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  });
   if (!dapatFont) {
     return <Text> ndada font kanda..</Text>
   }
  
   const ButtonCostum = ({color, text}) => {
    return(
      <View style={{
        backgroundColor: color, width: 343, height: 48,
        justifyContent: 'center',
        borderRadius: 20,
        margin: 20,
        marginBottom: -10,
        padding: 10,
        marginColor:  'black',
      }}>
        <Text style={{
          fontSize: 20, color: 'white',
          borderRadius: 20,
          textAlign: 'center',
          fontFamily: 'MetroMedium'
        }}>
          {text}
        </Text>
      </View>
    )
  }


    return (
      <View style={{flex:1}}> 
        <View style={{flex:1}}>
        <Image source={require('./assets/orang.jpg')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        />
        </View>
        <View style={{
          marginLeft: 16,
          marginTop: 286,
          position: 'absolute'
        }}>
            <Text style={{
              fontFamily: 'MetroSemiBold',
              fontSize: 24
            }}>
                Search for an outfit by <br/>
                taking a photo ur uploading <br/>
                an image
            </Text>      

        <ButtonCostum color='#DB3022' text='TAKE A PHOTO' onPress={() => navigation.navigate('HomeScreen')}/>
        <ButtonCostum color='#f6f7fb5d' text='UPLOAD AN IMAGE'/>
        </View>

      </View>
      
    )    
}
export default VirtualSearch