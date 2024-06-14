import { StyleSheet, Text, View, Image, TextInput} from "react-native"
import React from "react"
 
const App = () => {
  const TextInputCustom =({name, color}) =>{
    return(
      <TextInput
      placeholder={`Masukkan ${name}`}
      style={{
        height: 40,
        width: 200,
        borderColor: 'green',
        borderWidth: 2,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        color: color,
      }}
    />

    )
  }
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>

    <TextInputCustom name="Nama Nenek" color="red"/>
    <TextInputCustom name="Nama Pak RT" color="yellow"/>
 



    </View>

  )
}

export default App

