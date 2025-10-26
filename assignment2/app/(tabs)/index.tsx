import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Searchbox from '../../components/globals/Searchbox';
import Heading from '../../components/globals/Heading';
import Brands from '../../components/globals/Brands';
import OthersBuy from '../../components/globals/OthersBuy';

const Index = () => {
  const components = [
    { id: '1', render: <Searchbox /> },
    { id: '2', render: <Heading text='Phones' /> },
    { id: '3', render: <Brands /> },
    { id: '4', render: <OthersBuy /> },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        data={components}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <View>{item.render}</View>}
      />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
