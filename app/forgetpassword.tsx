import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleResetPassword = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    setLoading(true);
    
    try {
      // Replace with your actual password reset API call
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      setEmailSent(true);
    } catch (error) {
      Alert.alert("Error", "Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-50 justify-center p-8">
      {/* Header with lock icon */}
      <View className="items-center mb-8">
        <Ionicons name="lock-closed" size={48} color="#3b82f6" />
        <Text className="text-3xl font-bold text-gray-800 mt-4">Forgot Password?</Text>
        <Text className="text-gray-500 mt-2 text-center">
          {emailSent 
            ? "Check your email for the reset link"
            : "Enter your email to reset your password"}
        </Text>
      </View>

      {!emailSent ? (
        <View>
          {/* Email Input */}
          <View className="mb-6">
            <TextInput
              className="bg-white p-4 rounded-lg border border-gray-200 mb-6"
              placeholder="your@email.com"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
              editable={!loading}
            />

            {/* Reset Button */}
            <Pressable 
              className={`p-4 rounded-lg items-center ${loading ? "bg-blue-400" : "bg-blue-500"}`}
              onPress={handleResetPassword}
              disabled={loading}
              android_ripple={{ color: '#1e40af' }}
            >
              <Text className="text-white font-bold text-lg">
                {loading ? "Sending..." : "Send Reset Link"}
              </Text>
            </Pressable>
            </View>
        </View> 
        ) : (
        /* Success State */
        <View className="items-center mb-6">
          <Ionicons name="checkmark-circle" size={64} color="#10b981" className="mb-4" />
          <Pressable 
            className="p-4 rounded-lg items-center w-full bg-blue-500"
            onPress={() => router.back()}
            android_ripple={{ color: '#1e40af' }}
          >
            <Text className="text-white font-bold text-lg">Back to Login</Text>
          </Pressable>
        </View>
      )}

      {!emailSent && (
        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-500">Remember your password? </Text>
          <Pressable onPress={() => router.push("/")}>
            <Text className="text-blue-500 font-semibold">Login</Text>
          </Pressable>
        </View>
      )}

      {/* Help Text */}
      <Text className="text-center text-gray-400 text-xs mt-8">
        If you don't see the email, check your spam folder
      </Text>
    </View>
  );
}