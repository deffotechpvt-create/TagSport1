import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function InstructorProfile() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ImageBackground
          source={require('../../../assets/images/Instructor/banner.jpg')}
          style={styles.headerImage}
        >
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "transparent", "rgba(0,0,0,0.5)"]}
          style={StyleSheet.absoluteFillObject}
        />
        <TouchableOpacity onPress={()=> router.push('/Sports/CoachingCentre/coachingService')}>
          <Ionicons name="chevron-back" size={24} color="#fff" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Instructor</Text>
        </ImageBackground>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={ require('../../../assets/images/Instructor/ins1.jpg') }
          style={styles.profileImage}
        />
        <Text style={styles.name}>John</Text>
        <Text style={styles.role}>Football Instructor</Text>
        <View style={styles.ratingRow}>
            {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons
                key={star}
                name={star <= 5 ? "star" : "star-outline"}
                size={14}
                color="#39FF14"
            />
            ))}
            <Text style={styles.ratingText}>5.0</Text>
        </View>
        <Text style={styles.reviews}>Read All Reviews</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
            <Text style={styles.statNumber}>8+</Text>
            <Text style={styles.statLabel}>Years of{"\n"}experience</Text>
        </View>
        <View style={styles.verticalDivider} />
        <View style={styles.statBox}>
            <Text style={styles.statNumber}>250+</Text>
            <Text style={styles.statLabel}>Medals and{"\n"}Trophies</Text>
        </View>
        <View style={styles.verticalDivider} />
        <View style={styles.statBox}>
            <Text style={styles.statNumber}>30</Text>
            <Text style={styles.statLabel}>Years old</Text>
        </View>
      </View>
      <View style={styles.bottomDivider} />


      {/* Info Sections */}
      <View style= {{marginTop: 20}}>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.sectionText}>
            The Sports Coach Details Screen UI is designed to provide users with comprehensive information about a specific coach in a visually engaging and user-friendly format.
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Profile & Bio</Text>
            <Text style={styles.sectionText}>
            Beneath the header, a profile section showcases the coach’s detailed bio including years of experience, coaching specialties, certifications, and affiliations. This section uses clear typography and bullet points to enhance readability.
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Statistics and achievements</Text>
            <Text style={styles.sectionText}>
            A visual summary of the coach’s performance metrics—like win rates, team rankings, and number of trained athletes—can be displayed in card or chart formats. Achievements and awards may be shown as badges or icons, creating a visually rewarding experience and reinforcing credibility.
            </Text>
        </View>
      </View>

      {/* Book Button */}
      <TouchableOpacity style={{ margin: 20 }} onPress={()=> router.push('/Sports/CoachingCentre/premium')}>
        <LinearGradient
          colors={["#8E2DE2", "#4A00E0"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.bookButton}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 45
  },
  header: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  backIcon: {
    position: "absolute",
    top: 24,
    left: 20,
  },
  headerTitle: {
    position: "absolute",
    top: 20,
    left: 60,
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
  },
  profileSection: {
    alignItems: "center",
    marginTop: -60,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 90,
  },
  name: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginTop: 15,
  },
  role: {
    fontSize: 18,
    color: "#D9D9D9",
    marginTop: 6,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15
  },
  ratingText: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 14,
  },
  reviews: {
    color: "#fff",
    marginTop: 4,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 16,
    paddingHorizontal: 24,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    color: "#D9D9D9",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  statLabel: {
    color: "#D9D9D9",
    fontWeight: '600',
    fontSize: 13,
    textAlign: "center",
  },
  verticalDivider: {
    width: 1,
    backgroundColor: "#D9D9D9", 
    height: "70%",
  },
  bottomDivider: {
    height: 1,
    backgroundColor: "#D9D9D9", 
    marginTop: 6,
    marginHorizontal: 24
  },

  section: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  sectionText: {
    fontSize: 14,
    color: "#D9D9D9",
    fontWeight: '600',
    lineHeight: 20,
  },
  bookButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
