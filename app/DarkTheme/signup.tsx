import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { router } from 'expo-router';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>Just a few Quick thinks to get started</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        placeholder="Enter your name"
        placeholderTextColor={'#828282'}
        style={styles.input}
        keyboardType="name-phone-pad"
      />

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        placeholder="Enter your email id"
        placeholderTextColor={'#828282'}
        style={styles.input}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor={'#828282'}
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons 
            name={showPassword ? "eye" : "eye-off"} 
            size={22} 
            color="#888" 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/DarkTheme/loginpage')}>
        <Text style={styles.signupLink}> Sign In</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 80,
    backgroundColor: '#1A1A1A',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    color: '#fff'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
    color: '#FFFFFF99'
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#fff'
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    fontSize: 14,
    color: '#1A1A1A'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    color: '#1A1A1A'
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  signupText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF99',
  },
  signupLink: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: '400',
  },
  loginButton: {
    backgroundColor: '#007BFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 190
  },
  loginText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default SignUp;
