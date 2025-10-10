import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { iconData } from '../../assets/dataset/iconData'

const Trending = () => {
  return (
    <View>
      <FlatList
      data={iconData}
      keyExtractor={(item,index)=>index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View style={styles.main}>
            <View style={styles.card}>
                {item.icon}
            </View>
        </View>
      )}
      />
    </View>
  )
}

export default Trending

const styles = StyleSheet.create({
    main:{
        marginLeft:20,
        backgroundColor:'#ffff',
        padding:20,
        borderRadius:40,
        marginTop:20,
        borderColor:'skyblue',
        borderWidth:1
        
    },
})