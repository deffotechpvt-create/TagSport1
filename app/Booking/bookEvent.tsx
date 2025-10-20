import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type EventItem = {
  id: string;
  type: "All" | "Sports Banners" | "Live" | "Recent" | "Upcoming";
  matchType?: string;
  teams?: { left: { name: string; flag: any }; right: { name: string; flag: any } };
  status?: string;
  time?: string;
  date?: string;
  countdown?: string;
};

const Events: EventItem[] = [
    {
      id: "1",
      type: "Live" as const,
      matchType: "Cricket | T20",
      teams: {
        left: { name: "ENGLAND", flag: require("../../assets/images/Flag/england.jpg") },
        right: { name: "INDIA", flag: require("../../assets/images/Flag/india.jpg") },
      },
      status: "Live",
      countdown: "02:04:39",
    },
    {
      id: "2",
      type: "Upcoming" as const,
      matchType: "Cricket | IPL",
      teams: {
        left: { name: "CSK", flag: require("../../assets/images/Flag/csk.jpg") },
        right: { name: "RSB", flag: require("../../assets/images/Flag/rcb.jpg") },
      },
      time: "7:00 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
    {
      id: "3",
      type: "Upcoming" as const,
      matchType: "Football | Isl",
      teams: {
        left: { name: "ARGENTINA", flag: require("../../assets/images/Flag/argentina.jpg") },
        right: { name: "BRAZIL", flag: require("../../assets/images/Flag/brazil.jpg") },
      },
      time: "7:30 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
    {
      id: "4",
      type: "Upcoming" as const,
      matchType: "Hockey  | Nation Cup",
      teams: {
        left: { name: "SHARKS", flag: require("../../assets/images/Flag/sharks.jpg") },
        right: { name: "STORM", flag: require("../../assets/images/Flag/storm.jpg") },
      },
      time: "9:00 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
    {
      id: "5",
      type: "Upcoming" as const,
      matchType: "Badminton | Olympics",
      teams: {
        left: { name: "PARIS", flag: require("../../assets/images/Flag/paris.jpg") },
        right: { name: "MALL MO", flag: require("../../assets/images/Flag/mallmo.jpg") },
      },
      time: "10:00 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
    {
      id: "6",
      type: "Upcoming" as const,
      matchType: "Cricket | Odi",
      teams: {
        left: { name: "AUSTRAL EA", flag: require("../../assets/images/Flag/australia.jpg") },
        right: { name: "N Z", flag: require("../../assets/images/Flag/nz.jpg") },
      },
      time: "10:00 PM",
      date: "30/01/2005",
      countdown: "Starts in 3 Hours"
    },
];

const EventSegmentFilters: EventItem["type"][] = ["All", "Sports Banners", "Live", "Recent", "Upcoming"];

const BookEvent = () => {
  const [activeEventFilter, setActiveEventFilter] = useState<EventItem["type"]>("All");

  const filteredEvents =
    activeEventFilter === "All"
      ? Events
      : Events.filter((event) => event.type === activeEventFilter);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
          <Ionicons name="close" size={26} color="white" style={{ marginLeft: 12 }} />
        </TouchableOpacity>
        <Text style={styles.header}>Events</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.eventFiltersContainer}
        >
          {EventSegmentFilters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.eventFilterButton,
                activeEventFilter === filter && styles.activeEventFilterButton,
              ]}
              onPress={() => setActiveEventFilter(filter)}
            >
              <Text
                style={[
                  styles.eventFilterText,
                  activeEventFilter === filter && styles.activeEventFilterText,
                ]}
              >
                {filter} (
                {filter === "All"
                  ? Events.length
                  : Events.filter((e) => e.type === filter).length}
                )
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Events List */}
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16, flexGrow: 1 }}
        ListEmptyComponent={
          <Text style={styles.noEventsText}></Text>
        }
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <TouchableOpacity onPress={() => router.push("/Sports/Events/ticket")}>
              <Text style={styles.matchTypeText}>{item.matchType}</Text>
              <View style={styles.teamsRow}>
                {/* Left Team */}
                <View style={styles.team}>
                  <View style={styles.flagContainer}>
                    <Image source={item.teams?.left.flag} style={styles.flagImage} />
                  </View>
                  <Text style={styles.teamName}>{item.teams?.left.name}</Text>
                </View>

                {/* Center */}
                <View style={styles.vsText}>
                  <View style={{ alignItems: "center" }}>
                    {item.status === "Live" && (
                      <Image
                        source={require("../../assets/images/icon.png")}
                        style={styles.liveIcon}
                      />
                    )}
                    <Text
                      style={[
                        styles.statusText,
                        item.status === "Live" && { color: "red", fontWeight: "600" },
                      ]}
                    >
                      {item.status}
                    </Text>
                  </View>
                  {item.countdown && (
                    <Text style={styles.countdownText}>{item.countdown}</Text>
                  )}
                  {item.time && <Text style={styles.timeText}>{item.time}</Text>}
                  {item.date && <Text style={styles.dateText}>{item.date}</Text>}
                </View>

                {/* Right Team */}
                <View style={styles.team}>
                  <View style={styles.flagContainer}>
                    <Image source={item.teams?.right.flag} style={styles.flagImage} />
                  </View>
                  <Text style={styles.teamName}>{item.teams?.right.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
};

export default BookEvent;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1A1A1A", 
    paddingTop: 40 
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16,
  },
  header: { 
    fontSize: 22, 
    fontWeight: "600", 
    color: "white" 
  },

  tabsWrapper: { 
    marginBottom: 10 
  },
  eventFiltersContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 4,
    alignItems: "center",
    marginVertical: 20
  },
  eventFilterButton: {
    borderWidth: 1,
    borderColor: "#1E77ED",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginRight: 15,
  },
  activeEventFilterButton: { 
    backgroundColor: "#FFFFFF33", 
    borderColor: "#1E77ED" 
  },
  eventFilterText: { 
    fontSize: 12, 
    color: "#fff", 
    fontWeight: "700" 
  },
  activeEventFilterText: { 
    color: "#fff", 
    fontWeight: "700" 
  },

  eventCard: {
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#0b1630",
    borderWidth: 1,
    borderColor: "#1E77ED",
  },
  matchTypeText: { 
    color: "white", 
    fontSize: 14, 
    alignSelf: "center", 
    marginBottom: 10 
  },
  teamsRow: { 
    flexDirection: "row", 
    justifyContent: "space-between" 
  },
  team: { 
    alignItems: "center", 
    flex: 1 
  },
  flagContainer: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    overflow: "hidden" 
  },
  flagImage: { 
    width: "100%", 
    height: "100%", 
    resizeMode: "cover" 
  },
  teamName: { 
    color: "white", 
    fontWeight: "600", 
    marginTop: 10 
  },
  vsText: { 
    marginHorizontal: 10, 
    alignItems: "center", 
    justifyContent: "center", 
    gap: 6   
  },
  liveIcon: { 
    width: 30, 
    height: 15, 
    resizeMode: "contain", 
    marginBottom: 4 
  },
  statusText: { 
    color: "#aaa", 
    fontSize: 12 
  },
  timeText: { 
    color: "#aaa", 
    fontSize: 12 
  },
  dateText: { 
    color: "#39FF14", 
    fontSize: 12 
  },
  countdownText: { 
    color: "#aaa", 
    fontSize: 12 
  },
  noEventsText: { 
    color: "#aaa", 
    fontSize: 14, 
    textAlign: "center", 
    marginTop: 50 
  },

});
