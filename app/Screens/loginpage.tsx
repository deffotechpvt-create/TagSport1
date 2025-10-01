import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { router } from 'expo-router';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const handleLogin = () => {
    if (password !== "123456") {
      setError("Wrong password. Try again or click forget password to reset it.");
      setPassword("")
    } else {
      setError("");
      router.push("/(tabs)/home");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bodybuilder.png")}
        style={styles.backgroundImage}
        imageStyle={{ resizeMode: "cover" }}
        resizeMode="contain" >

      <LinearGradient
        colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.9)"]}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.scrollContent}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#FFFFFF99"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Ionicons name="person-outline" size={20} color="#FFFFFF99" style={styles.icon} />
        </View>

        <View
          style={[
            styles.inputContainer,
            error ? { borderBottomColor: "red" } : {},
          ]}
        >
          <TextInput
            placeholder="Your Password"
            placeholderTextColor={error ? "red" : "#FFFFFF99"}
            secureTextEntry={!showPassword}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={error ? "red" : "#FFFFFF99"} // icon color changes if error
            style={styles.icon}
          />
        </View>

        {error ? (
          <View style={styles.errorContainer}>
            <Ionicons name="warning-outline" size={18} color="red" style={{ marginRight: 6 }} />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              { backgroundColor: showPassword ? "#007BFF" : "transparent" },
              { borderColor: showPassword ? "#007BFF" : "#FFFFFF" },
            ]}
            onPress={() => setShowPassword(!showPassword)} >
            {showPassword && (
              <Ionicons name="checkmark" size={16} color="#fff" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Show Password</Text>
        </View>

        <TouchableOpacity style={{ alignSelf: "flex-start", marginBottom: 20 }} onPress={() => router.push('/Screens/changePassword')}>
          <Text style={styles.forgotText}>Forget your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} onPress={handleLogin}>
          <LinearGradient
            colors={["#4776E6", "#8E54E9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../assets/images/google.png')}
              style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="apple1" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText} onPress={() => router.push('/Screens/signup')}>
          Don’t have an account? <Text style={styles.signUp}>Sign Up</Text>
        </Text>

        <Text style={styles.policyText}>
          By logging here you accept all{" "}
          <Text style={styles.link}>Privacy Policy</Text> and{" "}
          <Text style={styles.link}>Terms of Use</Text>
        </Text>
      </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    transform: [{ translateY: -100 }],
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollContent: {
    flexGrow: 1,
    marginTop: 390,
    justifyContent: "center", 
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  icon: { marginRight: 10 },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: '400' 
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    fontSize: 13,
    flexShrink: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 2,
  },
  checkboxLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: '400'
  },
  forgotText: {
    color: "#FFB44C",
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
  },
  loginButton: {
    height: 50,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  socialButton: {
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  footerText: {
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 40,
    fontSize: 14,
    fontWeight: '400'
  },
  signUp: {
    color: "#007BFF",
    fontWeight: "400",
  },
  policyText: {
    color: "#FFFFFF99",
    fontSize: 14,
    fontWeight: '400',
    textAlign: "center",
  },
  link: {
    color: "#FFFFFF",
    fontWeight: "400",
  },
});

export default LoginScreen;