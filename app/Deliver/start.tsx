import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Start() {

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <ImageBackground 
            source={require('../../assets/images/Delivery/start.png')}
            style={styles.background}
            resizeMode="cover"
        />
        <Text style={styles.title}>Deliver with purpose. Earn with pride.</Text>
        <Text style={styles.subtitle}>Get delivery jobs in your area and earn fast.{"\n"} Start earning by delivering packages and tickets.</Text>
      </View>

      <TouchableOpacity onPress={() => router.push('/Deliver/sendOTP')} style={styles.nextContainer}>
        <Text style={styles.next}>Next</Text>
        <Ionicons name='chevron-forward' size={22} color={'#fff'}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 150
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    paddingHorizontal: 10,
  },
   background: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 40,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
    paddingHorizontal: 20,
  },
  nextContainer: {
    position: "absolute",
    bottom: 60,
    right: 30,
    zIndex: 10,
    flexDirection: "row", 
    alignItems: "center",
  },
  next: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginRight: 10
  },
});
