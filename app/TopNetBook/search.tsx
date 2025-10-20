import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SportsPage() {
  const [query, setQuery] = useState("");

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
      skills: "Football | Badminton | Tennis",
      image: require("../../assets/images/Photos/prof2.jpg"),
      cover: require("../../assets/images/Photos/CImg2.png"),
    },
    {
      id: "3",
      name: "Jason",
      skills: "Cricket | Volleyball | Chess",
      image: require("../../assets/images/Photos/prof3.jpg"),
      cover: require("../../assets/images/Photos/CImg3.png"),
    },
    {
      id: "4",
      name: "Sam",
      skills: "Basketball | Chess | Carrom",
      image: require("../../assets/images/Photos/prof4.jpg"),
      cover: require("../../assets/images/Photos/CImg4.png"),
    },
  ];

  const grounds = [
    {
      id: "1",
      name: "PK Cricket Roof Net",
      desc: "Durable, long lasting and made from supreme nylon stuff with mesh size of 1.7 inches that's suitable for vigorous batting, bowling ",
      image: require("../../assets/images/Photos/ground1.jpg"),
    },
    {
      id: "2",
      name: "Blue Turf Football Arena",
      desc: "Durable, long lasting and made from supreme nylon stuff with mesh size of 1.7 inches that's suitable for vigorous batting, bowling ",
      image: require("../../assets/images/Photos/ground2.jpg"),
    },
  ];

  const filteredPeople = people.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.skills.toLowerCase().includes(query.toLowerCase())
  );

  const filteredGrounds = grounds.filter((g) =>
    g.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      {/* Map Section */}
      <View style={styles.mapContainer}>
        <ImageBackground
          source={require("../../assets/images/Photos/map.jpg")}
          style={styles.mapImage}
        >
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => router.push('/TopNetBook/addCalendar')}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.locationBtn}>
            <Ionicons name="locate" size={18} color="#1A1A1A" />
            <Text style={styles.locationText}>Use my location</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* Search bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchInputWrapper}>
          <Ionicons
            name="search"
            size={18}
            color="#888"
            style={{ marginLeft: 8 }}
          />
          <TextInput
            placeholder="Search grounds or people"
            placeholderTextColor="#888"
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
          />
        </View>
      </View>

      {/* People Cards */}
      <FlatList
        data={filteredPeople.length ? filteredPeople : people}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={styles.personCard}>
            <ImageBackground source={item.cover} style={styles.coverImage}>
              <View style={styles.avatarWrapper}>
                <Image source={item.image} style={styles.avatar} />
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

      {/* Grounds Cards */}
      {(filteredGrounds.length ? filteredGrounds : grounds).map((item) => (
        <View key={item.id} style={styles.groundCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.groundTitle}>{item.name}</Text>
            <Text style={styles.groundDesc}>{item.desc}</Text>
            <TouchableOpacity
              style={styles.bookingBtn}
              onPress={() => router.push("/TopNetBook/booking")}
            >
              <Text style={styles.bookingText}>Booking</Text>
            </TouchableOpacity>
          </View>
          <Image source={item.image} style={styles.groundImage} />
        </View>
      ))}

      {/* No results message */}
      {filteredPeople.length === 0 &&
        filteredGrounds.length === 0 && (
          <Text style={styles.noResults}>No results found.</Text>
        )}
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
  backIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 8,
    borderRadius: 20,
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
    alignSelf: "center",
    top: -50,
    width: "90%",
  },
  searchInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 8,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: "#000",
  },

  // People cards
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
    marginTop: 50,
  },
  avatarName: {
    position: "absolute",
    bottom: -18,
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    fontSize: 12,
    paddingHorizontal: 6,
    borderRadius: 8,
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
    alignSelf: "center",
    width: 110,
    textAlign: "center",
    marginVertical: 8,
    marginTop: 60,
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

  // Grounds cards
  groundCard: {
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    padding: 30,
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
    height: 90
  },
  groundImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    // marginLeft: 8,
    marginTop: -30,
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
  noResults: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 40,
    fontSize: 14,
  },
});
