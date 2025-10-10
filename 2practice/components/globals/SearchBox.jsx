import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'


const SearchBox = () => {

    const[input, setInput] = useState('')

  return (
    <View style={styles.textInput}>
      <TextInput
      style={styles.text}
      placeholder='Search A Course'
      value={input}
      />
      <TouchableOpacity><FontAwesome name="search" size={18} color="#000000" /></TouchableOpacity>
    </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    text:{
        fontSize:17,
        color:'#c4bebe',
        paddingLeft:10,
        fontWeight:'500'
    },
    textInput:{
        marginHorizontal:15,
        marginTop:40,
        borderColor:'grey',
        borderWidth:0.2,
        borderRadius:20,
        paddingHorizontal:20,
        paddingVertical:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    }
})