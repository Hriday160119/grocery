// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import React, { useState } from 'react';
// import { Alert, Text, TouchableOpacity } from 'react-native';
// import { initiatePayment } from '../api/sslCommerz';

// type RootStackParamList = {
//   PaymentMethods: undefined;
//   PaymentConfirmation: { paymentData: any };
//   PaymentWebView: { paymentUrl: string };
// };

// type PaymentMethodsScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'PaymentMethods'
// >;

// const PaymentMethods = () => {
//   const navigation = useNavigation<PaymentMethodsScreenNavigationProp>();
//   const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const paymentMethods = [
//     // Your existing payment methods array
//   ];

//   const handlePayment = async () => {
//     if (!selectedMethod) return;

//     setIsProcessing(true);
    
//     try {
//       // Map your selected method to SSLCommerz method
//       let sslMethod = 'all';
//       if (selectedMethod === 'bKash') sslMethod = 'bkash';
//       if (selectedMethod === 'Nagad') sslMethod = 'nagad';
//       if (selectedMethod === 'Rocket') sslMethod = 'dbbl_rocket';
//       if (selectedMethod === 'bank') sslMethod = 'visa';

//       const paymentData = {
//         amount: 100, // Your amount
//         currency: 'BDT',
//         payment_method: sslMethod,
//         customer_info: {
//           name: 'John Doe', // Get from user
//           email: 'john@example.com', // Get from user
//           phone: '01712345678', // Get from user
//           address: '123 Main St',
//           city: 'Dhaka',
//           postcode: '1200',
//           country: 'Bangladesh'
//         }
//       };

//       const response = await initiatePayment(paymentData);
      
//       if (response.success) {
//         navigation.navigate('PaymentWebView', { 
//           paymentUrl: response.payment_url 
//         });
//       } else {
//         Alert.alert('Error', 'Failed to initiate payment');
//       }
//     } catch (error) {
//       console.error('Payment error:', error);
//       Alert.alert('Error', 'Something went wrong with the payment');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     // Your existing JSX
//     // Update the payButton onPress to call handlePayment
//     <TouchableOpacity
//       style={[
//         styles.payButton,
//         (!selectedMethod || isProcessing) && styles.payButtonDisabled
//       ]}
//       disabled={!selectedMethod || isProcessing}
//       onPress={handlePayment}
//     >
//       <Text style={styles.payButtonText}>
//         {isProcessing ? 'Processing...' : 
//          selectedMethod ? 'Continue to Payment' : 'Select Payment Method'}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// // Your existing styles