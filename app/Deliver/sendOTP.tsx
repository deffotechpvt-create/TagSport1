import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Defs, Path, Stop, LinearGradient as SvgGradient } from "react-native-svg";

const {  width, height  } = Dimensions.get("window");

export default function SendOTP() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <Svg height={height * 0.8} width={width}>
          <Defs>
            <SvgGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#1b52abff" stopOpacity="1" />
              <Stop offset="1" stopColor="#151827ff" stopOpacity="1" />
            </SvgGradient>
          </Defs>
          <Path
            d={`M0 0 H${width} V${height * 0.6} Q${width / 2} ${height * 0.7} 0 ${height * 0.65} Z`}
            fill="url(#grad)"
          />
        </Svg>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require("../../assets/images/Delivery/scooty.png")}
          style={styles.illustration}
          resizeMode="contain"
        />

        <Text style={styles.title}>Get a stable monthly{'\n'}income</Text>

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setChecked(!checked)} style={styles.checkbox}>
            {checked && <Ionicons name="checkmark" size={16} color="#fff" />}
          </TouchableOpacity>

          <Text style={styles.checkboxText}>
            By signing up I agree to the{" "}
            <Text style={styles.link}>Terms of use</Text> and{" "}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </View>

        {/* Send OTP Button */}
        <TouchableOpacity activeOpacity={0.8} onPress={()=> router.push('/Deliver/verifyOTP')}>
          <LinearGradient
            colors={["#4776E6", "#8E54E9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Send OTP</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  svgContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1, 
  },
  content: {
    padding: 24,
    paddingTop: 60,
  },
  illustration: {
    width: 220,
    height: 580,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 27,
    fontWeight: "600",
    color: "#fff",
    textAlign: "left",
    top: -150,
    marginBottom: -50
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 8,
    padding: 12,
    color: "#fff",
    marginBottom: 16,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#fff",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxText: {
    flex: 1,
    color: "#aaa",
    fontSize: 13,
  },

  link: {
    color: "#4da6ff",
    fontWeight: "500",
  },
  button: {
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
