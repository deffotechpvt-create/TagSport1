import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SportsPage() {
  const people = [
    {
      id: "1",
      name: "Ann",
      skills: "Cricket | Chess | Carrom",
      image: require("../../assets/images/Photos/prof1.jpg"),
      cover: require("../../assets/images/Photos/CImg1.png"),
    },
    {
      id: "2",
      name: "Rose",
      skills: "Cricket | Chess | Carrom",
      image: require("../../assets/images/Photos/prof2.jpg"),
      cover: require("../../assets/images/Photos/CImg2.png"),
    },
    {
      id: "3",
      name: "Jason",
      skills: "Cricket | Chess | Carrom",
      image: require("../../assets/images/Photos/prof3.jpg"),
      cover: require("../../assets/images/Photos/CImg3.png"),
    },
    {
      id: "4",
      name: "Sam",
      skills: "Cricket | Chess | Carrom",
      image: require("../../assets/images/Photos/prof4.jpg"),
      cover: require("../../assets/images/Photos/CImg4.png"),
    },
  ];

  const grounds = [
    {
      id: "1",
      name: "PK Cricket Roof Net",
      desc: "Durable, long lasting and made from supreme nylon stuff with mesh size of 1.7 inches that’s suitable for vigorous batting, bowling",
      image: require("../../assets/images/Photos/ground1.jpg"),
    },
    {
      id: "2",
      name: "PK Cricket Roof Net",
      desc: "Durable, long lasting and made from supreme nylon stuff with mesh size of 1.7 inches that’s suitable for vigorous batting, bowling",
      image: require("../../assets/images/Photos/ground2.jpg"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Top Section: Map + Search + Location */}
      <View style={styles.mapContainer}>
        <ImageBackground
          source={require("../../assets/images/Photos/map.jpg")}
          style={styles.mapImage}
        >
          <TouchableOpacity style={styles.locationBtn}>
            <Ionicons name="locate" size={18} color="#1A1A1A" />
            <Text style={styles.locationText}>Use my location</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* Search bar below map */}
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Search grounds or people"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      {/* People Cards */}
      <FlatList
        data={people}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={styles.personCard}>
            <ImageBackground source={item.cover} style={styles.coverImage}>
              <View style={styles.avatarWrapper}>
                <Image source={ item.image } style={styles.avatar} />
                <Text style={styles.avatarName}>{item.name}</Text>
              </View>
              <TouchableOpacity style={styles.closeBtn}>
                <Ionicons name="close" size={18} color="#fff" />
              </TouchableOpacity>
            </ImageBackground>
            <Text style={styles.skills}>{item.skills}</Text>
            <TouchableOpacity style={styles.connectBtn}>
              <Text style={styles.connectText}>Connect</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Grounds Section */}
      {grounds.map((item) => (
        <View key={item.id} style={styles.groundCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.groundTitle}>{item.name}</Text>
            <Text style={styles.groundDesc}>{item.desc}</Text>
            <TouchableOpacity style={styles.bookingBtn} onPress={()=> router.push('/TopNetBook/booking')}>
              <Text style={styles.bookingText}>Booking</Text>
            </TouchableOpacity>
          </View>
          <Image source={item.image} style={styles.groundImage} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24,
    paddingTop: 70,
  },

  // Map + Search
  mapContainer: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 40,
  },
  mapImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    justifyContent: "flex-end",
  },
  locationBtn: {
    position: "absolute",
    bottom: 12,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  locationText: {
    color: "#1A1A1A",
    fontSize: 12,
    marginLeft: 4,
  },
  searchWrapper: {
    alignSelf:'center',
    top: -50,
    width: '80%',
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    textAlign: "center",
    elevation: 3,
  },

  // People
  personCard: {
    backgroundColor: "#eee",
    borderRadius: 12,
    padding: 0,
    marginBottom: 16,
    width: "48%",
    height: 200,
    overflow: "hidden",
  },
  coverImage: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatarWrapper: {
    alignItems: "center",
  },
  avatar: {
    width: 85,
    height: 80,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: "#fff",
    marginTop: 50
  },
  avatarName: {
    position: "absolute",
    bottom: -18,
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    fontSize: 12,
    paddingHorizontal: 6,
    borderRadius: 8,
    marginTop: 70
  },
  closeBtn: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 12,
    padding: 2,
  },
  skills: {
    color: "#000",
    fontSize: 12,
    alignSelf: 'center',
    width: 90,
    textAlign: "center",
    marginVertical: 8,
    marginTop: 60
  },
  connectBtn: {
    borderWidth: 1,
    borderColor: "#007BFF",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignSelf: "center",
    marginBottom: 10,
  },
  connectText: {
    color: "#1A1A1A",
    fontWeight: "600",
    fontSize: 13,
  },

  // Grounds
  groundCard: {
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    height: 200,
  },
  groundTitle: {
    color: "#1A1A1A",
    fontSize: 14,
    fontWeight: "600",
  },
  groundDesc: {
    color: "#1A1A1A",
    fontSize: 12,
    marginVertical: 6,
    width: 190,
  },
  groundImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
    marginLeft: 8,
    marginTop: -10,
  },
  bookingBtn: {
    borderWidth: 1,
    borderColor: "#007BFF",
    paddingVertical: 6,
    borderRadius: 16,
    alignItems: "center",
    width: 250,
    marginTop: 10,
    marginLeft: "10%",
  },
  bookingText: {
    color: "#1A1A1A",
    fontWeight: "600",
    fontSize: 12,
  },
});
