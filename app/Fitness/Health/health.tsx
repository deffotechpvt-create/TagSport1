import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CircularProgressBase } from "react-native-circular-progress-indicator";

  const healthData = [
  {
    id: "1",
    title: "Running",
    subtitle: "10-04  06:18 AM",
    value: "1.60 km",
    image: require("../../../assets/images/Health/running.png"),
    link: '/Fitness/Health/fitnessTracker' as const, 
  },
  {
    id: "2",
    title: "Hydration",
    subtitle: "1.5 L to 3 Liter",
    value: "50 %",
    image: require("../../../assets/images/Health/water.png"),
    link: '/Fitness/Health/hydrate' as const, 
  },
  {
    id: "3",
    title: "Heartrate",
    subtitle: "Device pairing\nkeep your heart healthy",
    value: "",
    image: require("../../../assets/images/Health/heart.png"),
    link: '/Fitness/Health/heartRate' as const, 
  },
  {
    id: "4",
    title: "Sleep",
    subtitle: "Sleep analysis\nimprove sleep quality",
    value: "",
    image: require("../../../assets/images/Health/sleep.png"),
    link: '/Fitness/Health/Sleep/start' as const,
  },
  {
    id: "5",
    title: "Mental wellness",
    subtitle: "Pre-workout\nfocus meditation (5 min)",
    value: "",
    image: require("../../../assets/images/Health/mentalWellness.png"),
    link: '/Fitness/Health/healthWellness' as const, 
  },
  {
    id: "6",
    title: "8:00 AM",
    subtitle: "Power up with this perfect breakfast",
    value: "",
    image: require("../../../assets/images/Health/food.png"),
    link: '/Fitness/Health/Diet/diet' as const, 
  },
];

export default function HealthPage() {
  const props = {
    activeStrokeWidth: 15,
    inActiveStrokeWidth: 15,
    inActiveStrokeOpacity: 0.2,
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Health</Text>

      {/* Circular Progress */}
      <View style={styles.progressRow}>
        <View style={styles.progressWrapper}>
          <CircularProgressBase
            {...props}
            value={(3000 / 4000) * 100}
            radius={80}
            activeStrokeColor={"#FF2E2E"}
            inActiveStrokeColor={"#FF2E2E"}
            // dashedStrokeConfig={{ count: 1, width: 500 }} 
          >
            <CircularProgressBase
              {...props}
              value={(1200 / 1800) * 100}
              radius={60}
              activeStrokeColor={"#39FF14"}
              inActiveStrokeColor={"#39FF14"}
            >
              <CircularProgressBase
                {...props}
                value={(60 / 120) * 100}
                radius={40}
                activeStrokeColor={"#007BFF"}
                inActiveStrokeColor={"#007BFF"}
              />
            </CircularProgressBase>
          </CircularProgressBase>
        </View>

        {/* Labels */}
        <View style={styles.labels}>
          <View style={styles.labelItem}>
            <View style={[styles.dot, { backgroundColor: "#FF2E2E" }]} />
            <View style={styles.labelTextContainer}>
              <Text style={styles.labelText}>Steps</Text>
              <Text style={styles.labelValue}>3000<Text style={styles.labelText}> / 4000 steps</Text></Text>
            </View>
          </View>
          <View style={styles.labelItem}>
            <View style={[styles.dot, { backgroundColor: "#39FF14" }]} />
            <View style={styles.labelTextContainer}>
              <Text style={styles.labelText}>Calories</Text>
              <Text style={styles.labelValue}>1200<Text style={styles.labelText}> / 1800 calories</Text></Text>
            </View>
          </View>
          <View style={styles.labelItem}>
            <View style={[styles.dot, { backgroundColor: "#007BFF" }]} />
            <View style={styles.labelTextContainer}>
              <Text style={styles.labelText}>Play Duration</Text>
              <Text style={styles.labelValue}>60<Text style={styles.labelText}> / 120 min</Text></Text>
            </View>
          </View>

        </View>
      </View>

      {/* Risk Alert */}
      <View style={styles.alertBox}>
        <Ionicons name="warning" size={18} color="yellow" style={{top: -20}} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.alertTitle}>High Injury risk : 3 intense sessions in the past 4 days.</Text>
          <Text style={styles.rest}>Take a rest day</Text>
        </View>
        <Image
          source={require("../../../assets/images/Health/alert.png")} 
          style={styles.alertImage}
          resizeMode="contain"
        />
      </View>

      {/* Health Cards */}
      <FlatList
        data={healthData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={()=> router.push(item.link)}>
            <View style={styles.cardContent}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                {item.subtitle ? (
                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                ) : null}
                {item.value ? (
                  <Text style={styles.cardValue}>{item.value}</Text>
                ) : null}
              </View>

              <Image
                source={item.image}
                style={styles.cardImage}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", paddingTop: 40, paddingHorizontal: 24 },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },

  // Circular progress row
  progressRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  progressWrapper: { 
    marginRight: 40 
  },
  labels: { 
    flex: 1, 
    justifyContent: "center"
  },
  labelItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
    top: -15
  },
  labelTextContainer: {
    flexDirection: "column",  
  },
  labelText: {
    color: "gray",
    fontSize: 14,
    marginBottom: 6 
  },
  labelValue: {
    color: "white",
    fontSize: 18,
    left: -18
  },

  // Alert Box
  alertBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF20",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    height: 100,
    shadowColor: "#fff",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  alertTitle: { 
    color: "#fff", 
    fontSize: 14,
    fontWeight: "500",
    width: 225, 
  },
  alertImage: {
    width: 80,
    height: 75,
    bottom: -10,
    right: -10,
  },
  rest: { 
    color: "skyblue",
    marginTop: 5 
  },

  // Cards
  card: {
    backgroundColor: "#FFFFFF20",
    borderRadius: 18,
    padding: 15,
    marginBottom: 15,
    width: "48%",
    height: 130,
    shadowColor: "#fff",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardContent: { 
    flex: 1
  },
  cardTitle: { 
    color: "white", 
    fontSize: 14, 
    fontWeight: "600", 
    marginBottom: 6 
  },
  cardSubtitle: { 
    color: "#aaa", 
    fontSize: 8, 
    marginBottom: 8 
  },
  cardValue: { 
    color: "white", 
    fontSize: 14, 
    fontWeight: "500" 
  },
  cardImage: {
    position: "absolute",
    bottom: -12,  
    right: -15,   
  },
});
