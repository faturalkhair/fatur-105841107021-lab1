import { StyleSheet, Text, View, Image} from "react-native"
import React from "react"
import ButtonCostum from "./component/button/button"
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
        marginBottom: 30,
      }}>
        <ButtonCostum color='red' text='LOGIN'/>
        <ButtonCostum color='blue' text='LOGOUT'/>
 
      </View>
    </View>

  )
}

export default App

