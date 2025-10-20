import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const moods = [
  { label: "Happy", emoji: "😊" },
  { label: "Calm", emoji: "😌" },
  { label: "Upset", emoji: "😕" },
  { label: "Sad", emoji: "😔" },
  { label: "Angry", emoji: "😡" },
];

const schedule = [
  { time: "Morning", title: "Yoga or Light Cardio walk", duration: "30 mins" },
  { time: "Morning", title: "Strength Training (Bodyweight)", duration: "30-40 mins" },
  { time: "Morning", title: "Nature Walk or Bike Ride", duration: "30 mins" },
  { time: "Afternoon", title: "Yoga or Stretch + Breathwork", duration: "20-30 mins" },
  { time: "Afternoon", title: "Cardio (Run, Dance, Kickboxing)", duration: "30 mins" },
  { time: "Evening", title: "Strength or Martial Arts Class", duration: "45 mins" },
  { time: "Evening", title: "Rest or Gentle Walk + Stretch", duration: "20 mins" },
];

const GradientButton = ({ title, style }: { title: string; style?: any }) => (
  <TouchableOpacity>
    <LinearGradient
      colors={["rgba(71,118,230,0.8)", "rgba(142,84,233,0.8)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.gradientButton, style]}  
    >
      <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const BookCard = ({
  avatar,
  name,
  session,
  sessionsAvailable,
}: {
  avatar: any;
  name: string;
  session: string;
  sessionsAvailable: string;
}) => (
  <View style={styles.bookCard}>
    <View style={styles.bookRow}>
      <Image source={avatar} style={styles.bookAvatar} />
      <View>
        <Text style={styles.bookName}>{name}</Text>
        <Text style={styles.bookSession}>{session}</Text>
      </View>
    </View>

    <GradientButton title="Book Now" />

    <Text style={styles.sessionsAvailable}>{sessionsAvailable}</Text>
  </View>
);


export default function WellnessPage() {
  const completedSteps = 3;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.push('/Fitness/Health/health')}>
          <Ionicons name="chevron-back" size={24} color="#fff" style={{top:2, marginRight: 20}} />
        </TouchableOpacity>
        <Text style={styles.header}>How do you feel today ?</Text>
      </View>
      <View style={styles.row}>
        {moods.map((mood) => (
          <View key={mood.label} style={styles.moodItem}>
            <Text style={styles.emoji}>{mood.emoji}</Text>
            <Text style={styles.moodLabel}>{mood.label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>Upcoming Session</Text>
      <View style={styles.sessionCard}>
        <Text style={styles.sessionTitle}>Empowering & Motivational</Text>
        <View style={styles.sessionRow}>
          <Image
            source={require("../../../assets/images/Health/a1.png")}
            style={styles.avatar}
          />
          <View style={styles.sessionDetails}>
            <Text style={styles.date}>May 24, 2025</Text>
            <Text style={styles.time}>3:00 PM</Text>
            <View style={styles.nameRow}>
              <Ionicons name="person" size={18} color="#007BFFCC" />
              <Text style={styles.name}>Dr. Sarah Lane</Text>
            </View>
          </View>
          <GradientButton title="Join Live" style={styles.joinButton} />
        </View>
      </View>

      <Text style={styles.sectionHeader}>Book a Session</Text>
      <View style={styles.row}>
        <BookCard
          avatar={require("../../../assets/images/Health/a2.png")}
          name="Sam Ethan"
          session="Calm & BraveMind"
          sessionsAvailable="3 Sessions Available"
        />
        <BookCard
          avatar={require("../../../assets/images/Health/a3.png")}
          name="Jessica Patel"
          session="Recovery Therapy"
          sessionsAvailable="3 Sessions Available"
        />
      </View>


      <Text style={styles.sectionHeader}>Make it happen today !</Text>
      <View style={styles.timeline}>
        {schedule.map((item, index) => {
          const isCompleted = index < completedSteps;
          const isLineCompleted = index < completedSteps - 1;

          return (
            <View key={index} style={styles.timelineItem}>
              <View style={styles.timelineIndicatorContainer}>
                <View
                  style={[
                    styles.outerCircle,
                    { borderColor: isCompleted ? "#007BFF" : "#FFFFFF60" },
                  ]}
                >
                  <View
                    style={[
                      styles.innerCircle,
                      { backgroundColor: isCompleted ? "#007BFF" : "#FFFFFF60" },
                    ]}
                  />
                </View>
                {index !== schedule.length - 1 && (
                  <View
                    style={[
                      styles.line,
                      { backgroundColor: isLineCompleted ? "#007BFF" : "#FFFFFF60" },
                    ]}
                  />
                )}
              </View>

              <View style={styles.timelineContent}>
                <Text style={styles.time}>{item.time}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.duration}>{item.duration}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#1A1A1A", 
    paddingTop: 40, 
    paddingHorizontal: 24 
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  header: { 
    fontSize: 22, 
    color: "#fff",
    fontWeight: '600', 
  },
  row: { flexDirection: "row", justifyContent: "space-around", marginBottom: 24 },
  moodItem: { alignItems: "center" },
  emoji: { fontSize: 35, borderRadius: 30, padding: 8, backgroundColor: "#ffffff20" },
  moodLabel: { color: "#fff", marginTop: 4 },
  sectionHeader: { fontWeight: "600", fontSize: 20, color: "#fff", marginBottom: 20 },

  sessionCard: {
    backgroundColor: "#ffffff20",
    borderRadius: 12,
    padding: 18,
    marginBottom: 24,
    marginHorizontal: 8
  },
  sessionTitle: { 
    color: "#fff", 
    fontWeight: "600", 
    fontSize: 16, 
    marginBottom: 12 
  },
  sessionRow: { 
    flexDirection: "row", 
    alignItems: "center" 
  },
  avatar: {
    width: 50, 
    height: 50, 
    borderRadius: 30,
    borderColor: '#007BFF33',
    borderWidth: 1, 
    marginRight: 16,
    bottom: 20 
  },
  joinButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-start", 
    bottom: 15,
    // right: 10
  },
  sessionDetails: { 
    flex: 1 
  },
  date: { 
    color: "#ccc", 
    fontSize: 14,
    marginBottom: 8 
  },
  nameRow: { 
    flexDirection: "row", 
    marginTop: 20,
    right: 65
  },
  name: { 
    color: "#fff", 
    marginLeft: 10, 
    fontSize: 14, 
    fontWeight: "600" 
  },

  bookCard: {
    backgroundColor: "#ffffff20",
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 12,
    padding: 12,
  },
  bookRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  bookAvatar: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#007BFF55",
  },
  bookName: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 14,
    marginBottom: 10
  },
  bookSession: {
    color: "#fff",
    fontSize: 14,
    width: 100
  },
  sessionsAvailable: {
    color: "#fff",
    fontSize: 14,
    marginTop: 6,
    textAlign: "center",
    fontWeight: "600",
  },
  gradientButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    marginLeft: 8,
    marginBottom: 6
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "600",
    fontSize: 14, 
    textAlign: "center" 
  },

  timeline: { marginTop: 8, marginBottom: 30 },
  timelineItem: { flexDirection: "row", marginBottom: 24 },
  timelineIndicatorContainer: { alignItems: "center", marginRight: 10 },
  outerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    top: 40
  },
  innerCircle: { width: 8, height: 8, borderRadius: 4 },
  line: { 
    width: 2, 
    flex: 1, 
    marginTop: 2, 
    top: 40,
    marginBottom: -20, 
    borderStyle: 'dashed' 
  },
  timelineContent: { flex: 1, backgroundColor: "#FFFFFF20", padding: 12, borderRadius: 8 },
  time: { color: "#bbb", fontSize: 12, marginBottom: 4 },
  title: { color: "#fff", fontWeight: "600" },
  duration: { color: "#888", fontSize: 12, marginTop: 4 },
});
