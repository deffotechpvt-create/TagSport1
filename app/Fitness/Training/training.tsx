import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Search from "../../ReusableComponent/searchFilter";

const workouts = [
  {
    id: '1',
    title: 'Home Chest Workout (No Equipment)',
    duration: '45 min',
    difficulty: 'Hard',
    image: 'https://www.puregym.com/media/x4jnvc0z/best-bodyweight-chest-workouts_blogheader-notitle.jpg?quality=80',
    link: '/Workouts/workout1' as any,
  },
  {
    id: '2',
    title: 'Complete Home Leg Workout',
    duration: '45 min',
    difficulty: 'Middle',
    image: 'https://www.muscletech.com/cdn/shop/articles/img-1710166503329.jpg?v=1731601517',
    link: '/Workouts/workout2' as any,
  },
  {
    id: '3',
    title: 'Total Body Strength Burnout',
    duration: '55 min',
    difficulty: 'Hard',
    image: 'https://www.realsimple.com/thmb/3KoB71mW6LLvInpFz3miibbZllw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-vody-exercises-GettyImages-1336580525-71969e0cb10447769e6a6a048e22ca73.jpg',
    link: '/Workouts/workout3' as any,
  },
  {
    id: '4',
    title: 'Perfect Home Shoulder Workout',
    duration: '45 min',
    difficulty: 'Easy',
    image: 'https://www.dmoose.com/cdn/shop/articles/Feature-img.jpg?v=1686318911',
    link: '/Workouts/workout4' as any,
  },
  {
    id: '5',
    title: 'Beginner Full Body Workout', 
    duration: '40 min',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b',
    link: '/Workouts/workout5' as any,
  },
  {
    id: '6',
    title: 'Advanced Leg & Glutes Workout', 
    duration: '50 min',
    difficulty: 'Middle',
    image: 'https://www.muscletech.com/cdn/shop/articles/img-1710166503329.jpg?v=1731601517',
    link: '/Workouts/workout6' as any,
  },
  {
    id: '7',
    title: 'Core & Abs Shred Session', 
    duration: '30 min',
    difficulty: 'Hard',
    image: 'https://www.realsimple.com/thmb/3KoB71mW6LLvInpFz3miibbZllw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/full-vody-exercises-GettyImages-1336580525-71969e0cb10447769e6a6a048e22ca73.jpg',
    link: '/Workouts/workout7' as any,
  },
  {
    id: '8',
    title: 'Upper Body Strength Beginner',
    duration: '35 min',
    difficulty: 'Easy',
    image: 'https://www.dmoose.com/cdn/shop/articles/Feature-img.jpg?v=1686318911',
    link: '/Workouts/workout8' as any,
  },
];

const tabs = ['Workouts', 'Fitness', 'Plans'];
const screenWidth = Dimensions.get('window').width;

export default function Training() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [query, setQuery] = useState("");

  // Filter workouts based on search query
  const filteredWorkouts = workouts.filter((w) =>
    w.title.toLowerCase().includes(query.toLowerCase())
  );

  const renderWorkoutCard = ({ item }: { item: typeof workouts[0] }) => (
    <TouchableOpacity style={styles.card} onPress={() => router.push(item.link)}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.overlay} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardInfoRow}>
          <Ionicons name="time-outline" size={16} color="#fff" />
          <Text style={styles.cardInfo}>{item.duration}</Text>
          <Text style={styles.cardInfo}>{item.difficulty}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Training</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <SegmentedControlTab
          values={tabs}
          selectedIndex={selectedTabIndex}
          onTabPress={setSelectedTabIndex}
          tabsContainerStyle={styles.tabsStyle}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
        />
      </View>

      {/* Search */}
      <Search
        placeholder="Search workouts..."
        value={query}
        onChangeText={setQuery}
        onSearch={() => console.log("Searching:", query)}
        onFilterPress={() => console.log("Filter clicked")}
        containerStyle={{ paddingVertical: 15 }}
      />

      {/* Workout Grid */}
      <FlatList
        data={filteredWorkouts}
        renderItem={renderWorkoutCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1A1A1A',
    paddingTop: 40, 
    paddingHorizontal: 24
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  tabContainer: { marginVertical: 18 },
  tabsStyle: { backgroundColor: '#232529', borderRadius: 8 },
  tabStyle: { borderColor: 'transparent', backgroundColor: '#232529', paddingVertical: 8 },
  activeTabStyle: { backgroundColor: '#cfe570' },
  tabTextStyle: { color: '#8f90a6', fontWeight: '600' },
  activeTabTextStyle: { color: '#232529', fontWeight: '700' },

  gridContainer: { paddingVertical: 8 },
  card: {
    flex: 1,
    backgroundColor: '#26282c',
    borderRadius: 16,
    margin: 6,
    overflow: 'hidden',
    elevation: 4,
    minHeight: screenWidth * 0.51,
    maxWidth: (screenWidth - 20) / 2,
  },
  cardImage: {
    width: '100%',
    height: screenWidth * 0.26,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(22,23,27,0.30)',
    borderRadius: 16,
  },
  cardContent: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 7,
  },
  cardInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardInfo: {
    color: '#cfe570',
    fontSize: 11,
    marginLeft: 6,
    fontWeight: '500'
  },
});
