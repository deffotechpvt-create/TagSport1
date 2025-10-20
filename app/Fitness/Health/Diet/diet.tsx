import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function DietScreen() {
  const [unit, setUnit] = useState<"cm" | "inch">("cm");

  const measurements = [
    { label: "Head", value: "45.6", style: { top: 40, right: 30 } },
    { label: "Neck", value: "45.6", style: { top: 170, left: 60 }, active: true },
    { label: "Shoulder", value: "45.6", style: { top: 190, right: 30 } },
    { label: "Chest", value: "45.6", style: { top: 230, left: 60 } },
    { label: "Biceps", value: "45.6", style: { top: 260, right: 0 } },
    { label: "Arm", value: "45.6", style: { top: 340, right: 20 } },
    { label: "Hip", value: "45.6", style: { top: 340, left: 30 } },
    { label: "Knee", value: "45.6", style: { bottom: 90, left: 30 } },
    { label: "Ankle", value: "45.6", style: { bottom: 20, left: 10 } },
    { label: "Inner Leg", value: "45.6", style: { bottom: 50, right: 10 } },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
      {/* 🔙 Fixed Back Button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => router.back()}
        activeOpacity={0.7}
      >
        <Ionicons name="chevron-back" size={26} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Toggle Unit */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleBtn, unit === "cm" && styles.activeBtn]}
            onPress={() => setUnit("cm")}
          >
            <Text
              style={[styles.toggleText, unit === "cm" && styles.activeText]}
            >
              Cm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleBtn, unit === "inch" && styles.activeBtn]}
            onPress={() => setUnit("inch")}
          >
            <Text
              style={[styles.toggleText, unit === "inch" && styles.activeText]}
            >
              Inch
            </Text>
          </TouchableOpacity>
        </View>

        {/* Character with measurements */}
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../../../assets/images/Health/body.png")}
            style={styles.character}
            resizeMode="cover"
          />

          {measurements.map((m, index) => (
            <View
              key={index}
              style={[
                styles.measureBubble,
                m.active && styles.activeBubble,
                m.style,
              ]}
            >
              <Text style={styles.bubbleText}>{m.label}</Text>
              <Text style={styles.bubbleValue}>{m.value}</Text>
            </View>
          ))}
        </View>

        {/* Height & Weight Inputs */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inlineLabel}>Height</Text>
            <TextInput
              style={styles.lineInput}
              placeholder=""
              placeholderTextColor="#aaa"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inlineLabel}>Weight</Text>
            <TextInput
              style={styles.lineInput}
              placeholder=""
              placeholderTextColor="#aaa"
            />
          </View>
        </View>

        {/* Update Button */}
        <TouchableOpacity
          onPress={() => router.push("/Fitness/Health/Diet/dietPlan")}
        >
          <LinearGradient
            colors={["#4776E6", "#8E54E9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.updateBtn}
          >
            <Text style={styles.updateText}>Update Now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 100, 
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  toggleContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#fff",
  },
  toggleBtn: {
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  activeBtn: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#fff",
  },
  toggleText: {
    color: "#aaa",
    fontWeight: "600",
    fontSize: 14,
  },
  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
  imageWrapper: {
    width: 360,
    height: 600,
    alignItems: "center",
    justifyContent: "center",
  },
  character: {
    width: 360,
    height: 590,
  },
  measureBubble: {
    position: "absolute",
    backgroundColor: "#ffffff20",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 24,
    alignItems: "center",
    width: 95,
    height: 50,
  },
  activeBubble: {
    backgroundColor: "#007BFFB2",
  },
  bubbleText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  bubbleValue: {
    color: "#fff",
    fontSize: 12,
  },
  inputContainer: {
    width: "100%",
    marginTop: 30,
    marginBottom: 15,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    alignSelf: "center",
  },
  inlineLabel: {
    color: "#fff",
    fontSize: 22,
    marginRight: 10,
    width: 70,
  },
  lineInput: {
    width: 120,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    color: "#fff",
    fontSize: 18,
    paddingVertical: 5,
  },
  updateBtn: {
    paddingVertical: 15,
    borderRadius: 10,
    width: 350,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  updateText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
