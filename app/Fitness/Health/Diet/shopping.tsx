import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Shopping = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../../../assets/images/Health/avacadoBread.jpg")} 
        style={styles.image}
      />
      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()} // or any function you want
      >
        <Ionicons name="chevron-back" size={26} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About :</Text>
        <Text style={styles.description}>
                Food is an essential part of life. It gives us the energy and nutrients we need to grow, work, and stay healthy. 
            Different cultures around the world have unique dishes and flavors that reflect their traditions and environments.
            From spicy Indian curries to Italian pasta and Japanese sushi, food brings people together and tells stories about history and heritage.
            Besides nourishment, food also offers comfort and joy in everyday life.
        </Text>

        <View style={styles.nutrition}>
          <Text style={styles.nutritionText}>Prepare timing: <Text style={styles.bold}>10 min</Text></Text>
          <Text style={styles.nutritionText}>Calories: <Text style={styles.bold}>560 Cal</Text></Text>
          <Text style={styles.nutritionText}>Carbs: <Text style={styles.bold}>32g</Text>   Protein: <Text style={styles.bold}>18g</Text>   Fat: <Text style={styles.bold}>20g</Text></Text>
        </View>

        <View style={styles.ingredientsSection}>
          <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            <Text style={styles.sectionTitle}>Quantity</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.ingredient}>🥑 Avocado</Text>
            <Text style={styles.quantity}>1/2 piece</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.ingredient}>🍞 Whole grain bread</Text>
            <Text style={styles.quantity}>1 slice</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.ingredient}>🥚 Boiled eggs</Text>
            <Text style={styles.quantity}>2 nos</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.ingredient}>🧂 Salt & pepper</Text>
            <Text style={styles.quantity}>To taste</Text>
          </View>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.buttonWrapper} onPress={()=> router.push('/Fitness/Health/Diet/dietPlan')}>
        <LinearGradient
          colors={["#4776E6", "#8E54E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Shopping Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A", 
    paddingTop: 45
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 30
  },
  backButton: {
    position: "absolute",
    top: 10, 
    left: 10,
    backgroundColor: "rgba(0,0,0,0.6)", 
    borderRadius: 20,
    padding: 6,
  },
  content: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
    marginRight: 180
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
    color: "#ccc",
    marginBottom: 16,
  },
  nutrition: {
    marginBottom: 20,
  },
  nutritionText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "600",
  },
  bold: {
    fontWeight: "600",
    color: "#ccc",
  },
  ingredientsSection: {
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    marginBottom: 12,
  },
  ingredient: {
    flex: 1,
    fontSize: 14,
    color: "#fff",
    paddingLeft: 10
  },
  quantity: {
    width: 100, 
    fontSize: 14,
    color: "#ccc",
  },
  buttonWrapper: {
    marginHorizontal: 16,
    marginBottom: 30,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default Shopping;
