import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  TextInput
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

// Sports Collection Data
const sports = [
  { id: "1", name: "Cricket", icon: "cricket", link: '/Sports/cricket' },
  { id: "2", name: "Football", icon: "soccer", link: '/Sports/football' },
  { id: "3", name: "Hockey", icon: "hockey-sticks", link: '/Sports/hockey' },
  { id: "4", name: "Badminton", icon: "badminton", link: '/Sports/badminton' },
  { id: "5", name: "Tennis", icon: "tennis", link: '/Sports/tennis' },
  { id: "6", name: "Table Tennis", icon: "table-tennis", link: '/Sports/tabletennis' },
  { id: "7", name: "Wrestling", icon: "wrestling", link: '/Sports/wrestling' },
  { id: "8", name: "Boxing", icon: "boxing-glove", link: '/Sports/boxing' },
  { id: "9", name: "Athletic", icon: "athletic", link: '/Sports/athletic' },
  { id: "10", name: "Shooting", icon: "shooting", link: '/Sports/shooting' },
  { id: "11", name: "Basketball", icon: "basketball", link: '/Sports/cricket' },
  { id: "12", name: "Volleyball", icon: "volleyball", link: '/Sports/cricket' },
  { id: "13", name: "Rugby", icon: "rugby", link: '/Sports/cricket' },
  // { id: "14", name: "Golf", icon: "golf", link: '/Sports/cricket' },
];

// Matches data
const matches = [
  {
    id: "1",
    title: "BIG MATCH",
    desc: "KUALIFIKASI PIALA DUNIA CHINA VS INDONESIA Pertarungan antara dua tim sepak bola Di M9WIN, Anda memiliki kesempatan untuk menambah serunya pertandingan ini dengan memasang t*ruhan anda di big match yang mendebarkan ini.Salam Hoki M9WIN.",
    image:
      require("../../assets/images/match1.jpg"),
  },
  {
    id: "2",
    title: "JADWAL BOLA",
    desc: "Ad2stream - Timnas Indonesia kembali menghadapi tantangan besar di Kualifikasi Piala Dunia 2026 zona Asia, ketika mereka bertanding melawan Bahrain di Bahrain National Stadium pada malam hari, ",
    image:
      require("../../assets/images/match2.jpg"),
  },
  {
    id: "3",
    title: "BIG MATCH",
    desc: "KUALIFIKASI PIALA DUNIA CHINA VS INDONESIA Pertarungan antara dua tim sepak bola Di M9WIN, Anda memiliki kesempatan untuk menambah serunya pertandingan ini dengan memasang t*ruhan anda di big match yang mendebarkan ini.Salam Hoki M9WIN.",
    image:
      require("../../assets/images/match1.jpg"),
  },
  {
    id: "4",
    title: "JADWAL BOLA",
    desc: "Ad2stream - Timnas Indonesia kembali menghadapi tantangan besar di Kualifikasi Piala Dunia 2026 zona Asia, ketika mereka bertanding melawan Bahrain di Bahrain National Stadium pada malam hari, ",
    image:
      require("../../assets/images/match2.jpg"),
  },
  {
    id: "5",
    title: "BIG MATCH",
    desc: "KUALIFIKASI PIALA DUNIA CHINA VS INDONESIA Pertarungan antara dua tim sepak bola Di M9WIN, Anda memiliki kesempatan untuk menambah serunya pertandingan ini dengan memasang t*ruhan anda di big match yang mendebarkan ini.Salam Hoki M9WIN.",
    image:
      require("../../assets/images/match1.jpg"),
  },
  {
    id: "6",
    title: "JADWAL BOLA",
    desc: "Ad2stream - Timnas Indonesia kembali menghadapi tantangan besar di Kualifikasi Piala Dunia 2026 zona Asia, ketika mereka bertanding melawan Bahrain di Bahrain National Stadium pada malam hari, ",
    image:
      require("../../assets/images/match2.jpg"),
  },
];

const chunkArray = (arr: any[], size: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};
const groupedSports = chunkArray(sports, 6);

export default function HomeScreen() {
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

        {/* Search + Filters */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <MaterialCommunityIcons
              name="magnify"
              size={24}
              color="#fff"
              style={{ marginHorizontal: 6 }}
            />
            <TextInput
              placeholder="Search here"
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterBox}>
            <MaterialCommunityIcons name="filter-variant" size={24} color="white" />
          </TouchableOpacity>
        </View>
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
              Revolutionize your workout routine with cutting-edge technology and
              personalized coaching.
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
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


      {/* Bottom Padded Content */}
      <View style={styles.innerContainer}>
        {/* Sports Carousel */}
        <Text style={styles.sectionTitle}>Sports Collections</Text>
        <FlatList
          data={groupedSports}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.sportPage}>
              {item.map((sport) => (
                <TouchableOpacity
                  key={sport.id}
                  style={styles.sportItem}
                  onPress={() => router.push(sport.link)}
                >
                  <MaterialCommunityIcons
                    name={sport.icon as any}
                    size={32}
                    color="white"
                  />
                  <Text style={styles.sportText}>{sport.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        />

        {/* Matches Section */}
        <Text style={styles.matchTitle}>Iren Vs Indonesia Football  match</Text>
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

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 8,
    height: 42,
    marginRight: 10,
    borderColor: '#fff',
    borderWidth: 1
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: "white",
    paddingLeft: 6,
  },
  filterBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    borderColor: '#fff',
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
    marginVertical: 10,
    alignSelf: "center",
  },

  heroImage: {
    width: width,
    height: 240,
    justifyContent: "center",
  },
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
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },

  sportPage: {
    width: width * 0.7,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginRight: 15,
  },
  sportItem: {
    width: "30%",
    height: 90,
    backgroundColor: "#222",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  sportText: { 
    color: "white", 
    fontSize: 11, 
    marginTop: 4, 
    textAlign: "center"
  },

  matchTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    marginBottom: 15,
    marginTop: 15,
  },
  card: {
    width: width * 0.45,
    borderRadius: 12,
    // padding: 8,
    marginRight: 15,
  },
  cardImage: { 
    width: "100%", 
    height: 140, 
    borderRadius: 8,
  },
  cardTitle: { color: "white", fontWeight: "bold", marginTop: 5, fontSize: 14, marginBottom: 8 },
  cardDesc: { color: "#aaa", fontSize: 10, marginTop: 6 },
});
