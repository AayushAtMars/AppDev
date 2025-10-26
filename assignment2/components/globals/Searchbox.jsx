import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto'

const Searchbox = () => {
  return (
    <View style={styles.main}>
      <TextInput
      style={styles.textInput}
      placeholder='Search'
      />
      <Fontisto name="search" size={15} color="#000000" />

    </View>
  )
}

export default Searchbox

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        borderWidth:0.2,
        borderColor:'#c4bfbfff'
    },
    textInput:{
        fontSize:15
    }
})