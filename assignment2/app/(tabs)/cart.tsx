import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Heading from '../../components/globals/Heading';
import Feather from '@expo/vector-icons/Feather';

const Cart = () => {
  const cartItems = [
    {
      name: "MOTOROLA Edge 60 Fusion 5G (PANTONE Zephyr, 256 GB)",
      price: "₹25,999",
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/y/x/-original-imah3xk8crpgrg9y.jpeg?q=70",
    },
    {
      name: "MOTOROLA g35 5G (Leaf Green, 128 GB)",
      price: "₹8,999",
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/v/c/g35-5g-pb3h0001in-motorola-original-imah7c6xqfsptyzx.jpeg?q=70",
    },
    {
      id: 8,
      name: "Motorola g45 5G (Brilliant Blue, 128 GB)",
      price: "₹11,999",
      quantity: 1,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70",
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <Heading text="My cart" />

      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120, paddingTop:10}}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
                {item.name}
              </Text>
              <Text style={styles.price}>{item.price}</Text>

              <View style={styles.qtyContainer}>
                <TouchableOpacity>
                  <Feather name="minus-square" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.quantity}</Text>
                <TouchableOpacity>
                  <Feather name="plus-square" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>₹46,997</Text>
        </View>

        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: '600',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 25,

  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 16,
    color: '#555',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  payButton: {
    backgroundColor: '#066ad4ff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  payText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
