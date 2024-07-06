import { StyleSheet, Text, View,TextInput} from "react-native"
import React from "react"
import { useFonts } from "expo-font";

const App = () => {
  const[dapatFont] = useFonts({
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
  });
   if (!dapatFont) {
     return <Text> ndada font kanda..</Text>
   }
  const TextInputCustom= ({email}) => {
    return (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      
    <TextInput
      style={{
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        width: 343,
        height: 64,
        borderRadius: 4,
        fontFamily: 'MetroMedium'

      }}
      placeholder={email}
      />

    </View>
      
    )
  }
  const ButtonCustom =({color, text}) => {
    return(
      <View style={{
        borderRadius: 20,
        marginTop: 60,
        alignItems: 'center',
        backgroundColor: '#DB3022',
        padding: 16
      }}>
        <Text style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: '#fff',
          fontFamily: 'MetroMedium'

        }}>
          {text}
        </Text>
      </View>
    )
  }
  
  return (
    <View style={{
      flex:1,
      backgroundColor: '#f9f9f9'}}>

      <View style={{
        flex:1, padding:16
      }}>
        <Text style={{
          fontSize: 32,
          padding: 16,
          // fontWeight: 'bold',
          fontFamily: 'MetroBold',
          marginBottom: 24,
          marginTop: 54
        }}>
          Forgot password
        </Text>        

        <View style={{
          marginTop: 40,
          marginBottom: 10,
          marginLeft: 15
 
 
      }}>
        <Text style={{
          fontSize: 14,
          fontFamily: 'MetroMedium',
        }}>
          Please enter your email address. You will receive  
          a link to create a new password via email.

        </Text>
      </View>

        <TextInputCustom   email={"Email"}/>  
        <ButtonCustom text= "SEND" color='#fff'/>
 
      </View>
    </View>

 
  )

}
export default App

