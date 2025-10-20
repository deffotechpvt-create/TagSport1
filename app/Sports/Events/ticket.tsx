import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const seats = [
  { id: "1", sector: "Sector 345", row: "Row 8", type: "Behind the Stumps", price: 2999, image: require("../../../assets/images/Ticket/1.png") },
  { id: "2", sector: "Sector 145", row: "Row 6", type: "Behind the Stumps", price: 1999, image: require("../../../assets/images/Ticket/2.png") },
  { id: "3", sector: "Sector 346", row: "Row 5", type: "Behind the Stumps", price: 999, image: require("../../../assets/images/Ticket/3.png") },
  { id: "4", sector: "Sector 347", row: "Row 7", type: "Behind the Stumps", price: 2999, image: require("../../../assets/images/Ticket/4.png") },
  { id: "5", sector: "Sector 349", row: "Row 12", type: "Behind the Stumps", price: 1999, image: require("../../../assets/images/Ticket/5.png") },
];

const Ticket = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/home')} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tickets</Text>
        <View style={{ width: 24 }} /> 
      </View>
      <ScrollView>
        <View style={styles.videoContainer}>
          <View style={styles.videoWrapper}>
            <ImageBackground 
              source={require("../../../assets/images/Cricket/video.png")}
              style={styles.videoThumbnail}
              imageStyle={{ borderRadius: 12 }}
            >
              <Image 
                  source={require("../../../assets/images/top.png")}
                  style={styles.topOverlay}
                  resizeMode="cover"
              />
              <Ionicons 
                  name="play-circle" 
                  size={34} 
                  color="white" 
                  style={styles.playIcon} 
              />
              <Image 
                  source={require("../../../assets/images/bottom.png")}
                  style={styles.bottomOverlay}
                  resizeMode="cover"
              />
            </ImageBackground>
          </View>
        </View>

        <Text style={styles.seatsAvailable}>
          192 Seats Available
        </Text>

        <FlatList
          data={seats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={()=> router.push('/Sports/Events/bookingScreen')}>
              <Image source={item.image} style={styles.thumbnail} resizeMode="cover" />
              <View style={styles.cardContent}>
                <Text style={styles.sector}>{item.sector}</Text>
                <Text style={styles.details}>{item.row} • {item.type}</Text>
                <Text style={styles.price}>₹ {item.price}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Ionicons name="chevron-forward" size={20} color="white" />
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 40
  },
  
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    // paddingVertical: 16,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  videoContainer: {
    width: "100%",
    height: 220,
    marginTop: 15,
  },
  videoWrapper: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  videoThumbnail: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
  },
  topOverlay: {
    position: "absolute",
    top: 5,
    left: 0,
    width: "100%",
    height: 80,
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 60,
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  seatsAvailable: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    margin: 15,
  },
  card: {
    flexDirection: "row",
    // marginHorizontal: 12,
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: '#fff',
    overflow: "hidden",
  },
  thumbnail: {
    margin: 24,
    width: 110,
    height: 70,
  },
  cardContent: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
  sector: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    color: "#bbb",
  },
  price: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  arrowContainer: {
    justifyContent: "center",
    paddingRight: 24,
  },
});
