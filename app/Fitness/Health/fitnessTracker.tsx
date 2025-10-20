import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RunningList from "./running";

const { width } = Dimensions.get("window");

type TabType = "Running" | "Cycling" | "Walking" | "Running list";

const FitnessTracker = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Running");

  const tabs: TabType[] = ["Running", "Cycling", "Walking", "Running list"];

  const activityImages: Record<Exclude<TabType, "Running list">, any> = {
    Running: require("../../../assets/images/Health/runn.png"),
    Cycling: require("../../../assets/images/Health/cycling.png"),
    Walking: require("../../../assets/images/Health/walk.png"),
  };

  const renderTabs = () => (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
          <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderStats = () => (
    <View style={styles.statsContainer}>
      <Text style={styles.distanceText}>
        29.09 <Text style={styles.kmText}>km</Text>
      </Text>
      <Text style={styles.subText}>Total {activeTab} Distance</Text>
    </View>
  );

  const renderBottomNav = () => (
    <View style={styles.bottomNav}>
      <View style={styles.icon}>
          <FontAwesome name="bullseye" size={28} color="black"/>
      </View>  
      
      <LinearGradient
        colors={["#4776E6", "#8E54E9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.centerButton}
      >
        <Ionicons
          name={
            activeTab === "Running"
              ? "walk-outline"
              : activeTab === "Cycling"
              ? "bicycle-outline"
              : activeTab === "Walking"
              ? "man-outline"
              : "list-outline"
          }
          size={60}
          color="white"
        />
      </LinearGradient>
      <View style={styles.icon}>
          <Ionicons name="settings" size={28} color="black"/>
      </View>    
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/Fitness/Health/health')}>
          <Ionicons name="chevron-back" size={24} color="#fff" style={{top: 2}} />
        </TouchableOpacity>

        <Text style={styles.title}>{activeTab}</Text>
      </View>

      {renderTabs()}

      {activeTab === "Running list" ? (
        <View style={{ flex: 1 }}>
          <RunningList />
        </View>
      ) : (
        <View style={styles.content}>
          {renderStats()}

          {/* Runner on ground */}
          <ImageBackground
            source={require("../../../assets/images/Health/ground.png")}
            style={[styles.groundContainer, styles.shadow]}
            imageStyle={styles.groundImage}
          >
            <Image
              source={activityImages[activeTab]}
              style={styles.characterImage}
            />
          </ImageBackground>


          {renderBottomNav()}
        </View>
      )}
    </View>
  );
};

export default FitnessTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groundContainer: {
    width: width,
    height: 290,
    justifyContent: "center",
    alignItems: "center",
  },
  groundImage: {
    resizeMode: "cover",
  },
  characterImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    position: "absolute",
    bottom: 20,
  },
  shadow: {
    shadowColor: "#497B1C",   
    shadowOffset: {
      width: 0,
      height: 30,           
    },
    shadowOpacity: 0.6,       
    shadowRadius: 20,        
    elevation: 15,           
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 15, 
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },
  tabText: {
    color: "white",
    marginRight: 30,
    fontSize: 16,
    fontWeight: "600",
  },
  activeTab: {
    color: "#007BFF",
  },
  statsContainer: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 70,
  },
  distanceText: { fontSize: 40, fontWeight: "bold", color: "white" },
  kmText: { fontSize: 18 },
  subText: { fontSize: 14, color: "gray", marginTop: 4 },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 40,
    marginTop: 100,
  },
  centerButton: {
    padding: 20,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
