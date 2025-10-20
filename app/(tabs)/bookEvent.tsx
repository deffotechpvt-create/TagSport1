import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface EventItem {
  id: string;
  title: string;
  date: string;
  image: string;
}

export default function BookEvent() {
  const [activeTab, setActiveTab] = useState("Tomorrow");

  const banners: string[] = [
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1757424441750_app.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB41MdDYJKnAYz-LJ0hNvCc2PbRCLGVm3Gkw&s",
  ];

  const events: EventItem[] = [
    {
      id: "1",
      title: "Green Kidathon Stadium Run - Nov 2025",
      date: "Sun, 2 Nov",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1SFIRIUBMm8FlKJQT09L0_RVVvl_7VDfmkSA4ST-i2ON5TEktSN_C_KaxLENK6PQHtUw&usqp=CAU",
    },
    {
      id: "2",
      title: "Daily Run - Connect",
      date: "Sun, 19 Oct onwards",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00460502-uxxedflljf-portrait.jpg",
    },
    {
      id: "3",
      title: "Chennai Open - Season Pass",
      date: "Mon, 27 Oct",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00462654-fuankwprnv-portrait.jpg",
    },
    {
      id: "4",
      title: "Trail Blazers Victory Trail Marathon",
      date: "Sun, 19 Oct onwards",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00461531-mqdjjynbzv-portrait.jpg",
    },
    {
      id: "5",
      title: "Green Kidathon Stadium Run - Nov 2025",
      date: "Sun, 2 Nov",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1SFIRIUBMm8FlKJQT09L0_RVVvl_7VDfmkSA4ST-i2ON5TEktSN_C_KaxLENK6PQHtUw&usqp=CAU",
    },
    {
      id: "6",
      title: "Daily Run - Connect",
      date: "Sun, 19 Oct onwards",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00460502-uxxedflljf-portrait.jpg",
    },
    {
      id: "7",
      title: "Chennai Open - Season Pass",
      date: "Mon, 27 Oct",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00462654-fuankwprnv-portrait.jpg",
    },
    {
      id: "8",
      title: "Trail Blazers Victory Trail Marathon",
      date: "Sun, 19 Oct onwards",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00461531-mqdjjynbzv-portrait.jpg",
    },
  ];

  const renderEvent: ListRenderItem<EventItem> = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.eventDate}>{item.date}</Text>
      <Text style={styles.eventTitle}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.headerTitle}>Sports Events</Text>
        <Ionicons name="search" size={22} color="#fff" />
      </View>

      {/* <Text style={styles.subHeader}>Chennai | 68 Events</Text> */}

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.bannerScroll}
      >
        {banners.map((img, index) => (
          <Image key={index} source={{ uri: img }} style={styles.bannerImage} />
        ))}
      </ScrollView>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={{color:'#fff'}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={{color:'#fff'}}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={{color:'#fff'}}>Upcoming Events</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Tomorrow" && styles.activeTab]}
          onPress={() => setActiveTab("Tomorrow")}
        >
          <Text
            style={[styles.tabText, activeTab === "Tomorrow" && styles.activeText]}
          >
            Tomorrow
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "This Weekend" && styles.activeTab]}
          onPress={() => setActiveTab("This Weekend")}
        >
          <Text
            style={[styles.tabText, activeTab === "This Weekend" && styles.activeText]}
          >
            This Weekend
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1A1A1A",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: '#fff' },
  subHeader: { color: "#666", marginLeft: 15, marginBottom: 5 },
  bannerScroll: { height: 180 },
  bannerImage: { width: width, height: 180, paddingVertical: 20 },
  filterContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    marginVertical: 10,
    gap: 10,
    paddingLeft: '20%'
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  tabs: { flexDirection: "row", marginLeft: 15, marginTop: 10 },
  tab: {
    backgroundColor: "#f4f4f4",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
  },
  activeTab: { backgroundColor: "#ddd" },
  tabText: { color: "#777" },
  activeText: { color: "#000", fontWeight: "600" },
  row: { justifyContent: "space-around",    paddingHorizontal: 10 },
  card: {
    width: width / 2.2,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
    elevation: 3,
  },
  cardImage: { width: "100%", height: 140 },
  eventDate: { marginLeft: 8, color: "#555", marginTop: 5, fontSize: 12 },
  eventTitle: {
    fontWeight: "600",
    fontSize: 13,
    marginHorizontal: 8,
    marginBottom: 8,
  },
});
