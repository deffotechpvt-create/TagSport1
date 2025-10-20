import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const classesData = [
  {
    id: "1",
    name: "Sam Sports Academy",
    rating: "4.7 (255 Ratings)",
    image: require("../../assets/images/bookclass1.png")
  },
  {
    id: "2",
    name: "Star Sports Academy",
    rating: "4.7 (255 Ratings)",
    image: require("../../assets/images/bookclass2.png")
  },
  {
    id: "3",
    name: "Mini Sports Academy",
    rating: "4.7 (255 Ratings)",
    image: require("../../assets/images/bookclass3.jpg")
  },
];

const BookClasses = () => {
  const renderClassCard = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.separator} />
      {/* Image + Details Row */}
      <View style={styles.cardRow}>
        <Image source={item.image} style={styles.cardImage} resizeMode="cover" />

        <View style={styles.cardDetails}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <View style={styles.ratingRow}>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>★</Text>
            </View>
            <Text style={styles.ratingCount}>{item.rating}</Text>
          </View>

          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconCircle}>
              <Ionicons name="call-outline" size={18} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <FontAwesome name="location-arrow" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Book Now Button */}
      <TouchableOpacity style={styles.bookNowWrapper} onPress={()=>{router.push('/Sports/CoachingCentre/centre1')}}>
        <LinearGradient
          colors={["#4B6EF6", "#9B6EF6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.bookNowButton}
        >
          <Text style={styles.bookNowText}>Book Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* <TouchableOpacity onPress={() => router.push('/')}>
            <Ionicons name="close" size={26} color="white" />
        </TouchableOpacity> */}
        <Text style={styles.headerTitle}>Book Classes</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* Search Bar */}
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

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Popular Cricket Sports Classes</Text>

      {/* List */}
      <FlatList
        data={classesData}
        renderItem={renderClassCard}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
};

export default BookClasses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 16,
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
    borderWidth: 1,
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
    color: "#fff",
    fontSize: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
  },

  separator: {
    borderTopWidth: 1,
    borderTopColor: "#aaa",
    width: '100%',
    marginBottom: 12,
  },
  card: {
    marginBottom: 20,
    padding: 6,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 16,
  },
  cardImage: {
    width: 110,
    height: 140,
    borderRadius: 8
  },
  cardDetails: {
    flex: 1,
    marginLeft: 12
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6
  },
  ratingBadge: {
    backgroundColor: "#2ECC71",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 6
  },
  ratingText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  },
  ratingCount: {
    color: "#aaa",
    fontSize: 13
  },
  iconRow: {
    flexDirection: "row",
    marginTop: 10
  },
  iconCircle: {
    borderColor: '#fff',
    borderWidth: 1,
    padding: 15,
    borderRadius: 50,
    width:32,
    height: 32, 
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  bookNowWrapper: {
    marginTop: 25,
    paddingHorizontal: 16,
  },
  bookNowButton: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center"
  },
  bookNowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
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
