import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const WishListCard = ({ item }: { item: any }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer} >
        <TouchableOpacity onPress={()=>router.push(item.link)}>
          <Image source={item.image} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={styles.heartIcon}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={20}
            color={liked ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹ {item.price}</Text>
          <Text style={styles.strike}>₹ {item.originalPrice}</Text>
          <Text style={styles.discount}>{item.discount}% off</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function WishlistScreen() {
  const data = [
    {
      id: "1",
      title: "Cricket kit",
      category: "Sports & Fitness Full…",
      price: "2800",
      originalPrice: "4000",
      discount: 30,
      image: require("../../assets/images/Products/cricket.png"),
      link: '/Products/productDetails' as const,
    },
    {
      id: "2",
      title: "Volleyball kit",
      category: "Sports & Fitness Full…",
      price: "2800",
      originalPrice: "4000",
      discount: 30,
      image: require("../../assets/images/Products/volleyball.png"),
      link: '/Products/wishList' as const,
    },
    {
      id: "3",
      title: "Hockey kit",
      category: "Sports & Fitness Full…",
      price: "2800",
      originalPrice: "4000",
      discount: 30,
      image: require("../../assets/images/Products/hockey.png"),
      link: '/Products/wishList' as const,
    },
    {
      id: "4",
      title: "Tennis kit",
      category: "Sports & Fitness Full…",
      price: "2800",
      originalPrice: "4000",
      discount: 30,
      image: require("../../assets/images/Products/tennis.png"),
      link: '/Products/wishList' as const,
    },
    {
      id: "5",
      title: "Badminton kit",
      category: "Sports & Fitness Full…",
      price: "2800",
      originalPrice: "4000",
      discount: 30,
      image: require("../../assets/images/Products/badminton.png"),
      link: '/Products/wishList' as const,
    },
    {
      id: "4",
      title: "Chess board",
      category: "Sports & Fitness Full…",
      price: "2800",
      originalPrice: "4000",
      discount: 30,
      image: require("../../assets/images/Products/chess.png"),
      link: '/Products/wishList' as const,
    },
    {
      id: "7",
      title: "Hockey kit",
      category: "Sports & Fitness Full…",
      price: "2800",
      originalPrice: "4000",
      discount: 30,
      image: require("../../assets/images/Products/hockey.png"),
      link: '/Products/wishList' as const,
    },
    {
      id: "8",
      title: "Tennis kit",
      category: "Sports & Fitness Full…",
      price: "2800",
      originalPrice: "4000",
      discount: 30,
      image: require("../../assets/images/Products/tennis.png"),
      link: '/Products/wishList' as const,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.header}>My Wishlist</Text>
      </View>
      <Text style={styles.subHeader}>{data.length} items</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <WishListCard item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 40,
    paddingHorizontal: 16
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 14,
    top: -2,
  },
  subHeader: {
    color: "#aaa",
    marginBottom: 15,
    paddingHorizontal: 55,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    margin: 4,
    padding: 8,
    width: (width - 40) / 2,
  },
  imageContainer: {
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 3,
  },
  details: {
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
  category: {
    color: "#aaa",
    fontSize: 12,
    marginVertical: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  price: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 5,
  },
  strike: {
    color: "#888",
    fontSize: 12,
    textDecorationLine: "line-through",
    marginRight: 5,
  },
  discount: {
    color: "limegreen",
    fontSize: 12,
    fontWeight: "600",
  },
  button: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#aaa",
    paddingVertical: 6,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
