import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native"
import React from "react"
import { useFonts } from 'expo-font'
  
const App = ( {navigation}) => { 
  const[dapatFont] = useFonts({
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
  });
   if (!dapatFont) {
     return <Text> ndada font kanda..</Text>
   }
  const TextInputCustom= ({name, email, password, color}) => {
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
      placeholder={name}/>
 
      

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
        color: color,
        fontFamily: 'MetroMedium'
       }}
      placeholder={password}
      />

    </View>
      
    )
  }

  const ButtonCUstom =({color, text}) => {
    return(
      <View style={{
        borderRadius: 20,
        marginTop: 50,
        alignItems: 'center',
        backgroundColor: '#DB3022',
        padding: 16
      }}>
        <Text style={{
          fontSize: 14,
          fontWeight: 'bold',
          fontFamily: 'MetroBold',
          color: '#fff'

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
          fontWeight: 'bold',
          fontFamily: 'MetroBold',
          marginBottom: 24,
          marginTop: 54
        }}>
          SignUp
        </Text>        

        <TextInputCustom name="Name" email={"Email"} password={"Password"}/> 
         

      <View style={{
        marginTop: 20,
        marginBottom: 10,
        marginRight: 100
 
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
        <Text style={{
          textAlign: 'right',
          fontSize: 14,
          fontFamily: 'MetroMedium',
        }}>
          Already have an account?
        </Text>
        </TouchableOpacity>
      </View>    

      <ButtonCUstom text= "SIGN UP" color='#fff'/>

      <View>
        <Text style={{
          textAlign: 'center', 
          marginBottom: 16,
          fontSize: 14,
          marginTop: 100,
          fontFamily: 'MetroMedium',
        }}>
          Or sign up with social account
        </Text>
      </View>  



      <View style={{
        flexDirection: "row",
        justifyContent: 'center'}}>


      <View style={{
        marginHorizontal: 8,
        backgroundColor: 'white', width: 92, height: 64, borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image source={require('./assets/google.png')}
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#f0f0f0',
          borderRadius: 10
        }}/>
      </View>
      <View style={{
        marginHorizontal: 8,
        backgroundColor: 'white', width: 92, height: 64, borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <Image source={require('./assets/fb.png')}
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#f0f0f0',
          borderRadius: 10
        }}/>
      </View>
      </View>
      
      </View>
    </View>

 
  )

}
export default App

