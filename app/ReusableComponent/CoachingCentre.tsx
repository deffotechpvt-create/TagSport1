import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

type SimilarClass = {
  id: string;
  title: string;
  rating: number;
  reviews: number;
  image: any;
};

type Review = {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  images?: any[];
  avatar: any;
};

type Category = {
  id: string;
  title: string;
  image: any;
};

type CoachingCentreProps = {
  name: string;
  rating: number;
  reviews: number;
  images: any[];
  location: string;
  openUntil: string;
  contact: string;
  website: string;
  similarClasses: SimilarClass[];
  reviewsData: Review[];
  categories: Category[];
};

const { width } = Dimensions.get("window");

const CoachingCentre: React.FC<CoachingCentreProps> = ({
  name,
  rating,
  reviews,
  images,
  location,
  openUntil,
  contact,
  website,
  similarClasses,
  reviewsData,
  categories
}) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );
    setActiveIndex(index);
  };


  return (
    <ScrollView style={styles.container}>
      <View>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={{ width: width }}> 
              <Image
                source={item}
                style={styles.carouselImage}
                resizeMode="cover"
              />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.dotContainer}>
          {images.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                {
                  opacity: i === activeIndex ? 1 : 0.55,
                  width: i === activeIndex ? 8 : 6,
                },
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.coachCard}>
        <Text style={styles.coachTitle}>{name}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingStar}>★</Text>
          </View>
          <Text style={styles.ratingValue}>{rating}</Text>
          <Text style={styles.ratingCount}>({reviews} Ratings)</Text>
        </View>

        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Text style={styles.locationTitle}>Location</Text>
            <View style={styles.navigateRow}>
              <Text style={styles.navigateIcon}>➡️</Text>
              <Text style={styles.navigateText}>NAVIGATE</Text>
            </View>
          </View>

          <View style={styles.locationRow}>
            <Ionicons
              name="location-sharp"
              size={16}
              color="#aaa"
              style={{ marginRight: 6, marginTop: 2 }}
            />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sports Class</Text>
        <Text style={styles.openNow}>Open Now :<Text style={{color:'white'}}> until {openUntil}   <Ionicons name="chevron-down" size={20} color="white" style={{ marginTop: 10 }}  /> </Text></Text>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="call-outline" size={20} color="white" style={{borderRadius: 50, borderWidth: 1, borderColor: 'white', padding: 10}}/>
            <Text style={styles.actionText}>Call Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="share-social" size={20} color="white" style={{borderRadius: 50, borderWidth: 1, borderColor: 'white', padding: 10}}/>
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsWrapper}
        >
          {["Overview", "Reviews", "Photos", "Categories"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={styles.tabItem}
              >
                <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                  {tab}
                </Text>

                {isActive && <View style={styles.activeUnderline} />}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.fullBaseline} />
      </View>

      {/* Overview Content */}
      {activeTab === "Overview" && (
        <View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Information</Text>
            <Text style={styles.infoText}>Contacts</Text>
            <Text style={styles.link}>{contact}</Text>
            <Text style={styles.infoText}>Contacts</Text>
            <Text style={[styles.infoText,{color: '#007BFF'}]}>Open Now:<Text style={{color: '#fff'}}> until {openUntil} </Text></Text>
            <Text style={styles.infoText}>
              Website 
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL(website)}
            >
              {website}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Similar Classes</Text>
            <FlatList
              data={similarClasses}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.similarCard}>
                  <Image source={item.image} style={styles.similarImage} />
                  <Text style={styles.similarTitle}>{item.title}</Text>
                  <View style={styles.ratingContainerSmall}>
                    <View style={styles.ratingBadgeSmall}>
                      <Text style={[styles.ratingStar, {fontSize: 12}]}>★</Text>
                    </View>
                    <Text style={[styles.ratingValue, {fontSize: 12}]}>{rating}</Text>
                    <Text style={[styles.ratingCount, {fontSize: 12}]}>({reviews} Ratings)</Text>
                  </View>
                  <View style={styles.actionRow}>
                    <TouchableOpacity style={styles.actionBtnSmall}>
                      <Ionicons name="call-outline" size={18} color="white" style={{borderRadius: 50, borderWidth: 1, borderColor: 'white', padding: 4}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionBtnSmall}>
                      <Ionicons name="share-social" size={18} color="white" style={{borderRadius: 50, borderWidth: 1, borderColor: 'white', padding: 4}}/>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                    <LinearGradient
                      colors={["#4776E6", "#8E54E9"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.bookBtn}
                    >
                    <Text style={{ color: "white", fontWeight: "600", alignSelf: 'center' }}>
                      Book Now
                    </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      )}

      {/* Review Content */}
      {activeTab === "Reviews" && (
        <View style={styles.section}>
          <FlatList
            data={reviewsData}   
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.reviewCard}>
                <Image source={item.avatar} style={styles.avatar} />
                <View style={styles.headerRow}>
                  <Text style={styles.reviewerName}>{item.name}</Text>
                  <Text style={styles.reviewDate}>{item.date}</Text>
                </View>
                <View style={styles.ratingRow}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Ionicons
                      key={i}
                      name={i < item.rating ? "star" : "star-outline"}
                      size={16}
                      color="#FFD700"
                    />
                  ))}
                </View>
                <Text style={styles.comment}>{item.comment}</Text>
                {item.images && (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {item.images.map((img, idx) => (
                      <Image key={idx} source={img} style={styles.reviewImage} />
                    ))}
                  </ScrollView>
                )}

                <View style={styles.reviewFooter}>
                  <Text style={styles.helpfulText}>Helpful</Text>
                  <Ionicons name="thumbs-up-outline" size={16} color="#bbb" />
                </View>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 50 }}
          />
          <TouchableOpacity style={styles.writeReviewBtn} activeOpacity={0.8}>
            <Ionicons name="create-outline" size={18} color="white" />
            <Text style={styles.writeReviewText}>Write a review</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Photo Content */}
      {activeTab === "Photos" && (
        <View style={styles.section}>
          <Text style={styles.sectionTitleSmall}>
            Photos of {name} in Chennai
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {images[0] && (
              <View style={{ flex: 1, marginRight: 4 }}>
                <Image source={images[2]} style={[styles.photo, { height: 260 }]} />
              </View>
            )}

            <View style={{ flex: 1, justifyContent: "space-between", marginLeft: 4 }}>
              {images.slice(3, 7).map((item, index) => (
                <View key={index} style={{ position: "relative" }}>
                  <Image source={item} style={[styles.photo, { height: 80 }]} />
                  {/* Camera button on last image */}
                  {index === images.slice(3, 7).length - 1 && (
                    <TouchableOpacity style={styles.cameraBtn}>
                      <Ionicons name="camera" size={20} color="#007BFF" />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* Accordion-style sections */}
          {[
            "Business images",
            "Sports class nearby images",
            "Achievements images",
            "Group images",
            "Training class images",
          ].map((category, i) => (
            <TouchableOpacity key={i} style={styles.accordionHeader}>
              <Text style={styles.accordionTitle}>{category}</Text>
              <Ionicons name="chevron-down" size={18} color="white" />
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Categories Content */}
      {activeTab === "Categories" && (
        <ScrollView style={styles.section}>
          <Text style={styles.sectionTitleSmall}>
            Categories of {name} in Chennai
          </Text>

          <View style={styles.categoriesGrid}>
            {categories.map((cat) => (
              <LinearGradient
                key={cat.id}
                colors={["#5D5C6300", "#5D5C63"]} // gradient border
                style={styles.categoryBorder}
              >
                <LinearGradient
                    colors={["#0000004A", "#0000004A", "#4B4B4B", "#4B4B4B"]} // half black, half gray
                    // locations={[0, 0.5, 0.5, 1]} // force split at 50%
                    style={styles.categoryCard}
                  >
                  <Image source={cat.image} style={styles.categoryIcon} />
                  <Text style={styles.categoryText}>{cat.title}</Text>
                </LinearGradient>
              </LinearGradient>
            ))}
          </View>
        </ScrollView>
      )}

    </ScrollView>
  );
};

export default CoachingCentre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 40,
  },
  carouselImage: {
    width: width - 48, 
    height: 220,
    borderRadius: 12,
    marginHorizontal: 24, 
  },
  backButton: {
    position: "absolute",
    top: 10, 
    left: 30,
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 8,
    borderRadius: 20,
    zIndex: 10,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 20
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: "white",
    marginHorizontal: 4,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16,
  },
  coachCard: {
    borderRadius: 12,
    marginBottom: 20,
    paddingTop: 16,
    paddingHorizontal: 16,
    gap:6
  },
  coachTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 22,
    marginBottom: 10
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingContainerSmall: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10
  },
  ratingBadge: {
    backgroundColor: "#2ecc71",
    paddingHorizontal: 6,
    marginRight: 6,
  },
  ratingBadgeSmall: {
    backgroundColor: "#2ecc71",
    paddingHorizontal: 2,
    marginRight: 6,
  },
  ratingStar: {
    color: "white",
    fontSize: 16,
  },
  ratingValue: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 4,
  },
  ratingCount: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  locationCard: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
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
    fontSize: 14,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
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

  section: {
    paddingHorizontal: 16,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    marginBottom: 8,
  },
  sectionTitleSmall: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 50
  },
  openNow: { 
    color: "#007BFF",
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10 
  },
  actionRow: { 
    flexDirection: "row", 
    marginTop: 8,
    marginBottom: 20
  },
  actionBtn: { 
    flexDirection: "column", 
    alignItems: "center", 
    marginRight: 20,
  },
  actionBtnSmall: { 
    flexDirection: "column", 
    alignItems: "center", 
    marginRight:10,
    marginTop: 5,
    paddingLeft: 10
  },
  actionText: { 
    color: "white", 
    marginTop: 6,       
    fontSize: 14,
    fontWeight: "500"
  },
  tabsContainer: {
    marginBottom: 16,
    paddingLeft: 10,
    marginRight: -20
  },
  tabsWrapper: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  tabItem: {
    marginRight: 40,
    alignItems: "center",
  },
  tabText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "500",
  },
  activeTabText: {
    color: "white",
  },
  activeUnderline: {
    height: 2,
    backgroundColor: "white",
    marginTop: 4,
    borderRadius: 2,
    width: "120%",
  },
  fullBaseline: {
    height: 1,
    backgroundColor: "#333",
    marginTop: -2,
    marginHorizontal: 16,
  },

  infoText: { 
    color: "white", 
    marginBottom: 6,
    fontSize: 16
  },
  link: { 
    color: "#3b82f6",
    fontSize: 16,
    marginBottom: 6,
  },
  similarCard: {
    backgroundColor: "#1c1c1c",
    // padding: 10,
    borderRadius: 10,
    marginRight: 12,
    width: 160,
    borderWidth: 0.5,
    borderColor: '#726e6eff'
  },
  similarImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 0
  },
  similarTitle: { 
    color: "white", 
    fontWeight: "600",
    marginBottom: 6,
    paddingLeft: 10 
  },
  bookBtn: {
    backgroundColor: "#6d28d9",
    padding: 8,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: 'center',
    paddingLeft: 10,
    width: 140, 
    marginBottom: 10
  },

 reviewCard: {
    backgroundColor: "#2a2a2a",   // dark card bg
    borderRadius: 12,
    padding: 12,
    marginVertical: 20,
    marginHorizontal: 16,
    position: "relative",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: "absolute",
    top: -20,   // pull it above the card
    left: -10,   // align with padding
    borderWidth: 2,
    borderColor: "#2a2a2a",  // gives a clean border separation
  },
  // headerRow: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginTop: 24, // leave space because avatar overlaps
  //   marginBottom: 6,
  // },
  reviewerName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginTop: -5
  },
  reviewDate: {
    color: "#aaa",
    fontSize: 12,
  },
  ratingRow: {
    flexDirection: "row",
    marginVertical: 4,
  },
  comment: {
    color: "#ddd",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 8,
  },
  reviewImage: {
    width: 100,
    height: 120,
    borderRadius: 6,
    marginRight: 6,
  },
  reviewFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 8,
  },
  helpfulText: {
    color: "#aaa",
    fontSize: 12,
    marginRight: 4,
  },
  writeReviewBtn: {
    position: "absolute",
    bottom: 10,
    right: 20,
    backgroundColor: "#6C63FF",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  writeReviewText: {
    color: "white",
    fontSize: 14,
    marginLeft: 6,
    fontWeight: "500",
  },

  photoWrapper: {
    flex: 1,
    margin: 4,
    position: "relative",
  },
  photo: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  cameraBtn: {
    position: "absolute",
    bottom: -10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 6,
    elevation: 4,
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  accordionTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },

  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
    paddingHorizontal: 20
  },
  categoryBorder: {
    borderRadius: 16,
    padding: 2,
    marginBottom: 12,
    width: "46%", 
  },
  categoryCard: {
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    height: 160
  },
  categoryIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain",
  },
  categoryText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
  