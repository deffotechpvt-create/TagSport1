import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface WorkoutDetailProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  calories: string;
}

export default function WorkoutDetail({
  title,
  description,
  image,
  duration,
  calories,
}: WorkoutDetailProps) {
  const [startWarmup, setStartWarmup] = useState(false);
  const [quietWorkout, setQuietWorkout] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header with Image and Back Button */}
      <View style={styles.headerImageContainer}>
        <Image source={{ uri: image }} style={styles.headerImage} />
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Title & Description */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Info Row */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Ionicons name="time-outline" size={24} color="#2570ff" />
          <Text style={styles.infoText}>
            <Text style={styles.infoBold}>{duration}</Text>
          </Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="fire" size={24} color="#ff6000" />
          <Text style={styles.infoText}>
            <Text style={styles.infoBold}>{calories} calories</Text>
          </Text>
        </View>
      </View>

      {/* Music Section */}
      <TouchableOpacity style={styles.menuButton}>
        <View style={styles.menuContent}>
          <FontAwesome5 name="music" size={20} color="#333" />
          <Text style={styles.menuText}>Music and Sound</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </TouchableOpacity>

      {/* Settings */}
      <View style={styles.settingsContainer}>
        <View style={styles.settingRow}>
          <MaterialCommunityIcons name="timer-outline" size={20} color="#666" />
          <Text style={styles.settingLabel}>Duration</Text>
          <Text style={styles.settingValue}>{duration}</Text>
        </View>

        <View style={styles.settingRow}>
          <MaterialCommunityIcons name="dumbbell" size={20} color="#666" />
          <Text style={styles.settingLabel}>Fitness Tools</Text>
          <Text style={styles.settingValue}>None</Text>
        </View>

        <View style={styles.settingRow}>
          <MaterialCommunityIcons name="run-fast" size={20} color="#666" />
          <Text style={styles.settingLabel}>Start with Warmup</Text>
          <Switch value={startWarmup} onValueChange={setStartWarmup} />
        </View>

        <View style={styles.settingRow}>
          <MaterialCommunityIcons name="walk" size={20} color="#666" />
          <Text style={styles.settingLabel}>Quiet Workout</Text>
          <Switch value={quietWorkout} onValueChange={setQuietWorkout} />
        </View>
      </View>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton} onPress={()=> router.push('/Fitness/Training/exercise')}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 40
  },
  headerImageContainer: { position: "relative", height: 250, width: "100%" },
  headerImage: { height: "100%", width: "100%", resizeMode: "cover" },
  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 20,
    opacity: 0.7,
  },
  title: { fontSize: 22, fontWeight: "bold", marginHorizontal: 20, marginTop: 16, color: "#fff" },
  description: { fontSize: 16, color: "#ccc", marginHorizontal: 20, marginTop: 6 },
  infoRow: { flexDirection: "row", justifyContent: "space-around", marginTop: 14 },
  infoItem: { flexDirection: "row", alignItems: "center" },
  infoText: { marginLeft: 6, fontSize: 16, color: "#fff" },
  infoBold: { fontWeight: "bold" },
  menuButton: {
    flexDirection: "row",
    marginHorizontal: 18,
    marginTop: 28,
    backgroundColor: "#222",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuContent: { flexDirection: "row", alignItems: "center" },
  menuText: { marginLeft: 12, fontWeight: "bold", fontSize: 16, color: "#fff" },
  settingsContainer: {
    marginHorizontal: 18,
    marginTop: 20,
    backgroundColor: "#222",
    borderRadius: 10,
    paddingVertical: 6,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  settingLabel: { flex: 1, fontWeight: "bold", fontSize: 16, marginLeft: 12, color: "#fff" },
  settingValue: { fontSize: 14, color: "#ccc" },
  startButton: {
    backgroundColor: "#39FF14", 
    marginHorizontal: 36,
    borderRadius: 35,
    paddingVertical: 14,
    marginTop: 24,
    marginBottom: 40,
  },
  startButtonText: { fontWeight: "bold", fontSize: 18, textAlign: "center", color: "#222" },
});
