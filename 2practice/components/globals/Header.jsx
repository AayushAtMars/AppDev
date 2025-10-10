import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'


const Header = () => {
  return (
    <View style={styles.main}>
      <MaterialIcons name="menu" size={30} color="#000000" />
      <MaterialCommunityIcons name="face-man-profile" size={40} color="#000000" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20
    }
})