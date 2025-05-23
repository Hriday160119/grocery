import { Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Help categories
  const categories = [
    { id: 'delivery', name: 'Delivery', icon: 'local-shipping' },
    { id: 'payments', name: 'Payments', icon: 'payment' },
    { id: 'account', name: 'Account', icon: 'account-circle' },
    { id: 'returns', name: 'Returns & Refunds', icon: 'assignment-return' },
    { id: 'products', name: 'Products', icon: 'shopping-basket' },
    { id: 'promotions', name: 'Promotions', icon: 'local-offer' },
  ];

  // Sample FAQs
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order in the 'My Orders' section of the app. We'll also send you SMS updates with delivery status.",
      category: 'delivery'
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery for some locations.",
      category: 'payments'
    },
    {
      question: "How do I change my delivery address?",
      answer: "You can update your delivery address in your account settings. For orders already placed, contact customer support immediately.",
      category: 'delivery'
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 7 days of delivery for most products. Perishable items cannot be returned unless damaged or spoiled.",
      category: 'returns'
    },
    {
      question: "How do I apply a promo code?",
      answer: "Add items to your cart, then enter the promo code in the checkout page before payment. Tap 'Apply' to see the discount.",
      category: 'promotions'
    },
  ];

  const filteredFaqs = faqs.filter(faq => 
    (activeCategory ? faq.category === activeCategory : true) &&
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCallSupport = () => {
    Linking.openURL('tel:+18005551234');
  };

  const handleEmailSupport = () => {
    Linking.openURL('mailto:support@groceryapp.com');
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Help Center</Text>
          <Text style={styles.headerSubtitle}>How can we help you today?</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search help articles..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Quick Help Categories */}
        <Text style={styles.sectionTitle}>Quick Help</Text>
        <View style={styles.categoriesContainer}>
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryCard,
                activeCategory === category.id && styles.activeCategoryCard
              ]}
              onPress={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              <MaterialIcons
                name={category.icon}
                size={24}
                color={activeCategory === category.id ? '#4CAF50' : '#666'}
              />
              <Text style={[
                styles.categoryText,
                activeCategory === category.id && styles.activeCategoryText
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* FAQs Section */}
        <Text style={styles.sectionTitle}>
          {activeCategory ? 
            `${categories.find(c => c.id === activeCategory)?.name} FAQs` : 
            'Popular Questions'
          }
        </Text>
        
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <TouchableOpacity
              key={index}
              style={styles.faqItem}
              onPress={() => toggleFaq(index)}
            >
              <View style={styles.faqQuestion}>
                <Text style={styles.faqQuestionText}>{faq.question}</Text>
                <Ionicons
                  name={expandedFaq === index ? 'chevron-up' : 'chevron-down'}
                  size={20}
                  color="#666"
                />
              </View>
              {expandedFaq === index && (
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              )}
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No results found</Text>
            <Text style={styles.noResultsSubtext}>Try a different search term or category</Text>
          </View>
        )}

        {/* Contact Support */}
        <Text style={styles.sectionTitle}>Still need help?</Text>
        <View style={styles.contactContainer}>
          <TouchableOpacity style={styles.contactOption} onPress={handleCallSupport}>
            <View style={styles.contactIcon}>
              <FontAwesome name="phone" size={24} color="#fff" />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactTitle}>Call Us</Text>
              <Text style={styles.contactSubtitle}>Available 24/7</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactOption} onPress={handleEmailSupport}>
            <View style={[styles.contactIcon, { backgroundColor: '#FF9800' }]}>
              <MaterialIcons name="email" size={24} color="#fff" />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactTitle}>Email Us</Text>
              <Text style={styles.contactSubtitle}>Response within 24 hours</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Live Chat */}
        <TouchableOpacity style={styles.chatButton}>
          <MaterialIcons name="chat" size={24} color="#fff" />
          <Text style={styles.chatButtonText}>Live Chat with Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCategoryCard: {
    backgroundColor: '#E8F5E9',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  activeCategoryText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  faqItem: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 12,
  },
  faqAnswer: {
    marginTop: 12,
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  noResults: {
    alignItems: 'center',
    padding: 24,
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: '#999',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  contactOption: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  contactTextContainer: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  contactSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  chatButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});

export default HelpCenter;