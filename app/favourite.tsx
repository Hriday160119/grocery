import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Favourite() {
  const router = useRouter();

  // Sample favorite items
  const favoriteItems = [
    {
      id: 1,
      name: "Organic Bananas",
      price: 4.99,
      image: require('../assets/images/banana.png'),
      inStock: true,
    },
    {
      id: 2,
      name: "Red Apple",
      price: 4.99,
      image: require('../assets/images/red_apple.png'),
      inStock: false,
    },
    {
      id: 3,
      name: "Fresh Carrots",
      price: 2.49,
      image: require('../assets/images/carrot_color.png'),
      inStock: true,
    },
  ];

  // Navigation handlers
  const handleHome = () => router.push('/home');
  const handleExplore = () => router.push('/explore');
  const handleCart = () => router.push('/cart');
  const handleFavourite = () => router.push('/favourite');
  const handleAccount = () => router.push('/account');

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-12 px-4 pb-4">
        <Text className="text-2xl font-bold">Your Favorites</Text>
      </View>

      {/* Favorite Items */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {favoriteItems.map((item) => (
          <View key={item.id} className="flex-row items-center mb-4 bg-gray-100 rounded-lg p-3">
            <Image 
              source={item.image} 
              className="w-20 h-20 mr-4"
              resizeMode="contain"
            />
            <View className="flex-1">
              <Text className="font-bold text-lg">{item.name}</Text>
              <Text className="text-gray-500">${item.price.toFixed(2)}</Text>
              {!item.inStock && (
                <Text className="text-red-500 text-sm mt-1">Out of Stock</Text>
              )}
            </View>
            <View className="flex-row items-center space-x-3">
              <Pressable className="p-2">
                <Ionicons name="heart" size={24} color="#ef4444" />
              </Pressable>
              <Pressable 
                className={`p-2 rounded-full ${item.inStock ? 'bg-green-500' : 'bg-gray-300'}`}
                disabled={!item.inStock}
              >
                <Ionicons name="cart-outline" size={20} color="white" />
              </Pressable>
            </View>
          </View>
        ))}

        {/* Empty State (uncomment if needed) */}
        {/* {favoriteItems.length === 0 && (
          <View className="items-center justify-center mt-20">
            <Ionicons name="heart-outline" size={60} color="#d1d5db" />
            <Text className="text-gray-500 mt-4 text-lg">No favorites yet</Text>
            <Text className="text-gray-400 mt-2 text-center">
              Tap the heart icon on products to add them here
            </Text>
          </View>
        )} */}
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center py-4 border-t border-gray-200 bg-white">
        <Pressable className="items-center" onPress={handleHome}>
          <Ionicons name="home" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Shop</Text>
        </Pressable>
        <Pressable className="items-center" onPress={handleExplore}>
          <Ionicons name="compass" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Explore</Text>
        </Pressable>
        <Pressable className="items-center" onPress={handleCart}>
          <Ionicons name="cart" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Cart</Text>
        </Pressable>
        <Pressable className="items-center" onPress={handleFavourite}>
          <Ionicons name="heart" size={24} color="#10b981" />
          <Text className="text-green-600 mt-1">Favourite</Text>
        </Pressable>
        <Pressable className="items-center" onPress={handleAccount}>
          <Ionicons name="person" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Account</Text>
        </Pressable>
      </View>
    </View>
  );
}