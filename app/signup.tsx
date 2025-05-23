import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "buyer", // Default to buyer
  });
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords don't match");
      return;
    }

    if (!form.name || !form.email || !form.password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://192.168.140.171:8000/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword,
          userType: form.userType,
        }),
      });

      const result = await response.json();

      if (result.success) {
        
        
        const userData = {
          name: result.user.name,
          email: result.user.email,
          userType: result.user.userType,
        };
        await AsyncStorage.setItem("user", JSON.stringify(userData)); //


        console.log(result.user);

        Alert.alert("Success", result.message, [
          { text: "OK", onPress: () => router.push("/") },
        ]);
      } else {
        Alert.alert("Error", result.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      Alert.alert("Error", "An error occurred during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    router.push("/");
  };

  const handleUserTypeChange = (type: string) => {
    setForm({ ...form, userType: type });
  };

  return (
    <View className="flex-1 bg-gray-50 justify-center p-8">
      {/* Header */}
      <View className="items-center mb-8">
        <Text className="text-3xl font-bold text-gray-800">Create Account</Text>
        <Text className="text-gray-500 mt-2">Join us today!</Text>
      </View>

      {/* User Type Selection */}
      <View className="mb-6">
        <Text className="text-gray-700 mb-2">I want to join as a:</Text>
        <View className="flex-row justify-between">
          <Pressable
            className={`flex-1 p-4 rounded-lg mr-2 items-center border-2 ${
              form.userType === "buyer"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white"
            }`}
            onPress={() => handleUserTypeChange("buyer")}
          >
            <Text
              className={`font-medium ${
                form.userType === "buyer" ? "text-blue-500" : "text-gray-700"
              }`}
            >
              Buyer
            </Text>
          </Pressable>
          <Pressable
            className={`flex-1 p-4 rounded-lg ml-2 items-center border-2 ${
              form.userType === "seller"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white"
            }`}
            onPress={() => handleUserTypeChange("seller")}
          >
            <Text
              className={`font-medium ${
                form.userType === "seller" ? "text-blue-500" : "text-gray-700"
              }`}
            >
              Seller
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Signup Form */}
      <View className="mb-6">
        <Text className="text-gray-700 mb-2">Full Name</Text>
        <TextInput
          className="bg-white p-4 rounded-lg border border-gray-200 mb-4"
          placeholder="John Doe"
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />

        <Text className="text-gray-700 mb-2">Email</Text>
        <TextInput
          className="bg-white p-4 rounded-lg border border-gray-200 mb-4"
          placeholder="your@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
        />

        <Text className="text-gray-700 mb-2">Password</Text>
        <TextInput
          className="bg-white p-4 rounded-lg border border-gray-200 mb-4"
          placeholder="••••••••"
          secureTextEntry
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
        />

        <Text className="text-gray-700 mb-2">Confirm Password</Text>
        <TextInput
          className="bg-white p-4 rounded-lg border border-gray-200"
          placeholder="••••••••"
          secureTextEntry
          value={form.confirmPassword}
          onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
        />
      </View>

      {/* Signup Button */}
      <Pressable
        className={`p-4 rounded-lg items-center mb-6 ${loading ? "bg-blue-400" : "bg-blue-500"}`}
        onPress={handleSignup}
        disabled={loading}
      >
        <Text className="text-white font-bold text-lg">
          {loading ? "Creating Account..." : "Sign Up"}
        </Text>
      </Pressable>

      {/* Login Link */}
      <View className="flex-row justify-center">
        <Text className="text-gray-500">Already have an account? </Text>
        <Pressable onPress={handleLogin}>
          <Text className="text-blue-500 font-semibold">Login</Text>
        </Pressable>
      </View>

      {/* Terms */}
      <Text className="text-center text-gray-400 text-xs mt-8">
        By signing up, you agree to our Terms and Privacy Policy
      </Text>
    </View>
  );
}
