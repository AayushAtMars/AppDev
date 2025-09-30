import { Platform, StyleSheet, View, Text } from 'react-native';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';



export default function HomeScreen() {

  const TASKS = [
  { id: '1', title: 'Learn React Native' },
  { id: '2', title: 'Build a Counter App' },
  { id: '3', title: 'Master Lists' },
];
  return (
    <View style={{backgroundColor:"gray", marginTop:}}>
      {TASKS.map(task => (
        <View key={task.id}>
          <Text style={{color:"white"}}>{task.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
