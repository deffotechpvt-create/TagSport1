import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const HeartRate = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Heart Rate Interpretation</Text>

        <Image
          source={require("../../assets/images/Health/heartWatch.jpg")}
          style={styles.banner}
        />

        <Text style={styles.sectionTitle}>About heart rate :</Text>
        <Text style={styles.sectionText}>
          Smartwatches today are equipped with advanced sensors that can monitor heart rate continuously throughout the day. These devices use optical sensors, typically based on photo plethysmo graphy (PPG), which detect blood flow under the skin to estimate heart rate.
        </Text>

        <Text style={styles.sectionTitle}>How to check heart rate :</Text>
        <Text style={styles.sectionText}>
          To check your heart rate on a smartwatch, you typically need to wear the watch snugly on your wrist and access the heart rate feature through the device’s menu or health app.
        </Text>

        <Text style={styles.sectionTitle}>Supported devices :</Text>
        <Text style={styles.sectionText}>
          Before purchasing a smartwatch, it’s important to check whether it is compatible with your current device to ensure full access to features like notifications, calls, messages, and app syncing.
        </Text>
      </ScrollView>

      <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper} onPress={()=> router.push('/Fitness/health')}>
        <LinearGradient
          colors={["#4776E6", "#8E54E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Device</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default HeartRate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 25,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 10,
  },
  sectionText: {
    color: "lightgray",
    fontSize: 14,
    lineHeight: 24,
  },
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
