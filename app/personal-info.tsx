import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function PersonalInformation() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Hridwan Hasan",
    email: "hridwanhassan@gmail.com",
    phone: "+880 1234 567890",
    gender: "Male",
    dateOfBirth: "1990-01-01",
  });

  // Navigation handlers
  const handleBack = () => router.back();
  const handleSave = () => {
    setIsEditing(false);
    // Add your save logic here
    console.log("Saved:", user);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-12 px-4 pb-4 flex-row items-center">
        <Pressable onPress={handleBack} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#4b5563" />
        </Pressable>
        <Text className="text-xl font-bold">Personal Information</Text>
        {isEditing ? (
          <Pressable onPress={handleSave} className="ml-auto">
            <Text className="text-blue-500 font-medium">Save</Text>
          </Pressable>
        ) : (
          <Pressable onPress={() => setIsEditing(true)} className="ml-auto">
            <Text className="text-blue-500 font-medium">Edit</Text>
          </Pressable>
        )}
      </View>

      {/* Profile Picture */}
      <View className="items-center my-6">
        <View className="relative">
          <Image
            source={require('../assets/images/hriday.png')}
            className="w-32 h-32 rounded-full"
          />
          {isEditing && (
            <Pressable className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
              <Ionicons name="camera" size={20} color="white" />
            </Pressable>
          )}
        </View>
      </View>

      {/* Form */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-gray-500 mb-1">Full Name</Text>
          {isEditing ? (
            <TextInput
              value={user.name}
              onChangeText={(text) => setUser({...user, name: text})}
              className="bg-gray-100 p-3 rounded-lg"
            />
          ) : (
            <Text className="text-lg">{user.name}</Text>
          )}
        </View>

        <View className="mb-6">
          <Text className="text-gray-500 mb-1">Email</Text>
          {isEditing ? (
            <TextInput
              value={user.email}
              onChangeText={(text) => setUser({...user, email: text})}
              keyboardType="email-address"
              className="bg-gray-100 p-3 rounded-lg"
            />
          ) : (
            <Text className="text-lg">{user.email}</Text>
          )}
        </View>

        <View className="mb-6">
          <Text className="text-gray-500 mb-1">Phone Number</Text>
          {isEditing ? (
            <TextInput
              value={user.phone}
              onChangeText={(text) => setUser({...user, phone: text})}
              keyboardType="phone-pad"
              className="bg-gray-100 p-3 rounded-lg"
            />
          ) : (
            <Text className="text-lg">{user.phone}</Text>
          )}
        </View>

        <View className="mb-6">
          <Text className="text-gray-500 mb-1">Gender</Text>
          {isEditing ? (
            <View className="flex-row space-x-4">
              <Pressable
                onPress={() => setUser({...user, gender: "Male"})}
                className={`px-4 py-2 rounded-lg ${user.gender === "Male" ? "bg-blue-100 border border-blue-500" : "bg-gray-100"}`}
              >
                <Text className={user.gender === "Male" ? "text-blue-500" : "text-gray-800"}>Male</Text>
              </Pressable>
              <Pressable
                onPress={() => setUser({...user, gender: "Female"})}
                className={`px-4 py-2 rounded-lg ${user.gender === "Female" ? "bg-blue-100 border border-blue-500" : "bg-gray-100"}`}
              >
                <Text className={user.gender === "Female" ? "text-blue-500" : "text-gray-800"}>Female</Text>
              </Pressable>
            </View>
          ) : (
            <Text className="text-lg">{user.gender}</Text>
          )}
        </View>

        <View className="mb-6">
          <Text className="text-gray-500 mb-1">Date of Birth</Text>
          {isEditing ? (
            <TextInput
              value={user.dateOfBirth}
              onChangeText={(text) => setUser({...user, dateOfBirth: text})}
              placeholder="YYYY-MM-DD"
              className="bg-gray-100 p-3 rounded-lg"
            />
          ) : (
            <Text className="text-lg">{user.dateOfBirth}</Text>
          )}
        </View>
      </ScrollView>

      {/* Bottom Navigation (same as account page) */}
      <View className="flex-row justify-around items-center py-4 border-t border-gray-200 bg-white">
        <Pressable className="items-center" onPress={() => router.push('/home')}>
          <Ionicons name="home-outline" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Shop</Text>
        </Pressable>
        <Pressable className="items-center" onPress={() => router.push('/explore')}>
          <Ionicons name="compass-outline" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Explore</Text>
        </Pressable>
        <Pressable className="items-center" onPress={() => router.push('/cart')}>
          <Ionicons name="cart-outline" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Cart</Text>
        </Pressable>
        <Pressable className="items-center" onPress={() => router.push('/favourite')}>
          <Ionicons name="heart-outline" size={24} color="#9ca3af" />
          <Text className="text-gray-500 mt-1">Favourite</Text>
        </Pressable>
        <Pressable className="items-center" onPress={() => router.push('/account')}>
          <Ionicons name="person" size={24} color="#10b981" />
          <Text className="text-green-600 mt-1">Account</Text>
        </Pressable>
      </View>
    </View>
  );
}