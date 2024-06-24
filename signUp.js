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
        password: password,
        email: email
 
 
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
        color: color,
        email: email,
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
        email: email,
      }}
      placeholder={password}
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
          SignUp
        </Text>        

        <TextInputCustom name="Name" color="gray"/> 
        <TextInputCustom email="Email" color="gray"/> 
        <TextInputCustom password="Password" color="gray"/> 


      <View style={{
        marginTop: 100,
        marginBottom: 10,
        marginRight: 100
 
      }}>
        <Text style={{
          textAlign: 'right',
          fontSize: 14
        }}>
          Already have an account?
        </Text>
      </View>    



      <View style={{
        backgroundColor: '#DB3022',
        padding: 16,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 150

      }}>
        <Text style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: '#fff'
        }}>
          SIGN UP
        </Text>
      </View>


      <View>
        <Text style={{
          textAlign: 'center', 
          marginBottom: 16,
          fontSize: 14,
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

