import { Feather } from '@expo/vector-icons'; // Make sure Feather is installed
import * as ImagePicker from 'expo-image-picker'; // Image picker import for selecting an image
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const UploadProduct = ({ productId }: { productId?: string }) => {
  const router = useRouter();

  const [productImage, setProductImage] = useState<string | null>(null);
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (productId) {
      // Fetch existing product data if productId is provided
      const existingProduct = getProductById(productId);
      setProductName(existingProduct.name);
      setSelectedCategory(existingProduct.category);
      setDescription(existingProduct.description);
      setPrice(existingProduct.price);
      setQuantity(existingProduct.quantity.toString());
    }
  }, [productId]);

  const handleSubmit = () => {
    if (productId) {
      // Update existing product
      updateProduct(productId, {
        productImage,
        productName,
        selectedCategory,
        description,
        price,
        quantity,
      });
    } else {
      // Add new product
      addProduct({
        productImage,
        productName,
        selectedCategory,
        description,
        price,
        quantity,
      });
    }

    router.back(); // Go back after saving the product
  };

  const pickImage = async () => {
    // Request permission to access media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted) {
      // Open image picker
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
      });

      // Check if the picker was not cancelled
      if (!pickerResult.cancelled) {
        const result = pickerResult as ImagePicker.ImagePickerSuccessResult; // Type assertion here
        setProductImage(result.uri); // Safely access the uri property
      }
    } else {
      console.log("Permission to access media library denied.");
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold mb-6">{productId ? 'Update Product' : 'Upload Product'}</Text>

      {/* Product Image Upload */}
      <View className="mb-6">
        <Text className="text-sm font-medium mb-2">
          Product Image <Text className="text-red-500">*</Text>
        </Text>
        <TouchableOpacity
          onPress={pickImage}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 items-center justify-center"
        >
          {productImage ? (
            <Image source={{ uri: productImage }} className="w-full h-40 rounded-lg" />
          ) : (
            <>
              <Feather name="upload" size={24} color="#6b7280" />
              <Text className="text-gray-500 mt-2">Select file</Text>
              <Text className="text-gray-400 text-xs mt-1">
                Supported formats: JPEG, PNG only
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>

      {/* Other form fields for product name, category, description, price, and quantity */}
      <View className="mb-4">
        <Text className="text-sm font-medium mb-2">Product Name</Text>
        <TextInput
          value={productName}
          onChangeText={setProductName}
          className="border-2 border-gray-300 rounded-lg p-3"
          placeholder="Enter product name"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-500 py-4 rounded-lg items-center"
      >
        <Text className="text-white font-medium">{productId ? 'Update Product' : 'Create Product'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const getProductById = (id: string) => {
  // Fetch product data by ID (simulating API call or local state)
  return {
    name: 'Sample Product',
    category: 'Electronics',
    description: 'Product Description',
    price: '10000',
    quantity: 20,
  };
};

const updateProduct = (id: string, productData: any) => {
  // Logic for updating a product
  console.log('Updating product with ID:', id, productData);
};

const addProduct = (productData: any) => {
  // Logic for adding a new product
  console.log('Adding new product:', productData);
};

export default UploadProduct;
