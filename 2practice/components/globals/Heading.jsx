import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Heading = ({name}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.head}>{name}</Text>
      <TouchableOpacity>
        <Text style={styles.button}>See all</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        marginTop:30
    },
    head:{
        fontSize:18,
        fontWeight:'600'
    },
    button:{
        color:'darkblue',
        fontWeight:'500'
    }
})