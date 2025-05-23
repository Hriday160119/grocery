import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Define your stack param list types
type RootStackParamList = {
  PaymentMethods: undefined;
  PaymentConfirmation: undefined;
  // Add other screens in your app here
};

// Define the navigation prop type for this specific screen
type PaymentMethodsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PaymentMethods'
>;

const PaymentMethods = () => {
  const navigation = useNavigation<PaymentMethodsScreenNavigationProp>();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentMethods = [
    {
      id: 'bKash',
      name: 'bKash',
      icon: require('../assets/images/bkash.png'), // Update with your actual icon
      description: 'Pay with bKash'
    },
    {
      id: 'Nagad',
      name: 'Nagad',
      icon: require('../assets/images/nagad.png'), // Update with your actual icon
      description: 'Pay with Nagad'
    },
    {
      id: 'Rocket',
      name: 'Rocket',
      icon: require('../assets/images/rocket.png'), // Update with your actual icon
      description: 'Pay with Rocket'
    },
    {
      id: 'googlepay',
      name: 'Google Pay',
      icon: require('../assets/images/GooglePay.png'), // Update with your actual icon
      description: 'Pay securely with Google Pay'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: require('../assets/images/visa.jpg'), // Update with your actual icon
      description: 'Direct transfer from your bank'
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Payment Methods</Text>
        <Text style={styles.subtitle}>Choose your preferred payment method</Text>
        
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.methodCard,
              selectedMethod === method.id && styles.selectedMethodCard
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <View style={styles.methodInfo}>
              <Image source={method.icon} style={styles.methodIcon} />
              <View style={styles.methodTextContainer}>
                <Text style={styles.methodName}>{method.name}</Text>
                <Text style={styles.methodDescription}>{method.description}</Text>
              </View>
            </View>
            <View style={[
              styles.radioButton,
              selectedMethod === method.id && styles.radioButtonSelected
            ]}>
              {selectedMethod === method.id && <View style={styles.radioButtonInner} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.payButton,
          !selectedMethod && styles.payButtonDisabled
        ]}
        disabled={!selectedMethod}
        onPress={() => navigation.navigate('PaymentConfirmation')}
      >
        <Text style={styles.payButtonText}>
          {selectedMethod ? 'Continue to Payment' : 'Select Payment Method'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1a1a1a'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24
  },
  methodCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  selectedMethodCard: {
    borderColor: '#4a90e2',
    backgroundColor: '#f0f7ff'
  },
  methodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  methodIcon: {
    width: 40,
    height: 40,
    marginRight: 16
  },
  methodTextContainer: {
    flex: 1
  },
  methodName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4
  },
  methodDescription: {
    fontSize: 14,
    color: '#777'
  },
  radioButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  radioButtonSelected: {
    borderColor: '#4a90e2'
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4a90e2'
  },
  payButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#4a90e2',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center'
  },
  payButtonDisabled: {
    backgroundColor: '#ccc'
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default PaymentMethods;