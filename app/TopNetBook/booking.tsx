import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "react-native-modal";
import { router } from "expo-router";

const BookingDetails = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedSport, setSelectedSport] = useState("Cricket"); // default

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSelectSport = (sport: string) => {
    setSelectedSport(sport);
  };
  const handleBookNow = () => {
    setModalVisible(false); 
  }

  return (
    <ScrollView style={styles.container}>
      {/* Image */}
      <Image
        source={require('../../assets/images/centre1.jpg')}
        style={styles.mainImage}
      />

      {/* Title & Price */}
      <View style={styles.header}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.title}>PK Cricket Roof Top Net</Text>
            <View style={styles.row}>
              <Text style={styles.price}>₹ 1,600 Onwards</Text>
              <Ionicons name="ellipse" size={4} color="#fff" style={{ marginHorizontal: 4 }} />
              <Text style={styles.time}>9:00am - 11:00pm</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.ratingContainer}>
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingStar}>★</Text>
              </View>
              <Text style={styles.ratingValue}>4.7</Text>
              <Text style={styles.ratingCount}>(255)</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Location Card */}
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

      {/* Sports */}
      {/* Sports */}
<View style={styles.card}>
  <TouchableOpacity onPress={toggleModal}>
    <Text style={styles.cardTitle}>Available Sports</Text>
    <View style={styles.row}>
      {["Cricket", "Chess", "Carrom"].map((sport) => (
        <View
          key={sport}
          style={[
            styles.sportButton,
            selectedSport === sport && styles.activeSport
          ]}
        >
          <Text
            style={[
              styles.sportButtonText,
              selectedSport === sport && styles.activeSportText
            ]}
          >
            {sport}
          </Text>
        </View>
      ))}
    </View>
  </TouchableOpacity>
</View>


      {/* Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select a Sport</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Ionicons name="close" size={22} color="#fff" />
            </TouchableOpacity>
          </View>

          {["Cricket", "Chess", "Carrom"].map((sport) => (
            <TouchableOpacity
              key={sport}
              style={[
                styles.option,
                selectedSport === sport && styles.selectedOption
              ]}
              onPress={() => handleSelectSport(sport)}
            >
              <Image
                source={
                  sport === "Cricket"
                    ? require('../../assets/images/Photos/cricket.png')
                    : sport === "Chess"
                    ? require("../../assets/images/Photos/chess.png")
                    : require("../../assets/images/Photos/carrom.png")
                }
                style={styles.iconImage}
              />
              <View style={{ marginLeft: 12 }}>
                <Text
                  style={[
                    styles.optionText,
                    selectedSport === sport && styles.selectedOptionText
                  ]}
                >
                  {sport}
                </Text>
                <Text style={styles.subText}>Astro Turf • Wooden Surface</Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* Book Now Button */}
          <TouchableOpacity activeOpacity={0.8} onPress={() => {handleBookNow()}}>
            <LinearGradient
              colors={["#4776E6", "#8E54E9"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.bookButton}
            >
              <Text style={styles.bookButtonText}> {selectedSport ? `Book ${selectedSport} Slot` : "Book Slot"} </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Description */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Description</Text>
        <Text style={styles.cardText}>
          Durable, long lasting and made from supreme nylon stuff with mesh size 
          of 1.7 inches that’s suitable for vigorous batting, bowling
        </Text>
      </View>

      {/* Book Now Button */}
      <TouchableOpacity activeOpacity={0.8} onPress={() => {router.push('/TopNetBook/bookSlot')}}>
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

export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 70,
    paddingHorizontal: 24,
  },
  mainImage: {
    width: "100%",
    height: 215,
    borderRadius: 10,
  },
  header: {
    marginVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  price: {
    color: "#fff",
  },
  time: {
    color: "#ccc",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  ratingBadge: {
    backgroundColor: "#39FF14",
    paddingHorizontal: 2,
    marginRight: 4,
  },
  ratingStar: {
    color: "white",
    fontSize: 12,
  },
  ratingValue: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    marginRight: 4,
  },
  ratingCount: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },

  card: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 18,
    padding: 12,
    marginBottom: 15,
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
  },
  cardText: {
    color: "#aaa",
    fontSize: 13,
  },

  locationCard: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 18,
    padding: 12,
    marginTop: 20,
    marginBottom: 15,
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

  sportButton: {
    backgroundColor: "#000",
    borderColor: "#555",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
  },
  sportButtonText: {
    color: "#aaa",
  },
  activeSport: {
    backgroundColor: "#000",
    borderColor: "#fff",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
  },
  activeSportText: {
    color: "#fff",
  },

  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#222",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  option: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 18,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  selectedOption: {
    borderColor: "#39FF14",
    backgroundColor: "#39FF141A",
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  selectedOptionText: {
    color: "#39FF14",
  },
  subText: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 4,
  },

  bookButton: {
    marginBottom: 20,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
