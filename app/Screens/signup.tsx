import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const ChangePassword = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/poster1.png")}
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: "cover" }}
        resizeMode="contain"
      >
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,1)"]}
        style={StyleSheet.absoluteFill}
      />
        <View style={styles.scrollContent}>
          <Text style={styles.subtitle}>
            Just a few Quick things to get started
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your Name"
              placeholderTextColor="#FFFFFF99"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#FFFFFF99"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#FFFFFF99"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Ionicons 
              name="lock-closed-outline" 
              size={20} 
              color="#FFFFFF99" 
              style={styles.icon} 
            />
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Already have an account?
              <Text style={styles.signupLink} onPress={() => router.push('/Screens/loginpage')}>{" "}Sign In</Text>
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/Screens/loginpage')}>
            <LinearGradient
              colors={["#4776E6", "#8E54E9"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.loginButton}
            >
              <Text style={styles.loginText}>Create Account</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    transform: [{ translateY: -175 }], // keep if you need to adjust background
  },
  scrollContent: {
    flex: 1,
    justifyContent: "flex-start", 
    paddingHorizontal: 20,
    paddingTop: 600,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  icon: { 
    marginRight: 10 
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: '400' 
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
    color: '#FFFFFF99',
  },
  signupContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    padding: 10
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
    height: 50,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  loginText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default ChangePassword;
