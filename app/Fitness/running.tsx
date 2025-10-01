// RunningList.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const runningData = [
  {
    id: "1",
    title: "Running",
    duration: "00:05:58",
    distance: "1.60 km",
    date: "02/10",
  },
  {
    id: "2",
    title: "Running",
    duration: "00:10:22",
    distance: "2.00 km",
    date: "02/11",
  },
  {
    id: "3",
    title: "Running",
    duration: "00:15:10",
    distance: "3.50 km",
    date: "02/12",
  },
  {
    id: "4",
    title: "Running",
    duration: "00:15:10",
    distance: "3.50 km",
    date: "02/12",
  },
  {
    id: "5",
    title: "Running",
    duration: "00:15:10",
    distance: "3.50 km",
    date: "02/12",
  },
  {
    id: "6",
    title: "Running",
    duration: "00:15:10",
    distance: "3.50 km",
    date: "02/12",
  },
  {
    id: "7",
    title: "Running",
    duration: "00:15:10",
    distance: "3.50 km",
    date: "02/12",
  },{
    id: "8",
    title: "Running",
    duration: "00:15:10",
    distance: "3.50 km",
    date: "02/12",
  },
];

export default function RunningList() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.row}>
      <Ionicons
        name="walk"
        size={28}
        color="white"
        style={{ marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.subRow}>
          <Text style={styles.subText}>{item.duration}</Text>
          
        </View>
      </View>
      <Text style={styles.distanceTxt}>{item.distance}</Text> 
      <Text style={styles.date}>{item.date}</Text>
      <Ionicons
        name="chevron-forward"
        size={20}
        color="gray"
        style={{ marginLeft: 5 }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>2025.2</Text>
      <FlatList
        data={runningData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1A1A1A" },
  sectionTitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 12,
    fontWeight: '600'
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    // borderBottomWidth: 0.5,
    // borderBottomColor: "#333",
  },
  title: { color: "white", fontSize: 16, fontWeight: "600" },
  subRow: { flexDirection: "row", marginTop: 2 },
  subText: { color: "gray", fontSize: 12, marginRight: 15 },
  distanceTxt: {
    color: "gray", 
    fontSize: 12, 
    marginRight: 80
  },
  date: { color: "gray", fontSize: 12 },
});
