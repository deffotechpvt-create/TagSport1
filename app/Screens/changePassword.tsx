import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ImageBackground, 
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/poster.png")}
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: "cover" }}
        resizeMode="contain"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,1)"]}
          style={StyleSheet.absoluteFill}
        />

        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
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

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="New Password"
                placeholderTextColor="#FFFFFF99"
                style={styles.input}
                keyboardType="visible-password"
                value={password}
                onChangeText={setPassword}
              />
              <Ionicons name="lock-closed-outline" size={20} color="#FFFFFF99" style={styles.icon} />
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

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Confirm New Password"
                placeholderTextColor="#FFFFFF99"
                style={styles.input}
                keyboardType='visible-password'
                value={newpassword}
                onChangeText={setNewPassword}
              />
              <Ionicons name="lock-closed-outline" size={20} color="#FFFFFF99" style={styles.icon} />
            </View>

            <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/Screens/loginpage')}>
                      <LinearGradient
                        colors={["#4776E6", "#8E54E9"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.loginButton}
                      >
                        <Text style={styles.loginText}>Change Password</Text>
                      </LinearGradient>
                    </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
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
    transform: [{ translateY: -50 }],
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-end",   
    paddingHorizontal: 20,
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
