import { View, Text, Image, StyleSheet,Dimensions } from 'react-native'
import React from 'react'

// const screenwidth = Dimensions.get('window').width;

const Hero = () => {
  return (
    <View style={{width:'100%'}}>
            <Image
            style={styles.heroimage}
              source={{
                uri: "https://furnikraft.com/wp-content/uploads/2025/01/Bedroom-960x586-1.jpg"
              }}
              resizeMode="cover"
            />
          </View>
  )
}

export default Hero

const styles = StyleSheet.create({
    main:{
        alignItems:'center',
        justifyContent:'center'
    },
    heroimage:{
    // width:screenwidth,
    height:250,
    paddingTop:0,
    // paddingVertical:0
  }
})