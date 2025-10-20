import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Search from "../ReusableComponent/searchFilter";

const { width } = Dimensions.get("window");

const sports = [
  { id: "1", name: "Cricket", icon: "cricket", link: "/Sports/cricket" },
  { id: "2", name: "Football", icon: "soccer", link: "/Sports/football" },
  { id: "3", name: "Hockey", icon: "hockey-sticks", link: "/Sports/hockey" },
  { id: "4", name: "Badminton", icon: "badminton", link: "/Sports/badminton" },
  { id: "5", name: "Tennis", icon: "tennis", link: "/Sports/tennis" },
  { id: "6", name: "Table Tennis", icon: "table-tennis", link: "/Sports/tabletennis" },
  { id: "7", name: "Wrestling", icon: "arm-flex-outline", link: "/Sports/wrestling" },
  { id: "8", name: "Boxing", icon: "boxing-glove", link: "/Sports/boxing" },
  { id: "9", name: "Athletic", icon: "run-fast", link: "/Sports/athletic" },
  { id: "10", name: "Shooting", icon: "pistol", link: "/Sports/shooting" },
  { id: "11", name: "Basketball", icon: "basketball", link: "/Sports/basketball" },
  { id: "12", name: "Volleyball", icon: "volleyball", link: "/Sports/volleyball" },
  { id: "13", name: "Rugby", icon: "rugby", link: "/Sports/rugby" },
  { id: "14", name: "Karate", icon: "karate", link: "/Sports/karate" },
];

const matches = [
  {
    id: "1",
    title: "BIG MATCH",
    desc: "KUALIFIKASI PIALA DUNIA CHINA VS INDONESIA Pertarungan antara dua tim sepak bola Di M9WIN, Anda memiliki kesempatan untuk menambah serunya pertandingan ini dengan memasang t*ruhan anda di big match yang mendebarkan ini.Salam Hoki M9WIN.",
    image: require("../../assets/images/match1.jpg"),
  },
  {
    id: "2",
    title: "JADWAL BOLA",
    desc: "Ad2stream - Timnas Indonesia kembali menghadapi tantangan besar di Kualifikasi Piala Dunia 2026 zona Asia, ketika mereka bertanding melawan Bahrain di Bahrain National Stadium pada malam hari, ",
    image: require("../../assets/images/match2.jpg"),
  },
  {
    id: "3",
    title: "BIG MATCH",
    desc: "KUALIFIKASI PIALA DUNIA CHINA VS INDONESIA Pertarungan antara dua tim sepak bola Di M9WIN, Anda memiliki kesempatan untuk menambah serunya pertandingan ini dengan memasang t*ruhan anda di big match yang mendebarkan ini.Salam Hoki M9WIN.",
    image: require("../../assets/images/match1.jpg"),
  },
  {
    id: "4",
    title: "JADWAL BOLA",
    desc: "Ad2stream - Timnas Indonesia kembali menghadapi tantangan besar di Kualifikasi Piala Dunia 2026 zona Asia, ketika mereka bertanding melawan Bahrain di Bahrain National Stadium pada malam hari, ",
    image: require("../../assets/images/match2.jpg"),
  },
];

const chunkArray = (arr: any[], size: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};
const groupedSports = chunkArray(sports, 2);

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/name.png")}
            style={styles.logo}
          />
          <Image
            source={{
              uri: "https://creator.nightcafe.studio/jobs/HKQtVv01jMdsnwbDGXoE/HKQtVv01jMdsnwbDGXoE--1--ekmya.jpg",
            }}
            style={styles.profile}
          />
        </View>

        {/* Search Row */}
        <Search
          placeholder="Search here..."
          value={query}
          onChangeText={setQuery}
          onSearch={() => console.log("Searching:", query)}
          onFilterPress={() => console.log("Filter clicked")}
        />
      </View>

      {/* Banner */}
      <ImageBackground
        source={require("../../assets/images/Component 1.png")}
        style={styles.heroImage}
      >
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <Text style={styles.title}>Elevate Your Fitness Journey</Text>
            <Text style={styles.subtitle}>
              Revolutionize your workout routine with cutting-edge technology
              and personalized coaching.
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
              <LinearGradient
                colors={["#4776E6", "#8E54E9"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Get Started</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* Sports Collection */}
      <View style={{ marginTop: 10 }}>
        <Text style={styles.sectionTitle}>Sports Collections</Text>

        <FlatList
          data={groupedSports}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 18 }}
          renderItem={({ item }) => (
            <View style={styles.sportsColumn}>
              {item.map((sport) => (
                <LinearGradient
                  key={sport.id}
                  colors={["#5D5C6300", "#5D5C63"]}
                  style={styles.sportBorder}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => router.push(sport.link as any)}
                  >
                    <LinearGradient
                      colors={[
                        "#0000004A",
                        "#0000004A",
                        "#4B4B4B",
                        "#4B4B4B",
                      ]}
                      style={styles.sportCardNew}
                    >
                      <MaterialCommunityIcons
                        name={sport.icon as any}
                        size={50}
                        color="#fff"
                      />
                      <Text style={styles.sportTextNew}>{sport.name}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </LinearGradient>
              ))}
            </View>
          )}
        />
      </View>

      {/* Matches Section */}
      <View style={styles.innerContainer}>
        <Text style={styles.matchTitle}>Iren Vs Indonesia Football Match</Text>
        <FlatList
          data={matches}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1A1A1A" },
  innerContainer: { padding: 18, paddingTop: 30 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { width: 104, height: 30 },
  profile: { width: 45, height: 45, borderRadius: 30, right: 10 },

  heroImage: { width: width, height: 240, justifyContent: "center" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
  },
  overlayContent: {
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    marginBottom: 6,
    maxWidth: "70%",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#eee",
    marginBottom: 12,
    maxWidth: "70%",
  },
  button: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 10 },
  buttonText: { fontSize: 16, color: "white", fontWeight: "600" },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
    marginVertical: 10,
    alignSelf: "center",
  },

  sportsColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 16,
  },
  sportBorder: {
    borderRadius: 16,
    padding: 2,
    marginBottom: 12,
    width: width * 0.25,
  },
  sportCardNew: {
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    paddingVertical: 24,
  },
  sportTextNew: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
  },

  matchTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    marginBottom: 15,
    marginTop: 15,
  },
  card: {
    width: width * 0.45,
    borderRadius: 12,
    marginRight: 15,
    backgroundColor: "#222",
    overflow: "hidden",
  },
  cardImage: { width: "100%", height: 140 },
  cardTitle: {
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 14,
    marginLeft: 8,
  },
  cardDesc: {
    color: "#aaa",
    fontSize: 10,
    marginTop: 6,
    marginBottom: 10,
    marginHorizontal: 8,
  },
});
