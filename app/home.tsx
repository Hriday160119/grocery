import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const handleExplore = () => {
    router.push('/explore');
  };

  const handleShop = () => {
    router.push('/home');
  };

  const handleCart = () => {
    router.push('/cart');
  };

  const handleFavourite = () => {
    router.push('/favourite');
  };

  const handleAccount = () => {
    router.push('/account');
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header with Location */}
      <View className="pt-12 px-4">
        <View className="flex-row items-center">
          <Ionicons name="location-sharp" size={20} color="#4b5563" />
          <Text className="ml-2 text-gray-600">Dhaka, Bonasere</Text>
        </View>
        
        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3 mt-4">
          <MaterialIcons name="search" size={24} color="#9ca3af" />
          <TextInput
            placeholder="Search Store"
            className="ml-2 flex-1 text-gray-700"
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 px-4 mt-4" showsVerticalScrollIndicator={false}>
        {/* Fresh Vegetables Banner */}
        <View className="bg-green-100 rounded-xl p-4 mb-6">
          <Text className="text-lg font-bold text-gray-800">Fresh Vegetables</Text>
          <Text className="text-gray-600 mt-1">Get Up To 40% OFF</Text>
          <Text className="text-green-600 font-bold mt-2">Exclusive Offer</Text>
          <Pressable className="self-end mt-2">
            <Text className="text-green-600">See all</Text>
          </Pressable>
        </View>

        {/* Products Section */}
        <View className="mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Best Selling</Text>
            <Pressable>
              <Text className="text-green-600">See all</Text>
            </Pressable>
          </View>

          <View className="flex-row justify-between">
            {/* Product 1 */}
            <View className="bg-gray-100 rounded-lg p-4 w-[48%]">
              <Image 
                source={require('../assets/images/ba.png')} 
                className="w-full h-32 mb-2"
                resizeMode="contain"
              />
              <Text className="font-bold">Organic Bananas</Text>
              <Text className="text-gray-500 text-sm">7pcs, Priceg</Text>
              <Text className="font-bold mt-2">$4.99</Text>
            </View>

            {/* Product 2 */}
            <View className="bg-gray-100 rounded-lg p-4 w-[48%]">
              <Image 
                source={require('../assets/images/red_apple.png')} 
                className="w-full h-32 mb-2"
                resizeMode="contain"
              />
              <Text className="font-bold">Red Apple</Text>
              <Text className="text-gray-500 text-sm">1kg, Priceg</Text>
              <Text className="font-bold mt-2">$4.99</Text>
            </View>
          </View>
          
          <View className="flex-row justify-between mt-4">
            {/* Product 3 */}
            <View className="bg-gray-100 rounded-lg p-4 w-[48%]">
              <Image 
                source={require('../assets/images/beef_bone.png')} 
                className="w-full h-32 mb-2"
                resizeMode="contain"
              />
              <Text className="font-bold">Beef</Text>
              <Text className="text-gray-500 text-sm">7pcs, Priceg</Text>
              <Text className="font-bold mt-2">$4.99</Text>
            </View>

            {/* Product 4 */}
            <View className="bg-gray-100 rounded-lg p-4 w-[48%]">
              <Image 
                source={require('../assets/images/rice.png')} 
                className="w-full h-32 mb-2"
                resizeMode="contain"
              />
              <Text className="font-bold">Rice</Text>
              <Text className="text-gray-500 text-sm">1kg, Priceg</Text>
              <Text className="font-bold mt-2">$4.99</Text>
            </View>
          </View>
          
          <View className="flex-row justify-between mt-4">
            {/* Product 5 */}
            <View className="bg-gray-100 rounded-lg p-4 w-[48%]">
              <Image 
                source={require('../assets/images/banana.png')} 
                className="w-full h-32 mb-2"
                resizeMode="contain"
              />
              <Text className="font-bold">Organic Bananas</Text>
              <Text className="text-gray-500 text-sm">7pcs, Priceg</Text>
              <Text className="font-bold mt-2">$4.99</Text>
            </View>

            {/* Product 6 */}
            <View className="bg-gray-100 rounded-lg p-4 w-[48%]">
              <Image 
                source={require('../assets/images/rice.png')} 
                className="w-full h-32 mb-2"
                resizeMode="contain"
              />
              <Text className="font-bold">Red Apple</Text>
              <Text className="text-gray-500 text-sm">1kg, Priceg</Text>
              <Text className="font-bold mt-2">$4.99</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center py-4 border-t border-gray-200">
        <Pressable className="items-center" onPress={handleShop}>
          <Ionicons name="home" size={24} color="#10b981" />
          <Text className="text-green-600 mt-1">Shop</Text>
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