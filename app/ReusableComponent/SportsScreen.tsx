import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type NewsItem = {
  id: string;
  title: string;
  time: string;
  source: string;
  image: any;
  description?: string;
};

type CoachingCenterItem = {
  id: string;
  title: string;
  image: any;
  rating: number;
  reviews: number;
  about: string;
  location: string;
};

type EventItem = {
  id: string;
  type: "All" | "Sports Banners" | "Live" | "Recent" | "Upcoming"; 
  matchType?: string;
  teams?: { left: { name: string; flag: any }; right: { name: string; flag: any } };
  status?: string;
  time?: string;
  date?: string;
  countdown?: string;
  promoImage?: any;
  promoTitle?: string;
  promoDetails?: string;
  eventDate?: string;
  eventTime?: string;
};

type TabContent = {
  Info: NewsItem[];
  "Coaching Center": CoachingCenterItem[];
  Event: EventItem[];
  "Trending News": NewsItem[];
};

type SportsScreenProps = {
  sportTitle: string;
  bannerImage: any;
  tabData: TabContent;
  onClose?: () => void;
};

const EventSegmentFilters = ["All", "Sports Banners", "Live", "Recent", "Upcoming"] as const;
type EventFilterType = typeof EventSegmentFilters[number];


const SportsScreen: React.FC<SportsScreenProps> = ({
  sportTitle,
  bannerImage,
  tabData,
}) => {
  const [activeTab, setActiveTab] = useState<keyof TabContent>("Info");
  const [activeEventFilter, setActiveEventFilter] = useState<EventFilterType>("All");
  const [tabWidths, setTabWidths] = useState<{ [key: string]: number }>({});

  const filteredEvents =
    activeTab === "Event"
      ? tabData.Event.filter((event) =>
          activeEventFilter === "All" ? true : event.type === activeEventFilter
        )
      : [];

  const renderContent = () => {
    if (activeTab === "Info") {
      return (
        <FlatList
          data={tabData.Info}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 12 }}
          renderItem={({ item }) => (
            <View style={styles.infoCard}>
              <Image source={item.image} style={styles.infoImage} />

              <View style={styles.infoContent}>
                <Text style={styles.infoTime}>• {item.time}</Text>
                <Text style={styles.infoTitle}>{item.title}</Text>
                <Text style={styles.infoSource}># {item.source}</Text>
              </View>
            </View>
          )}
        />
      );
    }

    if (activeTab === "Coaching Center") {
      return (
        <FlatList
          data={tabData["Coaching Center"]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.coachCard}>
              <Image source={item.image} style={styles.coachImage} resizeMode="cover" />
              <View style={styles.headerRow}>
                <Text style={styles.coachTitle}>{item.title}</Text>
                <View style={styles.ratingContainer}>
                  <View style={styles.ratingBadge}>
                    <Text style={styles.ratingStar}>★</Text>
                  </View>
                  <Text style={styles.ratingValue}>{item.rating}</Text>
                  <Text style={styles.ratingCount}>({item.reviews})</Text>
                </View>
              </View>
              <Text style={styles.aboutTitle}>About</Text>
              <Text style={styles.aboutText}>{item.about}</Text>
              <View style={styles.locationCard}>
                <View style={styles.locationHeader}>
                  <Text style={styles.locationTitle}>Location</Text>
                  <View style={styles.navigateRow}>
                    <Text style={styles.navigateIcon}>➡️</Text>
                    <Text style={styles.navigateText}>NAVIGATE</Text>
                  </View>
                </View>
        
                <View style={styles.locationRow}>
                  <Ionicons name="location-sharp" size={16} color="#aaa" style={{ marginRight: 6, marginTop: 2 }} />
                  <Text style={styles.locationText}>{item.location}</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={() => {router.push('/Sports/CoachingCentre/coachingService')}}>
                <LinearGradient
                  colors={["#4776E6", "#8E54E9"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.tryButton}
                >
                  <Text style={styles.tryButtonText}>Try Now</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        />
      );
    }

    if (activeTab === "Event") {
      const sortedEvents = filteredEvents.sort((a, b) => {
        if (a.promoImage && !b.promoImage) return 1;
        if (!a.promoImage && b.promoImage) return -1;
        return 0;
      });
      return (
        <FlatList
          data={sortedEvents}
          keyExtractor={(item, index) => `${activeTab}-${item.id}-${index}`}
          contentContainerStyle={{ paddingBottom: 16 }}
          ListHeaderComponent={
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
                    {tabData.Event.filter((e) =>
                      filter === "All" ? true : e.type === filter
                    ).length}
                    )
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          }
          renderItem={({ item }) =>
            item.promoImage ? (
              <View>
              <View style={styles.promoCard}>
                <Image
                  source={item.promoImage}
                  style={styles.promoImage}
                  resizeMode="cover"
                />
                <View style={styles.promoTextContainer}>
                  <Text style={styles.promoTitle}>{item.promoTitle}</Text>

                  <View style={styles.eventInfoRow}>
                    {item.eventDate && (
                      <View style={styles.eventInfoItem}>
                        <Ionicons name="calendar-outline" size={16} color="#fff" />
                        <Text style={styles.eventInfoText}>{item.eventDate}</Text>
                      </View>
                    )}
                    {item.eventTime && (
                      <View style={styles.eventInfoItem}>
                        <Ionicons name="time-outline" size={16} color="#fff" />
                        <Text style={styles.eventInfoText}>{item.eventTime}</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <LinearGradient
                  colors={["#4776E6", "#8E54E9"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.openButton}
                >
                  <Text style={styles.openButtonText}>Open</Text>
                </LinearGradient>
              </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.eventCard}>
                <TouchableOpacity onPress={()=> router.push('/Sports/Events/ticket')}>
                <Text style={styles.matchTypeText}>{item.matchType}</Text>
                <View style={styles.teamsRow}>
                  <View style={styles.team}>
                    <View style={styles.flagContainer}>
                      <Image source={item.teams?.left.flag} style={styles.flagImage} />
                    </View>
                    <Text style={styles.teamName}>{item.teams?.left.name}</Text>
                  </View>
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
                    <Text style={styles.timeText}>{item.time}</Text>
                    {item.date && <Text style={styles.dateText}>{item.date}</Text>}
                    {item.countdown && (
                      <Text style={styles.countdownText}>{item.countdown}</Text>
                    )}
                  </View>
                  <View style={styles.team}>
                    <View style={styles.flagContainer}>
                      <Image source={item.teams?.right.flag} style={styles.flagImage} />
                    </View>
                    <Text style={styles.teamName}>{item.teams?.right.name}</Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
            )
          }
        />
      );
    }

    if (activeTab === "Trending News") {
      return (
        <FlatList
          data={tabData["Trending News"]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.trendingCard}>
              <Image source={item.image} style={styles.trendingImage} resizeMode="cover" />

              <View style={styles.trendingMeta}>
                <Text style={styles.trendingSource}>{item.source}</Text>
              </View>

              <Text style={styles.trendingTitle}>{item.title}</Text>

              {item.description && (
                <Text style={styles.trendingDescription}>{item.description}</Text>
              )}
            </View>
          )}
        />
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
          <Ionicons name="close" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.header}>{sportTitle}</Text>
        <View style={{ width: 30 }} />
      </View>

      <View style={styles.bannerWrapper}>
        <Image source={bannerImage} style={styles.bannerImage} resizeMode="cover" />
      </View>

      <View style={styles.tabsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsWrapper}
        >
          {Object.keys(tabData).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab as keyof TabContent)}
                style={styles.tabItem}
              >
                <Text
                  style={[styles.tabText, isActive && styles.activeTabText]}
                  onLayout={(e) => {
                    const { width } = e.nativeEvent.layout;
                    setTabWidths((prev) => ({ ...prev, [tab]: width }));
                  }}
                >
                  {tab}
                </Text>

                {isActive && (
                  <View
                    style={[
                      styles.activeUnderline,
                      { width: (tabWidths[tab] || 0) + 20 },
                    ]}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.fullBaseline} />
      </View>

      {renderContent()}
    </View>
  );
};

export default SportsScreen;
export type { EventItem, NewsItem, TabContent };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 20,
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
    color: "white",
  },
  bannerWrapper: {
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 18,
    marginBottom: 18,
    alignSelf: "center",
  },
  bannerImage: {
    width: 352,
    height: 128,
  },

  tabsContainer: {
    position: "relative",
    marginBottom: 20,
  },
  tabsWrapper: {
    paddingHorizontal: 16,
    overflow: "hidden",
  },
  tabItem: {
    left: 20,
    marginRight: 40,
    alignItems: "center",
    paddingBottom: 12,
  },
  tabText: {
    color: "#aaa",
    fontSize: 14,
    fontWeight: "400",
  },
  activeTabText: {
    color: "white",
    fontWeight: "600",
  },
  fullBaseline: {
    position: "absolute",
    bottom: 0,
    left: 16,
    right: 16,
    height: 1,
    backgroundColor: "#444",
  },
  activeUnderline: {
    position: "absolute",
    bottom: -1,
    height: 3,
    backgroundColor: "white",
    borderRadius: 2,
  },

  infoCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
    borderRadius: 8,
    overflow: "hidden",
    marginLeft: 16,
    marginRight: 16,
  },
  infoImage: {
    width: 110,
    height: 80,
    borderRadius: 8
  },
  infoContent: {
    flex: 1,
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'flex-start',
  },
  infoTime: {
    fontSize: 10,
    color: "#aaa",
    marginBottom: 4,
  },
  infoTitle: {
    fontSize: 10,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  infoSource: {
    fontSize: 10,
    color: "#aaa",
    marginTop: 8
  },

  coachCard: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 16,
  },
  coachImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  coachTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    left: -14,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingBadge: {
    backgroundColor: "#2ecc71",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 6,
  },
  ratingStar: {
    color: "white",
    fontSize: 12,
  },
  ratingValue: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    marginRight: 4,
  },
  ratingCount: {
    color: "#aaa",
    fontSize: 12,
  },
  aboutTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 4,
  },
  aboutText: {
    color: "#aaa",
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 16,
  },
  locationCard: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  locationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  locationTitle: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 6,
    marginTop: 2,
  },
  locationText: {
    color: "#aaa",
    fontSize: 13,
    flex: 1,
  },
  navigateRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  navigateIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  navigateText: {
    color: "#1E90FF",
    fontWeight: "600",
  },
  tryButton: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  tryButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  newsItem: {
    flexDirection: "row",
    marginBottom: 16,
    marginHorizontal: 16,
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  newsTitle: {
    color: "white",
    fontSize: 14,
    marginBottom: 4,
  },
  newsMeta: {
    color: "gray",
    fontSize: 12,
  },

  eventFiltersContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 4,     
    marginTop: 0,           
    marginBottom: 20,        
    alignItems: "center",
  },
  eventFilterButton: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 16,    
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginRight: 8,
    backgroundColor: "#222",
  },
  activeEventFilterButton: {
    backgroundColor: "#FFFFFF33",
    borderColor: "#fff",
  },
  eventFilterText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "700",
  },
  activeEventFilterText: {
    color: "#fff",          
    fontWeight: "700",
  },

  eventCard: {
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: "#1a1a1a",
  },
  matchTypeText: {
    color: "white",
    fontSize: 14,
    alignSelf:'center'
  },
  teamsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 12,
  },
  team: { 
    alignItems: "center", 
    flex: 1 
  },
  flagContainer: {      
    width: 40,
    height: 40,
    borderRadius: 20,    
    overflow: "hidden",  
  },
  flagImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  teamName: { 
    color: "white",
    fontWeight: "600", 
    marginTop: 10, 
  },
  vsText: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: 'center',
    gap: 10,
  },
  liveIcon: {
    width: 30,   
    height: 15,
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 4,  
  },

  statusText: {
    color: "#aaa",
    fontSize: 12,
  },
  timeText: {
    color: "#aaa",
    fontSize: 12,
    alignSelf: 'center'
  },
  dateText: {
    color: "#39FF14",
    fontSize: 12,
    alignSelf: 'center'
  },
  countdownText: {
    color: "#aaa",
    fontSize: 12,
    alignSelf: 'center'
  },

  promoCard: {
    marginHorizontal: 24,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: "#000",
  },
  promoImage: {
    width: "100%",
    height: 480,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  promoTextContainer: {
    padding: 12,
  },
  promoTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  promoDetails: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 12,
  },
  eventInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  eventInfoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  eventInfoText: {
    color: "#FFFFFF99",
    fontSize: 12,
    marginLeft: 10,
  },
  openButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: 'center',
    width: 100,
    height: 35
  },
  openButtonText: {
    color: "white",
    fontWeight: "600",
    alignSelf:'center'
  },

  trendingCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    paddingBottom: 12,
    marginTop: 10
  },
  trendingImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  trendingMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 6,
  },
  trendingSource: {
    fontSize: 8,
    color: "#aaa",
  },
  trendingTime: {
    fontSize: 8,
    color: "#aaa",
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    paddingHorizontal: 10,
    marginTop: 20,
    textAlign: "center",   
  },
  trendingDescription: {
    fontSize: 12,
    color: "#ccc",
    paddingHorizontal: 10,
    marginTop: 15,
    textAlign: "center",   
  },
});


