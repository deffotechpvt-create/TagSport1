import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function OTPScreen() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d*$/.test(text)) {
      let newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < inputs.current.length - 1) {
        inputs.current[index + 1]?.focus(); 
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus(); 
    }
  };

  const handleVerify = () => {
    // alert("Entered OTP: " + otp.join(""));
    router.push('/Deliver/personalInfo')
    console.log(otp.join(""))
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons
          name="chevron-back"
          size={24}
          color={"#fff"}
          style={{ marginBottom: 15 }}
        />
      </TouchableOpacity>
      
      <Text style={styles.title}>Enter OTP to verify</Text>
      <Text style={styles.subtitle}>
        A 6 digit OTP has been sent to your phone number{" "}
        <Text style={styles.phone}>+91 9999988888</Text>
        <Text style={styles.change}> Change</Text>
      </Text>
      <Text style={styles.enterText}>Enter OTP Text</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
            <TextInput
                key={index}
                ref={(el) => {
                inputs.current[index] = el;
                }}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
            />
        ))}
      </View>

      <TouchableOpacity onPress={handleVerify} activeOpacity={0.8}>
        <LinearGradient
          colors={["#4776E6", "#8E54E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.verifyButton}
        >
          <Text style={styles.verifyText}>Verify OTP</Text>
        </LinearGradient>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 15,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 16,
    lineHeight: 24,
    width: "100%",
  },
  phone: {
    color: "#fff",
    fontWeight: "500",
  },
  change: {
    fontSize: 14,
    color: "#007BFF",
    fontWeight: "500",
  },
  enterText: {
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 40,
    color: "#fff",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  verifyButton: {
    height: 55,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  verifyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
