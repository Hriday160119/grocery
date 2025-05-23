import axios from 'axios';

const API_BASE_URL = 'http://your-backend-url:5000/api';

export const initiatePayment = async (data: {
  amount: number;
  currency?: string;
  payment_method: string;
  customer_info: {
    name: string;
    email: string;
    phone: string;
    address?: string;
    city?: string;
    postcode?: string;
    country?: string;
  };
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/payment/initiate`, data);
    return response.data;
  } catch (error) {
    console.error('Payment initiation error:', error);
    throw error;
  }
};

export const validatePayment = async (val_id: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/payment/validate`, { val_id });
    return response.data;
  } catch (error) {
    console.error('Payment validation error:', error);
    throw error;
  }
};