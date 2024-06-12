import {  Text, View} from 'react-native'
import React from 'react'

const ButtonCostum =({color, text}) => {
    return(
      <View style={{
        backgroundColor: color, width: 150, height: 70,
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20
      }}>
        <Text style={{
          fontSize: 20, color: 'white',
          borderRadius: 20,
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          {text}
        </Text>
      </View>
      
    )
  }

export default ButtonCostum