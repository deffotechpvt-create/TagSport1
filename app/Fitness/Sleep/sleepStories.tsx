import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

const storyData = [
  {
    id: "1",
    image: require("../../../assets/images/Health/Sleep/1.png"),
    title: "Sleep Stories",
    sessions: '11',
    link: '/Fitness/health' as const, 
  },
  {
    id: "2",
    image: require("../../../assets/images/Health/Sleep/2.png"),
    title: "Night Dreams",
    sessions: '8',
    link: '/Fitness/health' as const, 
  },
  {
    id: "3",
    image: require("../../../assets/images/Health/Sleep/3.png"),
    title: "Happy Sleep",
    sessions: '18',
    link: '/Fitness/health' as const, 
  },
  {
    id: "4",
    image: require("../../../assets/images/Health/Sleep/4.png"),
    title: "Good Night",
    sessions: '25',
    link: '/Fitness/health' as const, 
  },
  {
    id: "5",
    image: require("../../../assets/images/Health/Sleep/5.png"),
    title: "Sweet Dreams",
    sessions: '13',
    link: '/Fitness/health' as const, 
  },
  {
    id: "6",
    image: require("../../../assets/images/Health/Sleep/6.png"),
    title: "Magic Night",
    sessions: '12',
    link: '/Fitness/health' as const, 
  },
  {
    id: "7",
    image: require("../../../assets/images/Health/Sleep/2.png"),
    title: "Happy Sleep",
    sessions: '18',
    link: '/Fitness/health' as const, 
  },
  {
    id: "8",
    image: require("../../../assets/images/Health/Sleep/3.png"),
    title: "Good Night",
    sessions: '25',
    link: '/Fitness/health' as const, 
  },
]

export default function SleepStories() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card}  onPress={()=> router.push(item.link)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.sessions}>{item.sessions} sessions</Text>
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={14} color="#000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Sleep Stories</Text>
      <Text style={styles.improvementText}>You deserve rest that soothes your soul and dreams that lift your spirit.</Text>

      <FlatList
        data={storyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 10 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1A1A1A", paddingTop: 70, paddingHorizontal: 24 },
  sectionTitle: { color: "#fff", fontSize: 22, fontWeight: "600", marginBottom: 20 },
  improvementText: { 
    color: "white", 
    fontSize: 14, 
    fontWeight: '600',
    marginBottom: 30    ,
    width: 300 
  },

  card: {
    backgroundColor: "#FFFFFF20",
    borderRadius: 18,
    padding: 5,
    marginBottom: 24,
    width: "48%",
    height: 160,
    shadowColor: "#fff",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginRight: 35,
    marginLeft: -10
  },
  image: {
    height: 80,
    borderRadius: 12,
    alignSelf: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: '#fff',
    paddingLeft: 12
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sessions: {
    fontSize: 12,
    color: "#aaa",
    paddingLeft: 12
  },
  playButton: {
    backgroundColor: "#fff",
    padding: 4,
    borderRadius: 30,
    bottom: -20,
    right: 5
  },
});
