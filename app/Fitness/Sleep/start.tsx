import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function Start() {

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <ImageBackground 
            source={require('../../../assets/images/Health/sleep-bg.png')}
            style={styles.background}
            resizeMode="contain"
        >
            <Image
                source={require("../../../assets/images/Health/sleepp.png")}
                style={styles.image}
                resizeMode="contain"
            />
        </ImageBackground>
        <Text style={styles.title}>Rest well and enjoy your sleep time tonight</Text>
        <Text style={styles.subtitle}>As the day fades and silence wraps around you, allow your thoughts to settle and your body to unwind.</Text>
      </View>

      <TouchableOpacity onPress={() => router.push('/Fitness/Sleep/sleep')} style={styles.nextContainer}>
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
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    paddingHorizontal: 10,
  },
   background: {
    width: "100%",
    height: 370, // adjust to your need
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 245,
    height: 245,
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 40
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
    paddingHorizontal: 40,
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
