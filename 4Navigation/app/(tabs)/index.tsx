import { Link } from 'expo-router';
import {useState } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

//  Creating Dynamic Lists (Adding & Deleting)

export default function HomeScreen() {
  type todo = {
    id:string,
    title : string
  }
  const[todo, setTodo] = useState<todo[]>([]);
  const[input,setInput] = useState('')



  const addTodo = ()=>{
    if(input.trim().length ===0) return;

    const newTodo = {
      id : Date.now().toString(),
      title: input,
    };
    
    setTodo([...todo,newTodo]);
    setInput('');
  }



const deleteTodo = (id:string)=>{
  const updatedTodo = todo.filter(item => item.id !== id)
  setTodo(updatedTodo);
}


  return (
    <View style={{marginTop:85,}}>


      <Link href='/details'>
  <Text style={{ color: 'blue', fontSize: 18 }}>Go To Details</Text>
  </Link>


      <Text style={{fontSize:35, fontWeight:'bold', textAlign:'center', marginBottom:10}}>Todo App Flatlist</Text>
      <View>
        <TextInput
      placeholder='Enter Todos'
      value={input}
      onChangeText={setInput}
      style={{borderWidth:2, borderColor:'black', backgroundColor:'white', marginHorizontal:10}}
      >
      </TextInput>

      <TouchableOpacity onPress={addTodo}>
        <Text style={styles.button}>Add</Text>
      </TouchableOpacity>
      </View>

    <View>
      <Text style={{fontSize:30, fontWeight:'bold', textAlign:'center'}}>Todo's</Text>


      <FlatList
      data={todo}
      keyExtractor={item => item.id}
      renderItem={({item,index})=>(
        <View style={{flexDirection:'row', alignItems:'center'}}>


          {/* DYNAMIC ROUTES */}
            <Text style={{color:'black', marginHorizontal:20}}>{index+1}</Text>
            <Link href={{
            pathname:`/[id]`,
            params: {id : item.id,title: item.title}
            }}> 
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
            </Link>
          <TouchableOpacity onPress={()=>deleteTodo(item.id)}><Text style={{backgroundColor:'red',color:'white', paddingHorizontal:5, paddingVertical:3, borderRadius:5}}>Delete</Text></TouchableOpacity>
          </View>  
      )}

      />

    </View>

    </View>
       
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'blue',
    color:'white',
    textAlign:'center',
    marginTop:10,
    padding:10,
    fontSize:20,
    fontWeight:'bold',
    borderRadius:5,
    marginHorizontal:60,
    overflow:'hidden',
  }
})
