import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const mainVideo = {
  id: "1",
  title: "2023 IPL final match CSK vs GT",
  thumbnail: require("../../assets/images/Products/thumbnail.jpg"),
  views: "85M views",
  time: "2 years ago  ....more",
};

const moreVideos = [
  {
    id: "2",
    title: "Ahmedabad stadium to host ...",
    thumbnail: require("../../assets/images/Products/v1.png"),
    views: "22M views",
    time: "9 years old",
  },
  {
    id: "3",
    title: "Prime Video Sport AUNZ | ...",
    thumbnail: require("../../assets/images/Products/v2.png"),
    views: "2M views",
    time: "9 years old",
  },
  {
    id: "4",
    title: "Most Popular News in Sports,...",
    thumbnail: require("../../assets/images/Products/v3.png"),
    views: "22M views",
    time: "9 years old",
  },
  {
    id: "5",
    title: "IND vs SL Cricket Scorecard,...",
    thumbnail: require("../../assets/images/Products/v4.png"),
    views: "22M views",
    time: "9 years old",
  },
];

export default function Match() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.videoContainer}>
        <TouchableOpacity onPress={()=> router.push('/Products/nftCollection')}>
          <Ionicons name="chevron-back" size={24} color={'#fff'} style={{paddingLeft: 12}}/> 
        </TouchableOpacity>
        <View style={styles.videoWrapper}>
          
            <ImageBackground 
            source={mainVideo.thumbnail} style={styles.mainThumbnail}
            imageStyle={{ borderRadius: 12 }}
            >            
              <Image 
                source={require("../../assets/images/top.png")}
                style={styles.topOverlay}
                resizeMode="cover"
              />
            <Ionicons 
                name="play-circle" 
                size={34} 
                color="white" 
                style={styles.playIcon} 
            />
            <Image 
                source={require("../../assets/images/bottom.png")}
                style={styles.bottomOverlay}
                resizeMode="cover"
            />
            </ImageBackground>
        </View>
      </View>

      <View style={{paddingHorizontal: 20}}> 
         <View style={styles.videoInfo}>
        <Text style={styles.title}>{mainVideo.title}</Text>
        <Text style={styles.subtitle}>
          {mainVideo.views}      {mainVideo.time}
        </Text>
      </View>

      <View style={styles.actionsRow}>
        <View style={styles.leftActions}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="thumbs-up" size={22} color="white" />
            <Text style={styles.iconText}>18.4M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="share-social-outline" size={22} color="white" />
            <Text style={styles.iconText}>20.6k</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>More Videos</Text>
      <FlatList
        data={moreVideos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.thumbnail} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.cardSubtitle}>
                {item.views} • {item.time}
              </Text>
              <View style={styles.cardIcons}>
                <FontAwesome name="thumbs-up" size={18} color="white" />
                <FontAwesome name="thumbs-down" size={18} color="#FFFFFF80" style={{ marginLeft: 20 }} />
              </View>
            </View>
          </View>
        )}
      />
      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 24
  },
  videoContainer: {
    width: "100%",
    height: 220,
    // marginTop: 45,
  },
  videoWrapper: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  videoThumbnail: {
    width: "100%",
    height: 220,
    justifyContent: "center",
    // alignItems: "center",
  },
  topOverlay: {
    position: "absolute",
    top: 5,
    left: 0,
    width: "100%",
    height: 80,
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 5,
    left: 0,
    width: "100%",
    height: 60,
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  mainThumbnail: {
    width: width,
    height: 200,
  },
  videoInfo: {
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 4,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 8,
  },
  leftActions: {
    flexDirection: "row",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    backgroundColor: "#333",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  iconText: {
    color: "white",
    marginLeft: 6,
    fontSize: 12,
  },
  downloadButton: {
    backgroundColor: "#333",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  downloadText: {
    color: "white",
    fontWeight: "500",
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 25,
    marginLeft: 10,
  },
  card: {
    flexDirection: "row",
    marginBottom: 20,
    marginHorizontal: 10,
  },
  cardImage: {
    width: 150,
    height: 90,
    borderRadius: 6,
  },
  cardContent: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center",
  },
  cardTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  cardSubtitle: {
    color: "#aaa",
    fontSize: 12,
    marginVertical: 3,
  },
  cardIcons: {
    flexDirection: "row",
    marginTop: 4,
  },
});
