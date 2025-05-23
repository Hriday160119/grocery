import { Stack } from "expo-router";
import "../global.css";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
        <Stack.Screen 
        name="signup" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
      <Stack.Screen 
        name="forgetpassword" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
       <Stack.Screen 
        name="home" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
       <Stack.Screen 
        name="explore" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
       <Stack.Screen 
        name="favourite" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
       <Stack.Screen 
        name="cart" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
       <Stack.Screen 
        name="account" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
       <Stack.Screen 
        name="sellerHome" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
      <Stack.Screen 
        name="products" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
      <Stack.Screen 
        name="upload-products" 
        options={{ headerShown: false }}  // Correct way to hide header
      />
    </Stack>

    //   <Stack.Screen 
    //     name="sellerProfile" 
    //     options={{ headerShown: false }}  // Correct way to hide header
    //   />
    // </Stack>
    
    
  );
}