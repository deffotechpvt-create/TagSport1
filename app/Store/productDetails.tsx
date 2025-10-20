import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const similarProducts = [
  {
    id: "1",
    name: "Volleyball kit",
    desc: "Sports & Fitness Full …",
    price: "₹ 2,800",
    oldPrice: "₹ 3,200",
    discount: "30% off",
    image: require("../../assets/images/Products/volleyball.png"),
  },
  {
    id: "2",
    name: "Badminton kit",
    desc: "Sports & Fitness Full …",
    price: "₹ 2,800",
    oldPrice: "₹ 3,200",
    discount: "30% off",
    image: require("../../assets/images/Products/badminton.png"),
  },
  {
    id: "3",
    name: "Tennis kit",
    desc: "Sports & Fitness Full …",
    price: "₹ 2,800",
    oldPrice: "₹ 3,200",
    discount: "30% off",
    image: require("../../assets/images/Products/tennis.png"),
  },
];  

function InfoTable({ title, data }: { title: string; data: { label: string; value: string }[] }) {
  return (
    <View style={styles.infoTableContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.table}>
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.row,
              index === data.length - 1 && { borderBottomWidth: 0 },
            ]}
          >
            <Text style={styles.cellLabel}>{item.label}</Text>
            <Text style={styles.cellValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function ProductDetailsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require("../../assets/images/Products/banner.jpg")}
          style={styles.productImage} 
        >
          <TouchableOpacity 
            style={styles.backIcon}
            onPress={() => router.push('/Store/wishList')}
          >
            <Ionicons name="chevron-back" size={26} color="#000" />
          </TouchableOpacity>

          <View style={styles.iconRow}>
            <Ionicons name="heart-outline" size={24} color="#000" style={{ marginRight: 12 }} />
            <Ionicons name="share-social-outline" size={24} color="#000" />
          </View>
        </ImageBackground>
          
        

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹ 2,800</Text>
          <Text style={styles.oldPrice}>₹ 4,000</Text>
          <Text style={styles.discount}>30% off</Text>
        </View>

        <Text style={styles.title}>Cricket kit</Text>
        <Text style={styles.description}>
          Sports & Fitness Full represents a lifestyle dedicated to physical
          well-being, athletic performance, and overall health. Whether you're
          hitting the gym, training for a marathon, practicing yoga, or simply
          staying active, embracing a full commitment to sports and fitness
          helps build strength, boost endurance, and enhance mental clarity.
        </Text>

        <View style={styles.ratingRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons
              key={star}
              color={star <= 4 ? "#39FF14E5" : "#FFFFFF99"}
              name={"star"}
              size={18}
              style={{ marginRight: 4 }}
            />
          ))}
          <Text style={styles.ratingText}>4.0</Text>
          <Text style={styles.reviews}> 18,845 ratings</Text>
        </View>

        <View style={styles.deliveryCard}>
          <FontAwesome5
            name="truck"
            size={20}
            color="white"
            style={{ marginRight: 15 }}
          />
          <Text style={styles.deliveryText}>
            EXPRESS <Text style={{ color: "#39FF14" }}>Free</Text>. Delivery in
            2 days,{"\n"}Wednesday
          </Text>
          <Ionicons
            name="chevron-forward"
            size={22}
            color="white"
            style={{ marginLeft: "auto" }}
          />
        </View>

        <InfoTable
          title="General Details"
          data={[
            { label: "Part Number", value: "SLO_BAT" },
            { label: "Cover Include", value: "Yes" },
            { label: "Barrell Material", value: "Made with high quality plastic" },
            { label: "Toe Guard", value: "Yes" },
            { label: "Color", value: "Red, Black" },
            { label: "Suitable For", value: "Tennis ball" },
            { label: "Sport Type", value: "Cricket" },
            { label: "Net Quantity", value: "1" },
          ]}
        />

        <InfoTable
          title="Dimensions"
          data={[
            { label: "Width", value: "5 cm" },
            { label: "Height", value: "81 cm" },
            { label: "Depth", value: "5 cm" },
          ]}
        />

        <Text style={[styles.sectionTitle, { paddingHorizontal: 16 }]}>Similar Products</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={similarProducts}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={({ item }) => (
            <View style={styles.similarCard}>
              {/* Image with heart icon */}
              <ImageBackground source={item.image} style={styles.similarImage} imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                <Ionicons
                  name="heart-outline"
                  size={22}
                  color="#000"
                  style={styles.similarHeart}
                />
              </ImageBackground>

              {/* Product Info */}
              <Text style={styles.similarName}>{item.name}</Text>
              <Text style={styles.similarDesc}>{item.desc}</Text>

              {/* Price Row */}
              <View style={styles.similarPriceRow}>
                <Text style={styles.similarPrice}>{item.price}</Text>
                <Text style={styles.similarOldPrice}>{item.oldPrice}</Text>
                <Text style={styles.similarDiscount}>{item.discount}</Text>
              </View>
            </View>
          )}
        />

        <TouchableOpacity>
          <LinearGradient
            colors={["#4776E6", "#8E54E9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.bookBtn}
          >
            <Text style={styles.bookBtnText}>Book Now</Text>
          </LinearGradient>
        </TouchableOpacity>
          
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1A1A1A", paddingTop: 45 },
  productImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 15,
    overflow: "hidden", 
  },
  backIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 6,
    borderRadius: 20,
    zIndex: 10,
  },
  iconRow: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 24,
  },
  price: { fontSize: 22, color: "white", fontWeight: "600" },
  oldPrice: {
    fontSize: 12,
    color: "#fff",
    textDecorationLine: "line-through",
    fontWeight: "600",
    marginLeft: 10,
    marginTop: 5,
  },
  discount: {
    fontSize: 22,
    color: "#39FF14E5",
    marginLeft: 10,
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
    paddingHorizontal: 24,
    fontWeight: "600",
  },
  description: {
    fontSize: 12,
    color: "#fff",
    margin: 10,
    fontWeight: "600",
    lineHeight: 20,
    paddingHorizontal: 24,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingLeft: 30,
    marginBottom: 25,
  },
  ratingText: { color: "#39FF14E5", marginHorizontal: 10, fontSize: 14 },
  reviews: { color: "#007BFF", marginTop: 4, fontSize: 12, fontWeight: "600" },
  deliveryCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#333",
    marginBottom: 20,
  },
  deliveryText: {
    fontSize: 14,
    color: "white",
    flexShrink: 1,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    margin: 10,
  },
  infoTableContainer: { marginBottom: 20, paddingHorizontal: 18 },
  table: {
    borderBottomWidth: 1,
    borderColor: "#333",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,  
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  cellLabel: { 
    color: "#aaa", 
    fontSize: 12,
    width: 160
  },
  cellValue: { color: "white", fontSize: 12, maxWidth: "60%"},
  
  similarCard: {
    marginTop: 10,
    marginHorizontal: 10,  
    borderRadius: 8,
    height: 200,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: '#FFFFFF40',
  },

  similarImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  similarHeart: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: '#000'
  },
  similarName: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 8,
    marginHorizontal: 6,
    padding: 4
  },
  similarDesc: {
    color: "#aaa",
    fontSize: 12,
    marginHorizontal: 6,
    marginBottom: 6,
    padding: 4
  },
  similarPriceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 6,
    padding: 4,
    marginBottom: 12,
  },
  similarPrice: { 
    fontSize: 14, 
    fontWeight: "600", 
    color: "white" 
  },
  similarOldPrice: {
    fontSize: 8,
    color: "#aaa",
    textDecorationLine: "line-through",
    marginLeft: 6,
  },
  similarDiscount: {
    fontSize: 14,
    color: "#39FF14E5",
    marginLeft: 6,
    fontWeight: "600",
  },

  bookBtn: {
    marginVertical: 20,
    borderRadius: 8,
    marginHorizontal: 24,
    padding: 15,
    alignItems: "center",
  },
  bookBtnText: { color: "white", fontSize: 18, fontWeight: "600" },
});
