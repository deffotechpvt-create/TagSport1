import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const autographs = [
  {
    id: "1",
    name: "Ms Dhoni",
    img: require("../../assets/images/Products/dhoni-sign.png"),
  },
  {
    id: "2",
    name: "Virat Kohli",
    img: require("../../assets/images/Products/virat-sign.png"),
  },
  {
    id: "3",
    name: "Rohit Sharma",
    img: require("../../assets/images/Products/rohit.png"),
  },
];

const unforgettable = [
  {
    id: "1",
    title: "2023 IPL Final match\nCSK vs GT",
    img: require("../../assets/images/Products/moment1.png"),
  },
  {
    id: "2",
    title: "There's no single \"most favored\" football match in all time",
    img: require("../../assets/images/Products/moment2.png"),
  },
];

const memories = [
  {
    id: "1",
    title: "MS Dhoni collects a stump after hitting the winning runs",
    img: require("../../assets/images/Products/mem1.png"),
    link: '/Store/match' as const,
  },
  {
    id: "2",
    title: "Iconic Goal \nCelebrations - #2",
    img: require("../../assets/images/Products/mem2.png"),
    link: '/Store/match' as const,    
  },
];

const collections = [
  { id: "1", img: require("../../assets/images/Products/mem1.png") },
  { id: "2", img: require("../../assets/images/Products/mem2.png") },
];

export default function NFTCollection() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Autograph</Text>
        <FlatList
          data={autographs}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.img} style={styles.autographImage} />
              <Text style={styles.cardText}>{item.name}</Text>
              <View style={styles.iconRow}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Ionicons name="heart-outline" size={20} color="white" />
                  <Ionicons name="share-outline" size={20} color="white" />
                </View>
                <Ionicons
                  name="download-outline"
                  size={20}
                  color="white"
                  style={{ right: 6 }}
                />
              </View>
            </View>
          )}
        />

        <Text style={styles.sectionTitle}>Unforgettable Match</Text>
        <FlatList
          data={unforgettable}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.matchCard}>            
                <Image source={item.img} style={styles.matchImage} />
              <Text style={styles.matchText}>{item.title}</Text>
            </View>
          )}
        />

        <Text style={styles.sectionTitle}>Match Memories</Text>
        <View style={styles.memoryGrid}>
          {memories.map((item) => (
            <View key={item.id} style={styles.memoryCard}>
              <TouchableOpacity onPress={()=>router.push(item.link)}>
                <Image source={item.img} style={styles.memoryImage} />
              </TouchableOpacity>  
              <Text style={styles.memoryText}>{item.title}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>My Collection images</Text>
        <View style={styles.memoryGrid}>
          {collections.map((item) => (
          <View key={item.id} style={[styles.memoryCard, { marginBottom: 40 }]}>
              <Image source={item.img} style={styles.memoryImage} />
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    marginVertical: 10,
    marginBottom: 18,
  },
  card: {
    marginRight: 20,
    width: width * 0.35,
  },
  autographImage: {
    width: "100%",
    height: 90,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  cardText: {
    color: "white",
    fontSize: 14,
    marginBottom: 6,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  matchCard: {
    marginRight: 24,
    width: width * 0.41,
  },
  matchImage: {
    width: "100%",
    height: 115,
    borderRadius: 10,
  },
  matchText: {
    color: "white",
    fontSize: 14,
    marginTop: 6,
  },
  memoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  memoryCard: {
    width: width * 0.41,
    marginBottom: 12,
  },
  memoryImage: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  memoryText: {
    color: "white",
    fontSize: 14,
    marginTop: 6,
    width: '90%'
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#444",
    backgroundColor: "#111",
  },
  navItem: { alignItems: "center" },
  navText: { color: "#fff", fontSize: 12, marginTop: 2 },
});
