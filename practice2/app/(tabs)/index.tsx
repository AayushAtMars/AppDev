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
      <Text style={{fontSize:35, fontWeight:'bold', textAlign:'center', marginBottom:10}}>Todo App</Text>
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


      {/* USING MAP */}
      {/* {todo.map((item,index)=>(
        <View key={item.id} style={{marginTop:10,}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{color:'black', marginHorizontal:20}}>{index+1}</Text>
            <Text style={{color:'black', marginHorizontal:20}}>
            {item.title}
          </Text>
          <TouchableOpacity onPress={()=>deleteTodo(item.id)}><Text style={{backgroundColor:'red',color:'white', paddingHorizontal:5, paddingVertical:3, borderRadius:5}}>Delete</Text></TouchableOpacity>
          </View>     
        </View>
      ) )} */}



        {/* High-Performance Lists with <FlatList> */}
        {/* The .map() method has one major drawback: it renders every single item in your array at once. For a huge list, this can cause slow performance and high memory usage because the app is creating hundreds of components that aren't even visible on the screen.
        The solution is React Native's specialized list component: <FlatList>.
        <FlatList> is much more intelligent. It uses a technique called virtualization. This means it only renders the items that are currently visible on the screen (plus a small buffer). As you scroll, it recycles the components that move off-screen to render the new ones coming into view. This makes it incredibly fast and memory-efficient, even for massive lists. */}

        {/* To use it, you replace your .map() block with the <FlatList> component and give it a few key props:
        data: The array of data you want to render (e.g., your todo array).
        renderItem: A function that describes how to render a single item. It receives an object containing { item }, which is one element from your data array. This is where you'll put the JSX for your to-do item row.
        keyExtractor: A function that tells the FlatList how to find the unique key for each item. It's the replacement for the key prop you used in .map(). */}

    {/* USING FLATLIST */}
    <FlatList
    data={todo}
    keyExtractor={item => item.id}
    renderItem={({item,index})=>(
          <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
          <Text style={{color:'black', marginHorizontal:20}}>{index+1} hahaha</Text>
          <Text style={{color:'black', marginHorizontal:20}}>
              {item.title}
            </Text>
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
