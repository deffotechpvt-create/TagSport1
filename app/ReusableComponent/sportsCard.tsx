import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SportsCard({ icon, name, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <LinearGradient
        colors={["#222", "#000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <MaterialCommunityIcons name={icon} size={36} color="white" />
        <Text style={styles.text}>{name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "45%",
    aspectRatio: 1,
    borderRadius: 14,
    marginVertical: 10,
    marginHorizontal: "2.5%",
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  text: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
    marginTop: 6,
    textAlign: "center",
  },
});
