import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Cart() {
  const router = useRouter();

  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Organic Bananas",
      price: 4.99,
      quantity: 2,
      image: require('../assets/images/banana.png'),
    },
    {
      id: 2,
      name: "Red Apple",
      price: 4.99,
      quantity: 1,
      image: require('../assets/images/red_apple.png'),
    },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

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
        <Text className="text-2xl font-bold">My Cart</Text>
      </View>

      {/* Cart Items */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {cartItems.map((item) => (
          <View key={item.id} className="flex-row items-center mb-4 bg-gray-100 rounded-lg p-3">
            <Image 
              source={item.image} 
              className="w-20 h-20 mr-4"
              resizeMode="contain"
            />
            <View className="flex-1">
              <Text className="font-bold text-lg">{item.name}</Text>
              <Text className="text-gray-500">${item.price.toFixed(2)}</Text>
            </View>
            <View className="flex-row items-center">
              <Pressable className="bg-gray-200 rounded-full w-8 h-8 items-center justify-center">
                <Ionicons name="remove" size={16} color="black" />
              </Pressable>
              <Text className="mx-3">{item.quantity}</Text>
              <Pressable className="bg-gray-200 rounded-full w-8 h-8 items-center justify-center">
                <Ionicons name="add" size={16} color="black" />
              </Pressable>
            </View>
          </View>
        ))}

        {/* Order Summary */}
        <View className="mt-6 mb-8">
          <Text className="text-lg font-bold mb-4">Order Summary</Text>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Subtotal</Text>
            <Text>${subtotal.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Delivery Fee</Text>
            <Text>${deliveryFee.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between mb-4">
            <Text className="text-gray-600">Discount</Text>
            <Text className="text-green-600">-$0.00</Text>
          </View>
          <View className="border-t border-gray-200 pt-3 flex-row justify-between">
            <Text className="font-bold">Total</Text>
            <Text className="font-bold">${total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <Pressable 
          className="bg-green-600 py-4 rounded-lg items-center mb-6"
          onPress={() => console.log("Proceed to Checkout")}
        >
          <Text className="text-white font-bold text-lg">Proceed to Checkout</Text>
        </Pressable>
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
          <Ionicons name="cart" size={24} color="#10b981" />
          <Text className="text-green-600 mt-1">Cart</Text>
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