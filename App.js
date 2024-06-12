import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'


const App = () => {
  return (

    <View style={{flex:1}}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold'
        }}>
          KORUPSI KOLUSI NEPOTISME
        </Text>
      </View>

      <View style={{
        alignItems: 'center',
        marginTop: 70
      }}>
        <Image source={require('./assets/meme.jpg')}
        style={{
          width: 300,
          height: 300
        }}/>
      </View>

      <View style={{
        flex:1, flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: 30
      }}>

    <View style={{
      backgroundColor: 'red', width: 150, height: 70,
      justifyContent: 'center',
      borderRadius: 10
    }}>
      <Text style={{
        fontSize: 20, color: 'white',
        borderRadius: 20,
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        LOGIN
      </Text>
    </View>
      <View style={{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'blue', width: 150, height: 70,
        borderRadius: 10,
        marginLeft: 10
      }}>
        <Text style={{
          fontSize: 20, color: 'white',
          borderRadius: 20,
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          LOGOUT
        </Text>
      </View>     
      </View>
    </View>

  )
}

export default App

