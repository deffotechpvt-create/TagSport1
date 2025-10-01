import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const HomeScreen = () => {
  const exercises = [
    {
      id: "1",
      title: "Cardio",
      subtitle: "Full Body",
      img: require("../../assets/images/Photos/v1.jpg"),
    },
    {
      id: "2",
      title: "Pilates",
      subtitle: "Increase muscles",
      img: require("../../assets/images/Photos/v2.jpg"),
    },
    {
      id: "3",
      title: "Cardio",
      subtitle: "Full Body",
      img: require("../../assets/images/Photos/v1.jpg"),
    },
    {
      id: "4",
      title: "Pilates",
      subtitle: "Increase muscles",
      img: require("../../assets/images/Photos/v2.jpg"),
    },
    {
      id: "5",
      title: "Cardio",
      subtitle: "Full Body",
      img: require("../../assets/images/Photos/v1.jpg"),
    },
    {
      id: "6",
      title: "Pilates",
      subtitle: "Increase muscles",
      img: require("../../assets/images/Photos/v2.jpg"),
    },
  ];

  const programs = [
    { day: 1, img: require("../../assets/images/Photos/v3.jpg") },
    { day: 2, img: require("../../assets/images/Photos/v4.jpg") },
    { day: 3, img: require("../../assets/images/Photos/v3.jpg") },
    { day: 4, img: require("../../assets/images/Photos/v4.jpg") },
  ];

  const ProgramCard = ({ day, img }: { day: number; img: any }) => (
    <View style={styles.programCard}>
      <Image source={img} style={styles.programImage} />
      <Ionicons
        name="play-circle"
        size={40}
        color="white"
        style={styles.playOverlay}
      />
      <Text style={styles.programText}>Day {day}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Dropdown */}
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Select your level</Text>
          <Ionicons name="chevron-down" size={20} color="#fff" />
        </TouchableOpacity>

        {/* Available Training */}
        <Text style={styles.sectionTitle}>Available training</Text>
        <Text style={styles.sectionSubtitle}>Book immediately</Text>

        <View style={styles.trainingRow}>
          {[
            {
              title: "Running",
              img: require("../../assets/images/Photos/running.png"),
            },
            {
              title: "Stretch",
              img: require("../../assets/images/Photos/stretch.png"),
            },
            {
              title: "Meditation",
              img: require("../../assets/images/Photos/medidation.png"),
            },
            {
              title: "Cardio",
              img: require("../../assets/images/Photos/cardio.png"),
            },
          ].map((item, idx) => (
            <View key={idx} style={styles.trainingItem}>
              <Image source={item.img} style={styles.trainingImage} />
              <Text style={styles.trainingLabel}>{item.title}</Text>
            </View>
          ))}
        </View>

        {/* Exercises */}
        <Text style={styles.sectionTitle}>Exercises</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.exerciseRow}
        >
          {exercises.map((item) => (
            <View key={item.id} style={styles.exerciseCard}>
              <Image source={item.img} style={styles.exerciseImage} />
              <Ionicons
                name="play-circle"
                size={40}
                color="red"
                style={styles.playIcon}
              />
              <Text style={styles.exerciseTitle}>{item.title}</Text>
              <Text style={styles.exerciseSubtitle}>{item.subtitle}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Programs */}
        <Text style={styles.sectionTitle}>Programs</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.programRow}
        >
          {programs
            .sort((a, b) => a.day - b.day) // ✅ ensures correct Day order
            .map((item) => (
              <ProgramCard key={item.day} day={item.day} img={item.img} />
            ))}
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#3b82f6" />
          <Text style={[styles.navText, { color: "#3b82f6" }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={()=> router.push('/Booking/bookEvent')}>
          <Ionicons name="calendar" size={22} color="#fff" />
          <Text style={styles.navText}>Book Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={()=> router.push('/Booking/bookClass')}>
          <Ionicons name="barbell" size={22} color="#fff" />
          <Text style={styles.navText}>Book Class</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={()=> router.push('/Booking/profile')}>
          <Ionicons name="person" size={22} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 70,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 24,
    marginHorizontal: 24,
  },
  dropdownText: {
    color: "#fff",
    fontSize: 18,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    marginTop: 12,
    paddingHorizontal: 24,
  },
  sectionSubtitle: {
    color: "#aaa",
    fontSize: 14,
    marginTop: -18,
    marginBottom: 16,
    paddingHorizontal: 24,
  },

  trainingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
    paddingHorizontal: 24,
  },
  trainingItem: {
    alignItems: "center",
  },
  trainingImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 6,
  },
  trainingLabel: {
    color: "#fff",
    fontSize: 16,
  },

  // Exercises
  exerciseRow: { 
    marginBottom: 18,
    paddingHorizontal: 24,
  },
  exerciseCard: {
    width: 170,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 16,
  },
  exerciseImage: {
    width: "100%",
    height: 120,
  },
  playIcon: {
    position: "absolute",
    top: 40,
    left: "40%",
  },
  exerciseTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 6,
    marginLeft: 8,
  },
  exerciseSubtitle: {
    color: "#aaa",
    fontSize: 12,
    marginLeft: 8,
    marginBottom: 8,
  },

  // Programs
  programRow: { 
    marginTop: 8,
    paddingHorizontal: 24, 
  },
  programCard: {
    width: 250,
    height: 130,
    borderRadius: 12,
    marginRight: 12,
    overflow: "hidden",
    marginBottom: 25,
    alignItems: "center",
  },
  programImage: {
    width: "100%",
    height: "100%",
  },
  playOverlay: {
    position: "absolute",
    top: "40%",
    left: "40%",
  },
  programText: {
    position: "absolute",
    top: 6,
    alignSelf: "center",
    color: "#fff",
    fontWeight: "600",
  },

  // Bottom Nav
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
