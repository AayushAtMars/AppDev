import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  Header from '../../components/globals/Header'
import  SearchBox from '../../components/globals/SearchBox'
import  Heading from '../../components/globals/Heading'
import  Categories from '../../components/globals/Categories'
import  Trending from '../../components/globals/Trending'

const index = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <SearchBox />
      <Heading name='Categories' />
      <Categories />
      <Heading name='Trending' />
      <Trending />
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  main:{
    marginTop:20
  }
})