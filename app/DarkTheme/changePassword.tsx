import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password</Text>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
            Choose a strong password and don’t reuse it for other accounts.
            <Text 
            style={styles.signupLink} 
            onPress={() => router.push('/')}
            >
            {" "}Learn More...
            </Text>
        </Text>
        </View>

        <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
            You may be signed out of your account on some devices. Learn more about 
            <Text 
            style={styles.signupLink} 
            onPress={() => router.push('/')}
            >
            {" "}Where you’ll stay signed in...
            </Text>
        </Text>
      </View>

      {/* Password fields */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="New password"
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
        <Text style={styles.signupText}>
            Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name. 
            <Text 
            style={styles.signupLink} 
            onPress={() => router.push('/')}
            >
            {" "}Why?....
            </Text>
        </Text>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirm new password"
          placeholderTextColor={'#828282'}
          secureTextEntry={!showChangePassword}
          style={styles.passwordInput}
        />
        <TouchableOpacity onPress={() => setShowChangePassword(!showChangePassword)}>
          <Ionicons 
            name={showChangePassword ? "eye" : "eye-off"} 
            size={22} 
            color="#888" 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Change Password</Text>
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
    color: '#fff',
    marginBottom: 30,
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
    marginTop: 5,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    color: '#1A1A1A',
  },
  signupContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  signupText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF99',
    textAlign: 'center',
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
    marginTop: 200,
  },
  loginText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default ChangePassword;
