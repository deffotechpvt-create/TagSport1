import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Hydrate = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/Fitness/Health/health')}>
        <Ionicons name="chevron-back" size={24} color="#fff" style={{top: 24}} />
      </TouchableOpacity>
      <Text style={styles.title}>Fuel Your Body with Water</Text>

      <Image
        source={require("../../../assets/images/Health/waterBanner.jpg")} 
        style={styles.banner}
      />

      <View style={styles.statsRow}>
        <Image
          source={require("../../../assets/images/Health/man.png")} 
          style={styles.bodyImage}
        />

        <View style={{ flex: 1, marginLeft: 20 }}>
            <View style={styles.statsBox}>
            <Text style={styles.statsTitle}>H2O</Text>
            <Text style={styles.statsText}>Minerals - 82%</Text>
            <Text style={styles.statsText}>Salts - 18%</Text>
            </View>

            <View style={styles.logBox}>
            <Text style={styles.logTime}>11:30 AM</Text>
            <Text style={styles.logText}>1L Water (3L Water)</Text>
            </View>
        </View>
      </View>

      <Text style={styles.progressMsg}>
        You got 50 % of today’s goal, Keep focus on your health !
      </Text>

      <TouchableOpacity onPress={()=> router.push('/Fitness/Health/health')}>
        <LinearGradient
          colors={["#4776E6", "#8E54E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Your Goal</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Hydrate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 30,
    alignSelf: 'center'
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 30,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: 'center',
    alignSelf: "center",
    marginBottom: 30,
    gap: 40
  },
  bodyImage: {
    width: 100,
    height: 225,
    resizeMode: "contain",
  },
  statsBox: {
    backgroundColor: "#FFFFFF20",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    width: 150,
    height: 125,
  },
  statsTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 2,
    alignSelf: 'center'
  },
  statsText: {
    color: "white",
    fontSize: 14,
    marginVertical: 8,
    alignSelf: 'center'
  },
  logBox: {
    backgroundColor: "#FFFFFF20",
    padding: 12,
    borderRadius: 12,
    width: 150,
    height: 75,
    alignSelf: 'center'
  },
  logTime: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    alignSelf: 'center',
    marginBottom: 10
  },
  logText: {
    color: "white",
    fontSize: 14,
    alignSelf: 'center'
  },
  progressMsg: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    alignSelf: 'center',
    marginBottom: 100,
    width: 250
  },
  button: {
    width: "100%",  
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
