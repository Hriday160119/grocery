import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";

// Define all valid routes in your app
const appRoutes = {
  home: "/home",
  explore: "/explore",
  cart: "/cart",
  favourite: "/favourite",
  account: "/account",
  personalInfo: "/personal-info",
  deliveryAddress: "/delivery-address",
  paymentMethods: "/payment-methods",
  orders: "/orders",
  settings: "/settings",
  helpCenter: "/help-center",
  login: "/login",
} as const;

type AppRoutes = keyof typeof appRoutes;
type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

export default function Account() {
  const router = useRouter();

  // User data
  const user = {
    name: "Shariar Islam Sajid",
    email: "shariarislamsajid@gmail.com",
    avatar: require('../assets/images/Sajid.jpg'),
    joinedDate: "Member since June 2023",
  };

  // Account options with typed routes
  const accountOptions: { icon: IoniconsName; name: string; route?: AppRoutes }[] = [
    { icon: "person-outline", name: "Personal Information", route: "personalInfo" },
    { icon: "location-outline", name: "Delivery Address", route: "deliveryAddress" },
    { icon: "card-outline", name: "Payment Methods", route: "paymentMethods" },
    { icon: "document-text-outline", name: "My Orders", route: "orders" },
    { icon: "heart-outline", name: "My Favorites", route: "favourite" },
    { icon: "settings-outline", name: "Settings", route: "settings" },
    { icon: "help-circle-outline", name: "Help Center", route: "helpCenter" },
    { icon: "log-out-outline", name: "Sign Out" },
  ];

  // Navigation handler using route objects
  const navigateTo = (route: AppRoutes) => {
    router.push({ pathname: appRoutes[route] });
  };

const handleSignOut = async () => {
  try {
    // Clear all data from AsyncStorage
    await AsyncStorage.clear();

    // Redirect to the login or home screen
    router.push('/'); // Redirect to login or home screen
  } catch (error) {
    console.error("Error during sign out:", error);
  }
};

  const handleOptionPress = (option: { name: string; route?: AppRoutes }) => {
    if (option.name === "Sign Out") {
      Alert.alert(
        "Sign Out",
        "Are you sure you want to sign out?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Sign Out", onPress: () => {handleSignOut()} }
        ]
      );
    } else if (option.route) {
      navigateTo(option.route);
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-12 px-4 pb-4">
        <Text className="text-2xl font-bold">Seller Profile</Text>
      </View>

      {/* User Profile */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="items-center mb-6">
          <Image
            source={user.avatar}
            className="w-24 h-24 rounded-full mb-3"
          />
          <Text className="text-xl font-bold">{user.name}</Text>
          <Text className="text-gray-500">{user.email}</Text>
          <Text className="text-gray-400 text-sm mt-1">{user.joinedDate}</Text>
        </View>

        {/* Account Options */}
        <View className="mb-8">
          {accountOptions.map((option, index) => (
            <Pressable
              key={index}
              className="flex-row items-center py-4 border-b border-gray-100 active:bg-gray-50"
              onPress={() => handleOptionPress(option)}
            >
              <Ionicons
                name={option.icon}
                size={22}
                color="#4b5563"
                className="mr-4"
              />
              <Text className="flex-1 text-gray-800">{option.name}</Text>
              <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center py-4 border-t border-gray-200 bg-white">
        <Pressable className="items-center" onPress={() => navigateTo("home")}>
          <Ionicons name="home-outline" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Shop</Text>
        </Pressable>
        <Pressable className="items-center" onPress={() => navigateTo("explore")}>
          <Ionicons name="compass-outline" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Explore</Text>
        </Pressable>
        <Pressable className="items-center" onPress={() => navigateTo("cart")}>
          <Ionicons name="cart-outline" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Cart</Text>
        </Pressable>
        <Pressable className="items-center" onPress={() => navigateTo("favourite")}>
          <Ionicons name="heart-outline" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Favourite</Text>
        </Pressable>
        <Pressable className="items-center" onPress={() => navigateTo("account")}>
          <Ionicons name="person" size={24} color="#10b981" />
          <Text className="text-green-600 mt-1">Account</Text>
        </Pressable>
      </View>
    </View>
  );
}