import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);

    // Determine userType based on the email domain or other logic
    //  load user type from , asyncStorage 
    let  userType = "";

    const userData = await AsyncStorage.getItem("user");
      if (userData) {
        // Parse the JSON string to get the user data
        const parsedUserData = JSON.parse(userData);
        userType = parsedUserData.userType;
      }

     

    try {
      const response = await fetch('http://192.168.140.171:8000/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, userType }), // Pass userType to backend
      });

      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        console.error("Raw server response:", responseText);
        throw new Error("Server error: " + responseText);
      }

      if (result.success) {
        // // Store user data in AsyncStorage
        // const userData = {
        //   name: result.name,
        //   email: result.email,
        //   userType: result.user_type, // Ensure this matches the API response field
        // };

        // await AsyncStorage.setItem("user", JSON.stringify(userData));

        // Redirect user based on their userType
        if (result.user_type === 'seller') {
          router.replace('/sellerHome'); // Redirect to seller home
        } else {
          router.replace('/home'); // Redirect to buyer home
        }
      } else {
        Alert.alert("Error", result.message || "Login failed");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-50 justify-center p-8">
      {/* Logo/App Title */}
      <View className="items-center mb-12">
        <Image
          source={require('../assets/images/carrot.png')}
          className="w-24 h-28 mb-8"
        />
        <Text className="text-3xl font-bold text-gray-800">Grocery Glide</Text>
        <Text className="text-gray-500 mt-2">Sign in to continue</Text>
      </View>

      {/* Login Form */}
      <View className="mb-6">
        <Text className="text-gray-700 mb-2">Email</Text>
        <TextInput
          className="bg-white p-4 rounded-lg border border-gray-200 mb-4"
          placeholder="Enter your email"
          placeholderTextColor="#9ca3af"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          editable={!loading}
        />

        <Text className="text-gray-700 mb-2">Password</Text>
        <TextInput
          className="bg-white p-4 rounded-lg border border-gray-200"
          placeholder="Enter your password"
          placeholderTextColor="#9ca3af"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!loading}
        />

        <Pressable 
          onPress={() => router.push('/forgetpassword')} 
          className="self-end mt-2"
          disabled={loading}
        >
          <Text className="text-blue-500">Forgot password?</Text>
        </Pressable>
      </View>

      {/* Login Button */}
      <Pressable 
        className={`bg-blue-500 p-4 rounded-lg items-center mb-6 ${loading ? 'opacity-70' : ''}`}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text className="text-white font-bold text-lg">
          {loading ? "Signing In..." : "Sign In"}
        </Text>
      </Pressable>

      {/* Sign Up Link */}
      <View className="flex-row justify-center">
        <Text className="text-gray-500">Don't have an account? </Text>
        <Pressable onPress={()=>{router.push('/signup')}} disabled={loading}>
          <Text className="text-blue-500 font-semibold">Sign Up</Text>
        </Pressable>
      </View>

      {/* Social Login */}
      <View className="mt-8">
        <Text className="text-center text-gray-500 mb-4">Or continue with</Text>
        <View className="flex-row justify-center space-x-4">
          <Pressable 
            className="bg-white p-3 rounded-full border border-gray-200"
            disabled={loading}
          >
            <Text>Google</Text>
          </Pressable>
          <Pressable 
            className="bg-white p-3 rounded-full border border-gray-200"
            disabled={loading}
          >
            <Text>Apple</Text>
          </Pressable>
          <Pressable 
            className="bg-white p-3 rounded-full border border-gray-200"
            disabled={loading}
          >
            <Text>Facebook</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}