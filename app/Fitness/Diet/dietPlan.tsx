import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PieChart from 'react-native-pie-chart'

const widthAndHeight = 180

export default function DoughnutScreen() {
  const series = [
    { value: 40, color: '#FF2E2E' }, 
    { value: 30, color: '#39FF14' }, 
    { value: 20, color: '#007BFF' }, 
  ]

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Today, {formattedDate}</Text>

      {/* Pie Chart with Chevrons */}
      <View style={styles.chartContainer}>
        <View style={styles.pieChartWrapper}>
          <TouchableOpacity style={styles.chevronLeft}>
            <Ionicons name="chevron-back-outline" size={28} color="#fff" />
          </TouchableOpacity>

          <View style={styles.pieChartBorderWrapper}>
            <PieChart widthAndHeight={widthAndHeight} series={series} cover={0.7} />
            <View style={styles.centeredTextWrapper}>
              <Text style={styles.centeredText}>540 / 1800 Calories</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.chevronRight}>
            <Ionicons name="chevron-forward-outline" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Breakdown */}
      <View style={styles.breakdownRow}>
        <Text style={[styles.breakdown, { color: "#FF2E2E" }]}>
          400{"\n"}
          <Text style={{ fontSize: 16, color: '#aaa' }}>Carbs (50%)</Text>
        </Text>
        <Text style={[styles.breakdown, { color: "#39FF14" }]}>
          100{"\n"}
          <Text style={{ fontSize: 16, color: '#aaa' }}>Fat (25%)</Text>
        </Text>
        <Text style={[styles.breakdown, { color: "#007BFF" }]}>
          100{"\n"}
          <Text style={{ fontSize: 16, color: '#aaa' }}>Protein (25%)</Text>
        </Text>
      </View>

      <View style={styles.tipRow}>
  <View style={styles.line} />
  <Text style={styles.tip}>“ Add more fiber today ! “</Text>
  <View style={styles.line} />
</View>

      {/* Meal Cards */}
      <View style={styles.mealCard}>
        <View style={[styles.iconCircle, { backgroundColor: "#FF2E2E" }]}>
          <Ionicons name="cafe-outline" size={30} color="#fff" />
        </View>
        <View style={styles.mealInfo}>
          <Text style={styles.mealTitle}>Breakfast</Text>
          <Text style={styles.mealSubtitle}>Sandwich, Apple, Cucumbers</Text>
        </View>
        <View style={styles.mealRight}>
          <Text style={[styles.mealCalories, { color: "#FF2E2E" }]}>560</Text>
          <Text style={styles.mealCalText}>CAL</Text>
          <Ionicons name="chevron-forward" size={24} color="#fff" onPress={()=>router.push('/Fitness/Diet/shopping')}/>
        </View>
      </View>

      <View style={styles.mealCard}>
        <View style={[styles.iconCircle, { backgroundColor: "#39FF14" }]}>
          <Ionicons name="fast-food-outline" size={30} color="#fff" />
        </View>
        <View style={styles.mealInfo}>
          <Text style={styles.mealTitle}>Lunch</Text>
          <Text style={styles.mealSubtitle}>Sandwich, Apple, Cucumbers</Text>
        </View>
        <View style={styles.mealRight}>
          <Text style={[styles.mealCalories, { color: "#34C759" }]}>560</Text>
          <Text style={styles.mealCalText}>CAL</Text>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </View>
      </View>

      <View style={styles.mealCard}>
        <View style={[styles.iconCircle, { backgroundColor: "#007AFF" }]}>
          <Ionicons name="pizza-outline" size={30} color="#fff" />
        </View>
        <View style={styles.mealInfo}>
          <Text style={styles.mealTitle}>Dinner</Text>
          <Text style={styles.mealSubtitle}>Sandwich, Apple, Cucumbers</Text>
        </View>
        <View style={styles.mealRight}>
          <Text style={[styles.mealCalories, { color: "#007AFF" }]}>560</Text>
          <Text style={styles.mealCalText}>CAL</Text>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </View>
      </View>

      <View style={styles.mealCard}>
        <View style={[styles.iconCircle, { backgroundColor: "#D9D9D9" }]}>
          <Ionicons name="ice-cream-outline" size={30} color="#fff" />
        </View>
        <View style={styles.mealInfo}>
          <Text style={styles.mealTitle}>Snacks</Text>
          <Text style={styles.mealSubtitle}>Sandwich, Apple, Cucumbers</Text>
        </View>
        <View style={styles.mealRight}>
          <Text style={[styles.mealCalories, { color: "#D9D9D9" }]}>560</Text>
          <Text style={styles.mealCalText}>CAL</Text>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.buttonWrapper} onPress={()=> router.push('/Fitness/Diet/dietForm')}>
        <LinearGradient
          colors={["#4776E6", "#8E54E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Your Diet Plan</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingTop: 70,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 24
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    paddingHorizontal: 24
  },
  pieChartBorderWrapper: {
    borderRadius: widthAndHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieChartWrapper: {
    width: widthAndHeight + 60,
    height: widthAndHeight,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "row",
  },
  chevronLeft: {
    position: "absolute",
    left: -70,
    top: "50%",
    transform: [{ translateY: -14 }],
    padding: 10,
  },
  chevronRight: {
    position: "absolute",
    right: -70,
    top: "50%",
    transform: [{ translateY: -14 }],
    padding: 10,
  },
  centeredTextWrapper: {
    position: 'absolute',
    width: widthAndHeight * 0.65,
    height: widthAndHeight * 0.65,
    borderRadius: (widthAndHeight * 0.65) / 2,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  breakdownRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  breakdown: { fontSize: 20, textAlign: "center", fontWeight: "600" },
  // tip: { 
  //   fontSize: 22, 
  //   color: "#fff", 
  //   textAlign: "center",
  //   top: 14,
  //   backgroundColor: '#1A1A1A',
  //   padding: 2
  // },
  tipRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: -2
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#444", 
  },
  tip: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 10, 
    fontWeight: "500",
  },

  mealCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 0, 
    borderBottomWidth: 1,
    borderColor: "#333",
    paddingHorizontal: 24,
  },

  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  mealInfo: { flex: 1 },
  mealTitle: { color: "#fff", fontSize: 18, fontWeight: "600", marginBottom: 6  },
  mealSubtitle: { color: "#aaa", fontSize: 13 },
  mealRight: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  mealCalories: { fontSize: 20, fontWeight: "700" },
  mealCalText: { fontSize: 14, color: "#aaa", marginBottom: 4 },
  buttonWrapper: { marginTop: 18, marginBottom: 30, paddingHorizontal: 24 },
  button: { borderRadius: 12, paddingVertical: 14, alignItems: "center" },
  buttonText: { fontSize: 18, fontWeight: "600", color: "#fff" },
})
