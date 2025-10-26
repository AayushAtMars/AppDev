import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'

const Heading = ({text}) => {
  return (
    <View style={styles.main}>
     <TouchableOpacity><Feather name="arrow-left" size={24} color="#000000" /></TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <Text></Text>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,
    },
    text:{
        fontSize:18,
        fontWeight:'900'
    }
})