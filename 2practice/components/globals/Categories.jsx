import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import { categories } from "../../assets/dataset/categories";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.main}>
      <FlatList
        style={styles.flatlist}
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item,index }) => (
          <TouchableOpacity
          onPress={()=>setActiveIndex(index)}>
            <View
              style={[styles.tab, activeIndex === index && styles.activeTab]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeIndex === index && styles.activeText,
                ]}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
  },
  flatlist: {
    // marginLeft:10
  },
  tab: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 40,
  },
  tabText: {
    color: 'black',
    fontWeight: '500',
  },
  activeTab: {
    backgroundColor: 'darkblue',
    borderColor: 'darkblue',
  },
  activeText: {
    color: 'white',
    fontWeight: '600',
  },
});
