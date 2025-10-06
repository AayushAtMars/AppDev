import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

const index = () => {
  
  return (
    <LinearGradient 
     colors={['#6cccfe', '#948afc']}
    style={{backgroundColor: 'white', flex:1}}>
      <Stack.Screen options={{headerShown:false}} />
      <View style={styles.top} >
         <Image 
         style={styles.weather} 
         source={require('../../assets/images/weather.png')}
         resizeMode="contain" />
      </View>

      <View style={styles.bottom}>
        <View style={styles.dots}>
          <Image style={styles.dot} 
          source={require('../../assets/images/dot.png')}
          resizeMode='contain'/>
          <Image  style={styles.dot}
          source={require('../../assets/images/bluedot.png')}
          resizeMode='contain'/>
          <Image style={styles.dot} 
          source={require('../../assets/images/dot.png')}
          resizeMode='contain'/>
        </View>
        <Text style={styles.heading}>Weather App</Text>
        <Text style={styles.para}>Discover the weather in your city and plan your day correctly</Text>

        <TouchableOpacity 
        style={styles.hollow}
        onPress={()=>router.push('/second')}>
          <Image 
          style={styles.arrow}
          source={require('../../assets/images/arrow.png')}
          resizeMode='contain'/>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default index

const styles = StyleSheet.create({
  top:{
    marginTop:100,
    display:'flex',
    alignItems:'center'
  },
  weather:{
    width: 260,
    height: 260,
  },


  bottom:{
    marginTop:100,
    backgroundColor:'white',
    marginHorizontal:15,
    display:'flex',
    alignItems:'center',
    gap:30,
    paddingVertical:40,
    paddingBottom:50,
    borderRadius:40
  },

  dots:{
    display:'flex',
    flexDirection:'row',
    gap:6
  },
  dot:{
    width:15,
    height:15
  },

  heading:{
    fontSize:23,
    fontWeight:'bold'
  },
  para:{
    fontSize:16,
    textAlign:'center',
    paddingHorizontal:40,
  },
  arrow:{
    width:60,
    height:60
  },

  hollow:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
    backgroundColor: 'transparent',
    borderWidth:5,
    borderColor: '#60abfc'
  }
});