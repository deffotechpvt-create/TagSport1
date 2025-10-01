import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../config/firebaseConfig";   
import { router } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔑 Google Auth Request
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "643934388958-sqgbnpbj4t3on34qmgfisqbvn43to62f.apps.googleusercontent.com", 
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      if (!id_token) {
        setError("No ID token returned from Google.");
        return;
      }

      const credential = GoogleAuthProvider.credential(id_token);

      signInWithCredential(auth, credential)
        .then((userCred) => {
          console.log("Firebase User:", userCred.user);
          router.push("/"); 
        })
        .catch((err) => {
          console.error("Firebase Login Error:", err);
          setError("Google login failed. Try again.");
        });
    }
  }, [response]);

  const handleLogin = () => {
    if (password !== "123456") {
      setError("Wrong password. Try again or click forget password to reset it.");
      setPassword("");
    } else {
      setError("");
      router.push("/");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        placeholder="Enter your email id"
        placeholderTextColor={"#828282"}
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={[styles.label, error ? { color: "red" } : {}]}>Password</Text>
      <View style={[styles.passwordContainer, error ? { borderColor: "red" } : {}]}>
        <TextInput
          placeholder={error ? "" : "Enter your password"}
          placeholderTextColor={"#828282"}
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye" : "eye-off"} size={22} color={error ? "red" : "#888"} />
        </TouchableOpacity>
      </View>

      {error ? (
        <View style={styles.errorContainer}>
          <Ionicons name="warning-outline" size={18} color="red" style={{ marginRight: 6 }} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => router.push("/DarkTheme/changePassword")}
      >
        <Text style={styles.forgotText}>Forgot password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/DarkTheme/signup")}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity
        style={styles.socialButton}
        disabled={!request}
        onPress={() => promptAsync()}
      >
        <Image
          source={{ uri: "https://img.icons8.com/color/48/google-logo.png" }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/mac-os.png" }}
          style={styles.socialIcon}
        />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        You agree to our <Text style={styles.link}>Terms of Service</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 25, 
    paddingTop: 80, 
    backgroundColor: '#1A1A1A' 
  },

  title: { 
    fontSize: 22, 
    fontWeight: '600', 
    textAlign: 'center', 
    marginTop: 20, 
    marginBottom: 40, 
    color: '#fff' 
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
    backgroundColor: '#FFFFFF', 
    borderRadius: 8, 
    paddingHorizontal: 12, 
    marginBottom: 20, 
    fontSize: 14, 
    color: '#1A1A1A' 
  },

  passwordContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderColor: '#E0E0E0', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 8, 
    paddingHorizontal: 12, 
    height: 50, 
    marginBottom: 10 
  },

  passwordInput: { 
    flex: 1, 
    fontSize: 14, 
    color: '#1A1A1A' 
  },

  errorContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 10 
  },

  errorText: { 
    color: "red", 
    fontSize: 13, 
    flexShrink: 1 
  },

  forgotButton: { 
    alignSelf: 'flex-end', 
    marginBottom: 25 
  },

  forgotText: { 
    fontSize: 14, 
    color: '#fff', 
    fontWeight: '400' 
  },

  loginButton: { 
    backgroundColor: '#007BFF', 
    height: 50, 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 25 
  },

  loginText: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#fff' 
  },

  signupContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginBottom: 40 
  },

  signupText: { 
    fontSize: 14, 
    fontWeight: '400', 
    color: '#fff' 
  },

  signupLink: { 
    fontSize: 14, 
    color: '#007BFF', 
    fontWeight: '400' 
  },

  dividerContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 40 
  },

  line: { 
    flex: 1, 
    height: 1, 
    backgroundColor: '#fff' 
  },

  orText: { 
    marginHorizontal: 10, 
    fontSize: 14, 
    color: '#fff' 
  },

  socialButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#EEEEEE', 
    height: 50, 
    borderRadius: 8, 
    paddingHorizontal: 12, 
    marginBottom: 15 
  },

  socialIcon: { 
    width: 24, 
    height: 24, 
    marginRight: 12 
  },

  socialText: { 
    fontSize: 14, 
    color: '#1A1A1A' 
  },

  terms: { 
    textAlign: 'center', 
    fontSize: 14, 
    color: '#FFFFFFB2', 
    fontWeight: '400', 
    marginTop: 20, 
    padding: 10 
  },

  link: { 
    color: '#FFFFFF', 
    fontWeight: '400' 
  },
});
export default LoginScreen;
