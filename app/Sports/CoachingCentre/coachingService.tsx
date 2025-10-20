import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const CoachingServices = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.push('/Sports/cricket')}>
            <Ionicons name= "chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Coaching Services</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
            source={require("../../../assets/images/coachService.jpg")}
            style={styles.bannerImg}
        />
        <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerText}>
            Access exclusive content, Live sessions and early access to gear drops.
            </Text>
            <Text style={styles.bannerLink}>“ Start free trail ”</Text>
        </View>
      </View>

      {/* Today Class */}
      <Text style={styles.sectionTitle}>Today Class</Text>
      <View style={styles.todayCard}>
        <ImageBackground
          source={require('../../../assets/images/Instructor/class.jpg')}
          style={styles.todayImage}
          imageStyle={{ borderRadius: 12 }}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.6)", "transparent", "rgba(0,0,0,0.5)"]}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={styles.topRow}>
            <Text style={styles.todayTitle}>Stretches</Text>
            <View style={styles.ratingRow}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons
                  key={star}
                  name={star <= 4 ? "star" : "star-outline"}
                  size={14}
                  color="white"
                />
              ))}
              <Text style={styles.ratingText}>4.0</Text>
            </View>
          </View>

          {/* Bottom row: Duration left + Tag right */}
          <View style={styles.bottomRow}>
            <Text style={styles.duration}>
              <Ionicons name="time-outline" size={16} color="#fff" style={{ marginRight: 4, top: 2 }}/> 50 min</Text>
            <LinearGradient
              colors={["#4776E6", "#8E54E9"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.tag}
            >
              <Text style={styles.tagText}>Beginners</Text>
            </LinearGradient>
          </View>
        </ImageBackground>
      </View>

      {/* Club Membership */}
      <Text style={styles.sectionTitle}>Club Membership</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={()=> router.push('/Sports/CoachingCentre/premium')}>
          <View style={styles.card}>
          <Text style={styles.cardTitle}>General access Membership</Text>
          <Text style={styles.cardText}>
            Offers access to all gym facilities with options for morning-only. Includes payment options for monthly or annual plans.
          </Text>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.cardLabel}>Daily time</Text>
              <Text style={styles.cardDetail}>04:00 am - 10:00 pm</Text>
            </View>
            <View>
              <Text style={styles.cardLabel}>Access</Text>
              <Text style={styles.cardDetail}>All games</Text>
            </View>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.cardLabel}>Others</Text>
            <Text style={styles.cardDetail}>Free classes, 1 month</Text>
          </View>
          <Text style={styles.price}>₹ 30.00 / month</Text>
        </View>
        </TouchableOpacity>


        <View style={styles.card}>
          <Text style={styles.cardTitle}>Class Specific Membership</Text>
          <Text style={styles.cardText}>
            Enables enrollment in specific fitness. Includes payment options for monthly or annual plans.
          </Text>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.cardLabel}>Daily time</Text>
              <Text style={styles.cardDetail}>04:00 am - 10:00 pm</Text>
            </View>
            <View>
              <Text style={styles.cardLabel}>Access</Text>
              <Text style={styles.cardDetail}>All games</Text>
            </View>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={styles.cardLabel}>Others</Text>
            <Text style={styles.cardDetail}>Free classes, 1 month</Text>
          </View>
          <Text style={styles.price}>₹ 50.00 / month</Text>
        </View>

      </ScrollView>

      {/* Top Instructors */}
      <Text style={styles.sectionTitle}>Top Instructors</Text>
      <View style={styles.instructorRow}>
        {[
          { name: "John", game: "Football", img: require("../../../assets/images/Instructor/inst1.png") },
          { name: "Liya", game: "Badminton", img: require("../../../assets/images/Instructor/inst2.png") },
          { name: "Sam", game: "Cricket", img: require("../../../assets/images/Instructor/inst3.png") },
          { name: "Joo", game: "Tennis", img: require("../../../assets/images/Instructor/inst4.png") },
        ].map((item, index) => (
          <View key={index} style={styles.instructorCard}>
            <TouchableOpacity onPress={()=> router.push('/Sports/CoachingCentre/instructor')}>
              <Image source={ item.img } style={styles.instructorImg} />
            </TouchableOpacity>
            <Text style={styles.instructorName}>{item.name}</Text>
            <Text style={styles.instructorGame}>{item.game}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CoachingServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingHorizontal: 24,
    paddingTop: 40
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 14,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600"
  },
  banner: {
    backgroundColor: "#222",
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: "row",  
    alignItems: "center",
    marginTop: 10
  },
  bannerImg: {
      width: 125,   
      height: 75,
      resizeMode: "contain",
      marginRight: 12,
  },
  bannerTextContainer: {
    flex: 1,   
  },
  bannerText: {
    color: "#ccc",
    fontSize: 12,
    marginBottom: 6,
  },
  bannerLink: {
    color: "#4da6ff",
    fontWeight: "bold",
    alignSelf: 'center'
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 10,
  },
  todayCard: {
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
  },
  todayImage: {
    width: "100%",
    height: 160,
    justifyContent: "space-between", 
    padding: 10,
    opacity: 0.7,
    resizeMode: 'contain'
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todayTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 12,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  duration: {
    color: "#fff",
    fontSize: 14,
    fontWeight: '600'
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#222",
    padding: 16,
    borderRadius: 12,
    marginRight: 16,
    width: 260,
    marginBottom: 10
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 8,
  },
  cardText: {
    color: "#aaa",
    fontSize: 12,
    marginBottom: 12,
    minHeight: 75,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  cardLabel: {
    color: "#bbb",
    fontSize: 12,
    marginBottom: 2,
  },
  cardDetail: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  price: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    marginTop: 12,
  },

  instructorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 40
  },
  instructorCard: {
    alignItems: "center",
  },
  instructorImg: {
    width: 70,
    height: 70,
    borderRadius: 30,
    marginBottom: 6,
  },
  instructorName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  instructorGame: {
    color: "#aaa",
    fontSize: 12,
  },
});
