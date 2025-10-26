import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';


const ProfileCard = (props)=>{
  return(
    <View style={{marginVertical: 10}}>
      <Text style={styles.nameFont}> Name = {props.name}</Text>
      <Text style={styles.second}> Subtitle = {props.subtitle}</Text>
    </View>
  )
}


export default function HomeScreen() {
  

  const [name, setName] = useState('')
  const [counter, setCounter] = useState(0)



  return (
    <View style={{ backgroundColor: '#f0f0f0', flex: 1, justifyContent: 'center', alignItems:'center'}}>


      <Text style={styles.nameFont}>Aayush Kumar Singh</Text>
      <Text style={styles.second}>Learning React Native</Text>



      {/* Custom Components and Props */}
      <ProfileCard name = 'Aayush' subtitle = 'Mahan' ></ProfileCard>
      <ProfileCard name = 'Piyush' subtitle = 'Noob'></ProfileCard>




      {/* Handling User Input with TextInput and State */}
        {/* <TextInput
        placeholder='Enter your name'
        value={name}
        onChangeText={setName}
        style = {{borderColor:'black',borderWidth:1, borderRadius:5, paddingVertical:5, paddingHorizontal:10}}
        >
        </TextInput>

        <Text style={{marginTop:10}}>Hello {name}</Text> */}





        {/* Handling Taps with <Button> & <TouchableOpacity> */}
        {/* <Text style={styles.nameFont} > Current Count : {counter}</Text>
        <TouchableOpacity
        onPress={ ()=>setCounter(counter+1)}
        >
          <View style={{backgroundColor:'red', marginTop:10, borderRadius:10}}>
            <Text style={{color:'white', fontSize:20, paddingHorizontal:15, paddingVertical:7}}>Press me</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={ ()=>setCounter(0)}
        >
          <View style={{backgroundColor:'red', marginTop:10, borderRadius:10}}>
            <Text style={{color:'white', fontSize:20, paddingHorizontal:15, paddingVertical:7}}>Reset</Text>
          </View>
        </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  nameFont:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  second:{
    color: 'gray'
  }
});
