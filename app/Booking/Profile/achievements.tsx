import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function LeaderboardScreen() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [mobile, setMobile] = useState("");
  const [game, setGame] = useState("");
  const [description, setDescription] = useState("");

  const topPlayers = [
    { id: 1, name: "Emma Johnson", points: "3.080", img: require("../../../assets/images/Achievements/1.jpg") },
    { id: 2, name: "Oscar Sam", points: "2.400", img: require("../../../assets/images/Achievements/2.jpg") },
    { id: 3, name: "Lily Andresen", points: "2.383", img: require("../../../assets/images/Achievements/3.jpg") },
  ];

  const friends = [
    { id: "1", name: "Lily", img: require("../../../assets/images/Achievements/a1.png") },
    { id: "2", name: "Sam", img: require("../../../assets/images/Achievements/a2.png") },
    { id: "3", name: "Nina", img: require("../../../assets/images/Achievements/a3.png") },
    { id: "4", name: "Josh", img: require("../../../assets/images/Achievements/a4.png") },
    { id: "5", name: "Emma", img: require("../../../assets/images/Achievements/a5.png") },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{top: -8}} onPress={()=>router.push('/Booking/profile')}><Ionicons name="close" size={24} color="#fff" /></TouchableOpacity>
        <Text style={styles.headerTitle}>Leadership Board</Text>
        <View style={{ width: 30 }} />
      </View>
      {/* Leaderboard Podium */}
      <View style={styles.podiumWrapper}>
        <Image source={require('../../../assets/images/Achievements/podium.png')} style={styles.podiumImage} />

        {/* 1st place */}
        <View style={[styles.playerWrapper, styles.first]}>
          <Image source={require('../../../assets/images/Achievements/rectangle.png')} style={styles.shadow} />
          <Image source={require('../../../assets/images/Achievements/celeb1.png')} style={styles.celebration} />
          <Image source={topPlayers[0].img} style={styles.avatarBig} />
          <Text style={styles.pointsBox}>{topPlayers[0].points} pts</Text>
        </View>

        {/* 2nd place */}
        <View style={[styles.playerWrapper, styles.second]}>
          <Image source={require('../../../assets/images/Achievements/rectangle.png')} style={styles.shadow} />
          <Image source={require('../../../assets/images/Achievements/celeb2.png')} style={styles.celebration} />
          <Image source={topPlayers[1].img} style={styles.avatarSmall} />
          <Text style={styles.pointsBox}>{topPlayers[1].points} pts</Text>
        </View>

        {/* 3rd place */}
        <View style={[styles.playerWrapper, styles.third]}>
          <Image source={require('../../../assets/images/Achievements/rectangle.png')} style={styles.shadow} />
          <Image source={require('../../../assets/images/Achievements/celeb3.png')} style={styles.celebration} />
          <Image source={topPlayers[2].img} style={styles.avatarSmall} />
          <Text style={styles.pointsBox}>{topPlayers[2].points} pts</Text>
        </View>

        {/* Search */}
        <TextInput
          placeholder="Search........"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      {/* Top List */}
      {topPlayers.map((p, i) => (
        <View key={p.id} style={styles.rankRow}>
          <Text style={styles.rankIndex}>{i + 1}</Text>
          <Image source={p.img} style={styles.rankAvatar} />
          <Text style={styles.rankName}>{p.name}</Text>
          <Text style={styles.rankPoints}>{p.points} Points</Text>
        </View>
      ))}
      <View style={styles.row}>
        <Text style={styles.seeAll}>See All</Text>
        <Ionicons name='chevron-down' size={20} color='white' style={{ top: -2 }}/>
      </View>

      {/* Friends */}
      <Text style={styles.sectionTitle}>My Friends</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.friendsScroll}>
        <View style={styles.friendBox}>
          <View style={styles.addFriendCircle}>
            <Ionicons name="add" size={24} color="white" />
          </View>
          <Text style={styles.friendName}>Add New</Text>
        </View>
        {friends.map((f) => (
          <View key={f.id} style={styles.friendBox}>
            <Image source={f.img} style={styles.friendAvatar} />
            <Text style={styles.friendName}>{f.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Feed Post */}
       <View style={styles.card}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require('../../../assets/images/Achievements/feed.jpg')}
            style={styles.mainImage}
          >
            <View style={styles.cardheader}>
              <Image
                source={require('../../../assets/images/Achievements/a1.png')}
                style={styles.avatar}
              />
              <View style={styles.userInfo}>
                <Text style={styles.username}>Lily</Text>
                <Text style={styles.timestamp}>25 Min ago</Text>
              </View>
              <TouchableOpacity style={styles.menuButton}>
                <Ionicons name="ellipsis-vertical" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.description}>
                Women's sports are more sport-specific and have developed into both amateur levels and professional levels.
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/* Interaction Bar */}
        <View style={styles.interactionBar}>
          <View style={styles.interaction}>
            <Ionicons name="heart-outline" size={24} color="white" />
            <Text style={styles.interactionText}>12.6k</Text>
          </View>
          <View style={styles.interaction}>
            <Ionicons name="share-social-outline" size={24} color="white" />
            <Text style={styles.interactionText}>2.3k</Text>
          </View>
          <View style={styles.interaction}>
            <Ionicons name="chatbubble-outline" size={24} color="white" />
            <Text style={styles.interactionText}>1.8k</Text>
          </View>
        </View>
      </View>

      {/* Awards */}
      <Text style={styles.newAward}>NEW AWARD</Text>
      <Text style={[styles.headerTitle, {alignSelf: 'center'}]}>Leadership Board</Text>
      <View style={styles.awardCircle}>
        <Image source={require("../../../assets/images/Achievements/award.png")} style={{ width: 200, height: 200 }} />
      </View>

      {/* Progress */}
      <View style={styles.progressWrapper}>
        <Text style={styles.rankPoints}>3.080{"\n"}Points</Text>

        <View style={{ flex: 1 }}>
          <View style={styles.progressContainer}>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: "60%" }]} />
            </View>

            <View style={styles.marker}>
              <Image
                source={require("../../../assets/images/Achievements/i.png")}
                style={styles.iImage}
              />
              <Image
                source={require("../../../assets/images/Achievements/i.png")}
                style={styles.iImage}
              />
            </View>
          </View>

          {/* Move NEXT AWARD below */}
          <Text style={styles.nextAward}>NEXT AWARD</Text>
        </View>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <View style={styles.formrow}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="John"
              placeholderTextColor="#888"
              style={styles.input}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Nick Name</Text>
            <TextInput
              value={nickname}
              onChangeText={setNickname}
              placeholder="JK"
              placeholderTextColor="#888"
              style={styles.input}
            />
          </View>
        </View>

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          value={mobile}
          onChangeText={setMobile}
          placeholder="Enter Your Number..."
          placeholderTextColor="#888"
          style={styles.input}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Select Your Games</Text>
        <TextInput
          value={game}
          onChangeText={setGame}
          placeholder="Cricket ....."
          placeholderTextColor="#888"
          style={styles.input}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Write Your Note....."
          placeholderTextColor="#888"
          style={[styles.input, styles.textArea]}
          multiline
        />
        <TouchableOpacity style={styles.joinButtonWrapper}>
          <LinearGradient colors={["#3b82f6", "#9333ea"]} start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }} style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join Now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1A1A1A", 
    paddingHorizontal: 24,
    paddingTop: 40 
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10
  },

  podiumWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30 
  },
  podiumImage: {
    width: '100%',
    height: 200, 
    resizeMode: 'contain',
    marginTop: 100
  },
  playerWrapper: {
    position: 'absolute',
    alignItems: 'center',
  },
  celebration: {
    position: 'absolute',
    resizeMode: 'contain',
    top: -90,
  },
  shadow: {
    position: 'absolute',
    marginRight: 30,
    bottom: -80,
    width: 400,
    height: 220 ,
    resizeMode: 'contain',
  },
  avatarBig: {
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 2,
    borderWidth: 2,
    borderColor: '#fff'
  },
  avatarSmall: {
    width: 60,
    height: 60,
    borderRadius: 30,
    zIndex: 2,
    borderWidth: 2,
    borderColor: '#fff'
  },
  pointsBox: {
    marginTop: 6,
    fontWeight: 'bold',
    color: '#ddd',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 18,
    padding: 6,
    fontSize: 10
  },
  first: {
    top: 0,
    alignSelf: 'center',
  },
  second: {
    top: 50,
    left: '10%',
  },
  third: {
    top: 80,
    right: '10%',
  },

  searchInput: { 
    position: 'absolute',
    backgroundColor: "#fff", 
    bottom: -15,
    borderRadius: 8, 
    paddingHorizontal: 14, 
    paddingVertical: 10, 
    width: 300
  },

  rankRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 10 
  },
  rankIndex: { 
    color: "#fff", 
    width: 20 
  },
  rankAvatar: { 
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    marginHorizontal: 8 
  },
  rankName: { 
    color: "#fff", 
    flex: 1 
  },

  row: {
    flexDirection: 'row',     
    alignSelf: 'center',  
    gap: 5  
  },
  seeAll: { 
    fontSize: 12, 
    color: "#fff", 
    textAlign: "center", 
    marginBottom: 20 
  },

  sectionTitle: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold", 
    marginVertical: 10 
  },

  friendsScroll: {
    marginBottom: 20 
  },
  friendBox: { 
    alignItems: "center", 
    marginRight: 16 
  },
  addFriendCircle: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    backgroundColor: "#444", 
    alignItems: "center", 
    justifyContent: "center" 
  },
  friendAvatar: { 
    width: 50, 
    height: 50, 
    borderRadius: 25 
  },
  friendName: { 
    color: "#ccc", 
    marginTop: 6, 
    fontSize: 12 
  },

  card: {
    borderRadius: 20,
    margin: 15,
    alignSelf: 'center'
  },
  cardheader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginLeft: 8,
    flex: 1,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  timestamp: {
    color: '#fff',
    fontSize: 8,
  },
  menuButton: {
    paddingHorizontal: 8,
  },
  imageContainer: {
    width: 330,           
    aspectRatio: 16 / 9,     
    borderRadius: 15,
    overflow: 'hidden',      
    marginBottom: 10,
  },
  mainImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between', 
    padding: 12
  },
  descriptionWrapper: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
  },
  description: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  interactionBar: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 15,                  
    paddingLeft: 10,
  },
  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 12,
  },

  newAward: { 
    color: "#aaa", 
    fontSize: 12, 
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10 
  },
  awardCircle: { 
    alignItems: "center", 
    marginVertical: 20 
  },

  progressWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 20,
  },
  rankPoints: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    marginRight: 8,
  },
  progressContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  progressBarBackground: {
    flex: 1,
    height: 10,
    backgroundColor: "#d9d9d9",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#007bff",
  },
  marker: {
    marginLeft: -12, 
    width: 34,
    height: 34,
    borderRadius: 16,
    backgroundColor: "#007bff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iImage: {  
    height: 17,
    resizeMode: "contain",
  },
  nextAward: { 
    color: "#fff", 
    fontWeight: '600',
    fontSize: 12,
    marginTop: 6,
    left: 90
  },

  form: {
    marginTop: 10,
    marginBottom: 40,
  },
  formrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    gap: 10,
  },
  inputBox: {
    flex: 1,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 14,
    color: "#000",
    fontSize: 14,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  joinButtonWrapper: { 
    marginTop: 10,
    marginBottom: 30 
  },
  joinButton: { 
    paddingVertical: 14, 
    borderRadius: 8 
  },
  joinButtonText: { 
    color: "#fff", 
    fontWeight: "600", 
    textAlign: "center", 
    fontSize: 16 
  },
});
