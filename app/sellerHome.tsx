import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const SellerDashboard = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-50 pb-16">
      {/* Main Scrollable Content */}
      <ScrollView showsVerticalScrollIndicator={false} className="px-5">
        {/* Header */}
        <View className="flex-row justify-between items-center pt-6 pb-4">
          <Text className="text-3xl font-bold text-blue-600">Grocery Glide</Text>
          <View className="relative">
            <MaterialIcons name="notifications" size={28} color="#4b5563" />
            <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
              <Text className="text-white text-xs">4</Text>
            </View>
          </View>
        </View>

        {/* Welcome Section */}
        <View className="mb-6">
          <Text className="text-xl text-gray-800">Welcome Back</Text>
          <Text className="text-xl font-bold text-gray-800">My Earnings</Text>
          <View className="h-px bg-gray-200 my-4" />
        </View>

        {/* Stats Cards - Grid Layout */}
        <View className="flex-row flex-wrap justify-between mb-8">
          {/* Earnings & Products Card */}
          <View className="bg-white rounded-lg shadow-sm p-5 mb-4 w-[48%] border border-gray-100">
            <View className="mb-4">
              <Text className="text-gray-500 text-sm">Total Earnings</Text>
              <Text className="text-2xl font-bold mt-1"><Text className="text-gray-800">$</Text>10,000</Text> {/* Changed to $ */}
            </View>
            <View>
              <Text className="text-gray-500 text-sm">Total Product</Text>
              <Text className="text-2xl font-bold mt-1">44</Text>
            </View>
          </View>

          {/* Invoice & Pending Card */}
          <View className="bg-white rounded-lg shadow-sm p-5 mb-4 w-[48%] border border-gray-100">
            <View className="mb-4">
              <Text className="text-gray-500 text-sm">Total Invoice</Text>
              <Text className="text-2xl font-bold mt-1">20</Text>
            </View>
            <View>
              <Text className="text-gray-500 text-sm">Pending Payment</Text>
              <Text className="text-2xl font-bold mt-1"><Text className="text-gray-800">$</Text>2,040</Text> {/* Changed to $ */}
            </View>
          </View>
        </View>

        {/* Recent Invoice Section */}
        <View className="mb-8">
          <View className="space-y-4">
            {/* Pending Invoice */}
            {/* <View className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
              <View className="flex-row justify-between mb-3">
                <Text className="font-bold text-gray-800">Invoice ID: #123456</Text>
                <Text className="text-red-500 font-bold">Pending</Text>
              </View>
              <Text className="text-gray-600 mb-4">One Nike Air Zoom Two Zara Polo Round Neck</Text>
              <View className="flex-row justify-between items-center">
                <Text className="text-xl font-bold text-gray-800">¥7,000.00</Text>
                <TouchableOpacity className="flex-row items-center">
                  <Text className="text-blue-600 mr-1 text-sm">View Details</Text>
                  <MaterialIcons name="arrow-forward" size={16} color="#2563eb" />
                </TouchableOpacity>
              </View>
            </View> */}

            {/* Paid Invoice */}
            {/* <View className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
              <View className="flex-row justify-between mb-3">
                <Text className="font-bold text-gray-800">Invoice ID: #123456</Text>
                <Text className="text-green-500 font-bold">Paid</Text>
              </View>
              <Text className="text-gray-600 mb-4">Two Adidas Ultraboost Three H&M Jeans</Text>
              <View className="flex-row justify-between items-center">
                <Text className="text-xl font-bold text-gray-800">¥12,500.00</Text>
                <TouchableOpacity className="flex-row items-center">
                  <Text className="text-blue-600 mr-1 text-sm">View Details</Text>
                  <MaterialIcons name="arrow-forward" size={16} color="#2563eb" />
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white shadow-lg flex-row justify-around py-3 border-t border-gray-200">
        <TouchableOpacity className="items-center">
          <MaterialCommunityIcons name="home" size={28} color="#2563eb" />
          <Text className="text-blue-600 text-xs mt-1">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className="items-center" 
          onPress={() => router.push('/products')}
        >
          <MaterialCommunityIcons name="package-variant" size={28} color="#6b7280" />
          <Text className="text-gray-500 text-xs mt-1">Products</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MaterialIcons name="email" size={28} color="#6b7280" />
          <Text className="text-gray-500 text-xs mt-1">Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <FontAwesome name="file-text-o" size={24} color="#6b7280" />
          <Text className="text-gray-500 text-xs mt-1">Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {router.push('/sellerProfile')}} className="items-center">
          <Ionicons name="person" size={24} color="#6b7280" />
          <Text className="text-gray-500 text-xs mt-1">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SellerDashboard;
