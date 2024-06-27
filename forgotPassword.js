import { StyleSheet, Text, View, Image, TextInput} from "react-native"
import React from "react"

const App = () => {
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

      }}
      placeholder={email}
      />

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
          fontSize: 14
        }}>
          Please enter your email address. You will receive  
          a link to create a new password via email.

        </Text>
      </View>

        <TextInputCustom   email={"Email"}/>  


       
      <View style={{
        backgroundColor: '#DB3022',
        padding: 16,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 100,

 
      }}>
        <Text style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: '#fff'
        }}>
          SEND
        </Text>
      </View>

      </View>
    </View>

 
  )

}
export default App

