import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Product = {
  id: string;
  name: string;
  image: any; // Using any for local image require
  quantity: number;
  date: string;
  price: string;
  status?: 'active' | 'paused';
  category: string;
};

const ProductsPage = () => {
  const router = useRouter();

  // Static product data with images
  const products: Product[] = [
    {
      id: '1',
      name: 'Banana',
      image: require('../assets/images/banana.png'),
      quantity: 32,
      date: 'Apr 12, 2024 | 09:32AM',
      price: '$3',
      status: 'active',
      category: 'Electronics'
    },
    {
      id: '2',
      name: 'Red apple',
      image: require('../assets/images/red_apple.png'),
      quantity: 15,
      date: 'May 05, 2023 | 02:45PM',
      price: '$25',
      category: 'Electronics'
    },
    {
      id: '3',
      name: 'Rice',
      image: require('../assets/images/rice.png'),
      quantity: 32,
      date: 'Jan 18, 2023 | 11:15AM',
      price: '$3',
      status: 'active',
      category: 'Electronics'
    },
    {
      id: '4',
      name: 'Ginger',
      image: require('../assets/images/ginger.png'),
      quantity: 42,
      date: 'Mar 22, 2024 | 10:15AM',
      price: '$450,000',
      status: 'active',
      category: 'Mobile'
    },
    {
      id: '5',
      name: 'Samsung Galaxy S23 Ultra',
      image: require('../assets/images/banana.png'),
      quantity: 28,
      date: 'Feb 14, 2024 | 03:45PM',
      price: '$420,000',
      category: 'Mobile'
    }
  ];

  const handleAddProduct = () => {
    router.push('/upload-products');
  };

  const handleProductPress = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  const handleEditProduct = (productId: string) => {
    router.push(`/products/edit/${productId}`);
  };

  const handleDeleteProduct = (productId: string) => {
    // Implement delete functionality here
    console.log(`Deleted product with ID: ${productId}`);
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-4 pt-12 pb-4 bg-white shadow-sm">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-gray-800">Products</Text>
          <TouchableOpacity 
            className="flex-row items-center bg-blue-500 px-3 py-2 rounded-lg"
            onPress={handleAddProduct}
          >
            <Feather name="plus" size={18} color="white" />
            <Text className="text-white ml-1">Add Product</Text>
          </TouchableOpacity>
        </View>
        
        {/* Search Bar */}
        <View className="mt-4 flex-row items-center bg-gray-100 rounded-lg px-4 py-2">
          <Feather name="search" size={18} color="#6b7280" />
          <TextInput
            className="ml-2 flex-1 text-gray-700"
            placeholder="Search for products, stores"
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      {/* Product List */}
      <ScrollView className="px-4 pt-4 pb-24" showsVerticalScrollIndicator={false}>
        {products.map((product) => (
          <TouchableOpacity 
            key={product.id}
            className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-100"
            onPress={() => handleProductPress(product.id)}
          >
            <View className="flex-row">
              <Image 
                source={product.image} 
                className="w-20 h-20 rounded-lg mr-4"
                resizeMode="contain"
              />
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">{product.name}</Text>
                <Text className="text-gray-500 text-sm mt-1">In stock: {product.quantity}</Text>
                <Text className="text-gray-500 text-sm">{product.category}</Text>
                <Text className="text-gray-500 text-sm">{product.date}</Text>
                <Text className="text-lg font-bold text-gray-800 mt-1">{product.price}</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View className="flex-row justify-between mt-4 pt-3 border-t border-gray-100">
              {product.status === 'active' ? (
                <>
                  <TouchableOpacity 
                    className="flex-row items-center"
                    onPress={() => handleEditProduct(product.id)}
                  >
                    <MaterialIcons name="edit" size={18} color="#3b82f6" />
                    <Text className="text-blue-500 ml-1">Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    className="flex-row items-center"
                    onPress={() => handleDeleteProduct(product.id)}
                  >
                    <AntDesign name="delete" size={18} color="#ef4444" />
                    <Text className="text-red-500 ml-1">Delete</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity className="flex-row items-center">
                  <AntDesign name="delete" size={18} color="#ef4444" />
                  <Text className="text-red-500 ml-1">Delete</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductsPage;
