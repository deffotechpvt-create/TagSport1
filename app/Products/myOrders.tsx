// OrdersScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const OrderCard = ({ item }: { item: any }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <View style={styles.details}>
        <Text style={styles.date}>Delivered on {item.date}</Text>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.stars}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Ionicons
              key={index}
              name="star"
              size={24}
              color="#bbb"
              style={{ marginRight: 4 }}
            />
          ))}
        </View>

        <Text style={styles.rateNow}>Rate this product now</Text>
      </View>

      <Ionicons name="chevron-forward" size={24} color="#aaa" style={{bottom: 30, right: 40}}/>
    </View>
  );
};

export default function OrdersScreen() {
  const orders = [
    {
      id: "1",
      title: "Cricket Bat with one year…",
      date: "Apr 28",
      image: require("../../assets/images/Products/bat.png"),
    },
    {
      id: "2",
      title: "Cricket Ball with one year…",
      date: "Apr 28",
      image: require("../../assets/images/Products/ball.png"),
    },
    {
      id: "3",
      title: "Carrom board with one year…",
      date: "Apr 28",
      image: require("../../assets/images/Products/chessboard.png"),
    },
    {
      id: "4",
      title: "Cricket stumps with one year…",
      date: "Apr 28",
      image: require("../../assets/images/Products/stump.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.header}>My Orders</Text>
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 70,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
    marginBottom: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 14,  
    top: -2
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 30,
  },
  image: {
    marginHorizontal: 20,
  },
  details: {
    flex: 1,
  },
  date: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 15,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 15,
    paddingVertical: 3
  },
  rateNow: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
