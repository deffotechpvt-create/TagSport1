import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BookingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/stadium.jpg")} 
          style={styles.stadiumImage}
          resizeMode="cover"
        />
        <View style={styles.topIcons}>
          <TouchableOpacity onPress={()=> router.push('/Sports/Events/ticket')}>
            <Ionicons name="close" size={24} color="#fff" style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <Ionicons name="heart-outline" size={24} color="#fff" style={{ marginRight: 10 }} />
            <Ionicons name="share-social-outline" size={24} color="#fff" />
          </View>
        </View>
      </View>

      <Text style={styles.stadiumName}>Chepauk Stadium</Text>

      <View style={styles.locationCard}>
        <View style={styles.locationHeader}>
          <Text style={styles.locationTitle}>Location</Text>
          <View style={styles.navigateRow}>
            <Text style={styles.navigateIcon}>➡️</Text>
            <Text style={styles.navigateText}>NAVIGATE</Text>
          </View>
        </View>

        <View style={styles.locationRow}>
          <Ionicons name="location-sharp" size={16} color="#aaa" style={{ marginRight: 6, marginTop: 2 }} />
          <Text style={styles.locationText}>
            13th Street. 47 W 13th St, New York, NY 10011, USA. 20 Cooper Square. 20 Cooper Square, New York, NY 10003, USA. 2nd Street Dorm.
          </Text>
        </View>
      </View>

      <View style={styles.bookingContainer}>
        <Text style={styles.sectionTitle}>Your Booking</Text>

        <View style={styles.bookingDetailsRow}>
          {/* Date */}
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Date</Text>
            <Text style={styles.detailValue}>16 August 2023</Text>
          
            <Text style={styles.detailLabel}>Time</Text>
            <Text style={styles.detailValue}>11:00am - 12:30pm</Text>
          </View>

          {/* Amenities */}
          <View style={styles.amenitiesColumn}>
            <View style={styles.amenityRow}>
                <Text style={styles.amenityTick}>✔</Text>
                <Text style={styles.amenityText}>Parking</Text>
            </View>
            <View style={styles.amenityRow}>
                <Text style={styles.amenityTick}>✔</Text>
                <Text style={styles.amenityText}>Lockers</Text>
            </View>
            <View style={styles.amenityRow}>
                <Text style={styles.amenityTick}>✔</Text>
                <Text style={styles.amenityText}>Washroom</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bookingContainer}>
        <Text style={styles.sectionTitle}>Price Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Ticket Amount</Text>
          <Text style={styles.detailValue}>₹ 2999</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Taxes & Other Fees</Text>
          <Text style={styles.detailValue}>₹ 30</Text>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <LinearGradient
        colors={["#4776E6", "#8E54E9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.bookButton}
        >
        <Text style={styles.bookButtonText}>Book Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  imageContainer: {
    position: "relative",
    marginHorizontal: 24,
    marginTop: 45,
  },
  stadiumImage: {
    width: "100%",
    height: 220,
    borderRadius: 8,
  },
  topIcons: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between", // puts close left and rightIcons right
    alignItems: "center",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  stadiumName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: "bold",
    marginVertical: 12,
    marginHorizontal: 24,
  },
  locationCard: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 24,
    marginBottom: 10,
  },
  locationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  locationTitle: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  locationText: {
    color: "#aaa",
    fontSize: 13,
    flex: 1,
  },
  navigateRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  navigateIcon: { 
    fontSize: 16, 
    marginRight: 6, 
  },
  navigateText: {
    color: "#1E90FF",
    fontWeight: "600",
  },
  bookingContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: "600",
    marginBottom: 8,
  },
  bookingDetailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 8,
  },
  detailColumn: {
    flexDirection: "column",
    marginRight: 16,
  },
  detailLabel: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#fff',
    fontWeight: "600",
  },
  amenitiesColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  amenityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    marginHorizontal: 4
  },
  amenityTick: {
    color: "#1E90FF", // blue color
    fontSize: 18,
    marginRight: 6,
  },
  amenityText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#aaa",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  bookButton: {
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: "#6A5ACD",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default BookingScreen;
