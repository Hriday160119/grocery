import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function Explore() {
  const router = useRouter();

  // Navigation handlers
  const handleHome = () => router.push('/home');
  const handleExplore = () => router.push('/explore');
  const handleCart = () => router.push('/cart');
  const handleFavourite = () => router.push('/favourite');
  const handleAccount = () => router.push('/account');

  // Sample product data
  const products = [
    { id: 1, name: "Organic Bananas", quantity: "7pcs, Priceg", price: "$4.99", image: require('../assets/images/banana.png') },
    { id: 2, name: "Red Apple", quantity: "1kg, Priceg", price: "$4.99", image: require('../assets/images/red_apple.png') },
    { id: 3, name: "Organic Bananas", quantity: "7pcs, Priceg", price: "$4.99", image: require('../assets/images/banana.png') },
    { id: 4, name: "Red Apple", quantity: "1kg, Priceg", price: "$4.99", image: require('../assets/images/red_apple.png') },
    { id: 5, name: "Organic Bananas", quantity: "7pcs, Priceg", price: "$4.99", image: require('../assets/images/banana.png') },
    { id: 6, name: "Red Apple", quantity: "1kg, Priceg", price: "$4.99", image: require('../assets/images/banana.png') },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header with Search */}
      <View className="pt-12 px-4 bg-white">
        <View className="flex-row items-center mb-4">
          <Ionicons name="location-sharp" size={20} color="#4b5563" />
          <Text className="ml-2 text-gray-600">Dhaka, Bonasere</Text>
        </View>
        
        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3 mb-4">
          <MaterialIcons name="search" size={24} color="#9ca3af" />
          <TextInput
            placeholder="Search Store"
            className="ml-2 flex-1 text-gray-700"
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      {/* Product Grid */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap justify-between">
          {products.map((product) => (
            <Pressable 
              key={product.id} 
              className="w-[48%] bg-gray-100 rounded-lg p-3 mb-4"
              onPress={() => console.log("Pressed", product.name)}
            >
              <Image 
                source={product.image} 
                className="w-full h-32 mb-2"
                resizeMode="contain"
              />
              <Text className="font-bold text-gray-800">{product.name}</Text>
              <Text className="text-gray-500 text-sm">{product.quantity}</Text>
              <Text className="font-bold mt-1 text-gray-800">{product.price}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center py-4 border-t border-gray-200 bg-white">
        <Pressable className="items-center" onPress={handleHome}>
          <Ionicons name="home" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Shop</Text>
        </Pressable>
        <Pressable className="items-center" onPress={handleExplore}>
          <Ionicons name="compass" size={24} color="#10b981" />
          <Text className="text-green-600 mt-1">Explore</Text>
        </Pressable>
        <Pressable className="items-center" onPress={handleCart}>
          <Ionicons name="cart" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Cart</Text>
        </Pressable>
        <Pressable className="items-center" onPress={handleFavourite}>
          <Ionicons name="heart" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Favourite</Text>
        </Pressable>
        <Pressable className="items-center" onPress={handleAccount}>
          <Ionicons name="person" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Account</Text>
        </Pressable>
      </View>
    </View>
  );
}