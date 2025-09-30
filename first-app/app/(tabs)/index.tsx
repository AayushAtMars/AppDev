import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const images = [
  'https://i.pinimg.com/736x/f2/d3/0d/f2d30d49ce2e0f2536378b7a488ecc0b.jpg',
  'https://i.pinimg.com/736x/40/ed/e3/40ede35306c008f27a7da176cd5b21eb.jpg',
  'https://i.pinimg.com/1200x/be/5a/ef/be5aefd6fdd29fd8486280e9abe9617b.jpg',
  'https://i.pinimg.com/736x/cd/57/b4/cd57b42c7415fb1daddbe9cd9a500e31.jpg',
  'https://i.pinimg.com/736x/a7/3e/0a/a73e0a2672ad654b2fe22f3094f01dff.jpg',
  'https://i.pinimg.com/736x/4f/4c/81/4f4c81b8dd02356bb06f46a1237e2e4a.jpg',



  'https://i.pinimg.com/736x/7c/d3/5e/7cd35e8afa851e9b8aaa860a84da4ab4.jpg',
  'https://i.pinimg.com/1200x/40/e8/ee/40e8ee6421185317d46e7c0601b6bf03.jpg',
  'https://i.pinimg.com/1200x/68/aa/5e/68aa5e39bafd44871c71df3f91575352.jpg',
  'https://i.pinimg.com/1200x/5b/b8/8d/5bb88df3a76950217861e2d87b8f2b54.jpg',
  'https://i.pinimg.com/736x/62/3f/f1/623ff1074cb6c153eb575e2189352af5.jpg',
  'https://i.pinimg.com/736x/74/39/7c/74397cd20d692c571fdb11e5d63eb93c.jpg',
];


function createBlocks(imgs:string[]) {
  const blocks = [];
  for (let i =0; i<imgs.length;i += 6) {
    blocks.push(imgs.slice(i,i+6));
  }
  return blocks;
}

const imageBlocks = createBlocks(images);

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f7f5' }}>

      {/* top */}
      <View style={styles.header}>

        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.arrow}>{"←"}</Text>
        </TouchableOpacity>

        <Text style={styles.headerSpacer}></Text>

        <TouchableOpacity style={styles.profileWrapper}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/93/44/8a/93448a4488751eb94c2b1d938f53f852.jpg" }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* title */}
      <Text style={styles.savedTitle}>Saved</Text>


      {/*gallery */}
      <FlatList
        data={imageBlocks}
        keyExtractor={(_,i) => `block-${i}`}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item: block }) => (
          <View style={{ marginBottom: 18 }}>

            {/*2 images */}
            <View style={styles.row}>
              {[block[0], block[1]].map((img, j) =>
                img ? (
                  <View key={j} style={styles.largeImg}>
                    <Image source={{ uri: img }} style={styles.image} />
                  </View>
                ) : null
              )}
            </View>


            {/*one image */}
            {block[2] && (
              <View style={styles.row}>
                <View style={styles.wideImg}>
                  <Image source={{ uri: block[2] }} style={styles.image} />
                </View>
              </View>
            )}


            {/*3 images */}
            <View style={styles.row}>
              {[block[3], block[4], block[5]].map((img, k) =>
                img ? (
                  <View key={k} style={styles.smallImg}>
                    <Image source={{ uri: img }} style={styles.image} />
                  </View>
                ) : null
              )}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    paddingBottom: 4,
    justifyContent: 'space-between',
    backgroundColor: '#f9f7f5',
  },
  iconBtn: {
    paddingLeft: 6,
    paddingRight: 16,
  },
  arrow: {
    fontSize: 28,
    color: '#222',
    fontWeight: 'bold',
  },
  headerSpacer: {
    flex: 1,
  },
  profileWrapper: {
    paddingRight: 6,
  },
  profileImage: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#ccc',
  },
  savedTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 18,
    color: '#222',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  largeImg: {
    flex: 1,
    aspectRatio: 1,
    margin: 6,
    borderRadius: 18,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  wideImg: {
    flex: 1,
    aspectRatio: 2.15,
    margin: 6,
    borderRadius: 18,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  smallImg: {
    flex: 1,
    aspectRatio: 1,
    margin: 6,
    borderRadius: 18,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
