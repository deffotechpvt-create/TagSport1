import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Svg, { Circle, Defs, G, LinearGradient, Path, Polygon, Stop } from "react-native-svg";

const WHEEL_SIZE = 320;
const { width } = Dimensions.get("window");
const CARD_SIZE = width / 3;

type Reward = {
  label: string;
  color: string;
};

type WishListCardProps = {
  item: {
    title: string;
    category: string;
    price: number;
    originalPrice: number;
    discount: number;
    image: any;
    link?: string;
  };
};

type CategoryCardProps = {
  item: { title: string; img: any; onPress?: () => void };
};


const rewards: Reward[] = [
  { label: "50% OFF", color: "#f7e017" },
  { label: "25% OFF", color: "#ff9f40" },
  { label: "Free Delivery", color: "#2eb6ff" },
  { label: "75% OFF", color: "#ff4040" },
  { label: "100% OFF", color: "#40ff88" },
  { label: "Buy 1 Get 1 Free", color: "#b57bff" },
];

const createArc = (index: number, total: number, radius: number): string => {
  const angle = (2 * Math.PI) / total;
  const startAngle = index * angle - Math.PI / 2;
  const endAngle = (index + 1) * angle - Math.PI / 2;
  const x1 = radius + radius * Math.cos(startAngle);
  const y1 = radius + radius * Math.sin(startAngle);
  const x2 = radius + radius * Math.cos(endAngle);
  const y2 = radius + radius * Math.sin(endAngle);
  const largeArc = endAngle - startAngle <= Math.PI ? "0" : "1";

  return `M${radius},${radius} L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`;
};

const CategoryCard = ({ item }: CategoryCardProps) => {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={item.onPress}>
      <Image source={item.img} style={styles.categoryImage} />
      <View style={styles.overlay}>
        <Text style={styles.categoryText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const WishListCard = ({ item }: WishListCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Image source={item.image} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={styles.heartIcon}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={20}
            color={liked ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.details}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.category}>{item.category}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>₹ {item.price}</Text>
          <Text style={styles.strike}>₹ {item.originalPrice}</Text>
          <Text style={styles.discount}>{item.discount}% off</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const collectionData = [
  {
    title: "Water Bottle",
    img: require('../../assets/images/Products/Collection/bottle.jpg'),
  },
  {
    title: "Sports Towel",
    img: require('../../assets/images/Products/Collection/towel.jpg'),
  },
  {
    title: "First Aid Kit",
    img: require('../../assets/images/Products/Collection/firstaid.jpg'),
  },
  {
    title: "Smartwatch",
    img: require('../../assets/images/Products/Collection/watch.jpg'),
  },
  {
    title: "Ice Packs",
    img: require('../../assets/images/Products/Collection/icepack.jpg'),
  },
  {
    title: "Relief Sprays",
    img: require('../../assets/images/Products/Collection/spray.jpg'),
  },
];

const products = [
  {
    title: "Recommended Products",
    img: { uri: "https://img.freepik.com/premium-photo/set-sports-equipment-tools-black-background-close-up_93675-80961.jpg" },
  },
  {
    title: "Onsale Products",
    img: { uri: "https://static.vecteezy.com/system/resources/thumbnails/025/501/407/small_2x/sports-equipment-on-a-black-background-sport-concept-copy-space-sports-equipment-on-a-dark-background-ai-generated-free-photo.jpg" },
  },
];

const categories = [
  {
    title: "For Her",
    img: { uri: "https://static9.depositphotos.com/1004713/1146/i/950/depositphotos_11467619-stock-photo-runner-woman-running.jpg" },
  },
  {
    title: "For Him",
    img: { uri: "https://img.freepik.com/premium-photo/man-running-path-forest_867452-5302.jpg" },
  },
  {
    title: "For Kids",
    img: { uri: "https://t4.ftcdn.net/jpg/06/47/85/93/360_F_647859387_7OVDh2CkO1BgJtoGXvIHROZVr83Ic4K4.jpg" },
  },
];

const priceStoreData = [
  {
    title: "UNDER $99",
    category: "Sports Shoes",
    img: {uri: "https://cdn14.nnnow.com/web-images/large/styles/BISLNVJRA4A/1727699642180/1.jpg" },
  },
  {
    title: "UNDER $199",
    category: "Sports Cycles",
    img: {uri: 'https://image.made-in-china.com/202f0j00tcFoEByJkKkr/Sports-Bicycle-for-Men-Mountain-Bicycle-for-Men-Mountain-26-Inch-Cycle.jpg'},
  },
  {
    title: "UNDER $299",
    category: "Sports Bags",
    img: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sPJuwM7Nl8d4qAQjGRpShU_EqIBwavatRA&s'},
  },
  {
    title: "UNDER $399",
    category: "Sports Jackets",
    img: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRPKdOzek7_IijZXqaj7BATKYzJ65pPpBgA&s'},
  },
  {
    title: "UNDER $499",
    category: "Sports Accessories",
    img: {uri: 'https://st5.depositphotos.com/10894906/69028/i/450/depositphotos_690286156-stock-photo-set-sport-equipment-soccer-basketball.jpg'},
  },
];

export default function HomeScreen() {
  const spinValue = useRef(new Animated.Value(0)).current;

  const spinWheel = () => {
    const randomSpin = 360 * 5 + Math.floor(Math.random() * 360);
    Animated.timing(spinValue, {
      toValue: randomSpin,
      duration: 4000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      spinValue.setValue(randomSpin % 360);
    });
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <ScrollView >
        <ImageBackground
          source={require('../../assets/images/Products/homeBanner.jpg')}
          style={styles.bannerimage}
        >
          <TouchableOpacity style={styles.bannerbutton}>
            <Text style={styles.bannerbuttonText}>SHOP NOW</Text>
          </TouchableOpacity>
        </ImageBackground>

        <Text style={styles.sectionTitle}>Trending Products</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.scrollProductCard}>
              <Image source={item.img} style={styles.scrollCategoryImage} />
              <View style={styles.overlay}>
                <Text style={styles.categoryTexts}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.text}>Just Scroll And Get Your Offer</Text>

        <View style={styles.wheelContainer}>
          <Svg
            height="40"
            width="40"
            style={{ position: "absolute", top: -15, zIndex: 10 }}
          >
            <Polygon points="20,30 35,5 5,5" fill="white" stroke="white" strokeWidth="5" strokeLinejoin="round" />
          </Svg>

          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Svg height={WHEEL_SIZE + 20} width={WHEEL_SIZE + 20}>
              <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <Stop offset="0" stopColor="#4776E6" stopOpacity="1" />
                  <Stop offset="1" stopColor="#8E54E9" stopOpacity="1" />
                </LinearGradient>
              </Defs>

              <G>
                <Circle
                  cx={(WHEEL_SIZE + 20) / 2}
                  cy={(WHEEL_SIZE + 20) / 2}
                  r={(WHEEL_SIZE + 20) / 2}
                  fill="url(#grad)"
                />

                {/* White background circle */}
                <Circle
                  cx={(WHEEL_SIZE + 20) / 2}
                  cy={(WHEEL_SIZE + 20) / 2}
                  r={WHEEL_SIZE / 2}
                  fill="#1A1A1A"
                />

                {/* Reward Slices */}
                {rewards.map((reward, i) => (
                  <Path
                    key={i}
                    d={createArc(i, rewards.length, WHEEL_SIZE / 2)}
                    fill={reward.color}
                    stroke="#fff"
                    strokeWidth={2}
                    transform={`translate(10, 10)`} 
                  />
                ))}

                {/* Center White Circle */}
                <Circle
                  cx={(WHEEL_SIZE + 20) / 2}
                  cy={(WHEEL_SIZE + 20) / 2}
                  r={50}
                  fill="#fff"
                />
              </G>
            </Svg>

            {rewards.map((reward, i) => {
              const sliceAngle = 360 / rewards.length;
              const angle = sliceAngle * i + sliceAngle / 30;
              const rad = (angle * Math.PI) / 180;

              const r = WHEEL_SIZE / 3;
              const x = WHEEL_SIZE / 2 + r * Math.cos(rad);
              const y = WHEEL_SIZE / 2 + r * Math.sin(rad);

              return (
                <View
                  key={i}
                  style={{
                    position: "absolute",
                    left: x - 30,
                    top: y - 30,
                    width: 80,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    {reward.label}
                  </Text>
                </View>
              );
            })}
          </Animated.View>


          {/* Center Spin Button */}
          <TouchableOpacity
            style={styles.centerButton}
            onPress={spinWheel}
            activeOpacity={0.8}
          >
            <Text style={styles.centerButtonText}>SPIN & WIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerText}>All Things</Text>
          <Image
            source={require('../../assets/images/chanellogo.png')}
            style={styles.logo}
          />
        </View>

        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.scrollCategoryCard}>
              <Image source={item.img} style={styles.scrollCategoryImage} />
              <View style={styles.overlay}>
                <Text style={styles.categoryTexts}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.sectionTitle}>Trending Kits</Text>
        <FlatList
          data={[
            {
              title: "Badminton kit",
              category: "Sports & Fitness",
              price: 2800,
              originalPrice: 3200,
              discount: 30,
              image: require("../../assets/images/Products/badminton.png"),
            },
            {
              title: "Chess board",
              category: "Sports & Fitness",
              price: 2800,
              originalPrice: 3200,
              discount: 30,
              image: require("../../assets/images/Products/chess.png"),
            },
          ]}
          renderItem={({ item }) => <WishListCard item={item} />}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          scrollEnabled={false} 
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingHorizontal: 6 }}
        />
        
        <Text style={styles.sectionTitle}>The Men’s Sports Collections</Text>
        <FlatList
          data={collectionData}
          numColumns={3}
          renderItem={({ item }) => <CategoryCard item={item} />}
          keyExtractor={(_, index) => index.toString()}
          scrollEnabled={false}
        />

        <Text style={styles.sectionTitle}>Trending Sports Collections</Text>
        <FlatList
          data={[
            {
              title: "Football Boots",
              category: "Sports & Fitness",
              price: 2800,
              originalPrice: 3200,
              discount: 30,
              image: require("../../assets/images/Products/sneaker.jpg"),
            },
            {
              title: "Cricket Bat",
              category: "Sports & Fitness",
              price: 2800,
              originalPrice: 3200,
              discount: 30,
              image: require("../../assets/images/Products/cricketbat.jpg"),
            },
          ]}
          renderItem={({ item }) => <WishListCard item={item} />}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingHorizontal: 6 }}
        />

        <Text style={styles.sectionTitle}>The Women’s Sports Collections</Text>
        <FlatList
          data={collectionData}
          numColumns={3}
          renderItem={({ item }) => <CategoryCard item={item} />}
          keyExtractor={(_, index) => index.toString()}
          scrollEnabled={false}
        />

        <Text style={styles.sectionTitle}>Price Store: Style Under Your Budget!</Text>
        <FlatList
          data={priceStoreData}
          renderItem={({ item }) => (
            <View style={styles.priceCard}>
              <Image source={ item.img } style={styles.priceImg} />
              <Text style={styles.priceTitle}>{item.title}</Text>
              <Text style={styles.priceCategory}>{item.category}</Text>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />

        <View style={styles.brandsHeader}>
          <Text style={styles.sectionTitle}>Brands To Cart </Text>
        </View>

        <View style={styles.searchRow}>
            <View style={styles.searchBox}>
              <MaterialCommunityIcons
                name="magnify"
                size={24}
                color="#fff"
                style={{ marginHorizontal: 6 }}
              />
              <TextInput
                placeholder="Search here"
                placeholderTextColor="#888"
                style={styles.searchInput}
              />
            </View>
            <TouchableOpacity style={styles.filterBox}>
              <MaterialCommunityIcons name="filter-variant" size={24} color="white" />
            </TouchableOpacity>
          </View>

        {/* Cards */}
        <FlatList
          data={[
            {
              title: "Football Boots",
              category: "Sports & Fitness",
              price: 2800,
              originalPrice: 3200,
              discount: 30,
              image: require('../../assets/images/Products/sneaker.jpg'),
            },
            {
              title: "Cricket Bat",
              category: "Sports & Fitness",
              price: 2800,
              originalPrice: 3200,
              discount: 30,
              image: require('../../assets/images/Products/cricketbat.jpg'),
            },
            {
              title: "Shooting Sleeves",
              category: "Sports & Fitness",
              price: 2800,
              originalPrice: 3200,
              discount: 30,
              image: {uri: 'https://i.ebayimg.com/images/g/N0cAAOSwnghlXP3v/s-l1600.jpg'},
            },
            {
              title: "Shoulder Pads",
              category: "Sports & Fitness",
              price: 2800,
              originalPrice: 3200,
              discount: 30,
              image: {uri: 'https://m.media-amazon.com/images/I/51fkHfEYCgL._SY1000_.jpg'},
            },
            {
              title: "Baseball Mockups",
              category: "Sports & Fitness",
              price: 2800,
              originalPrice: 3200,
              discount: 30,
              image: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWha2JSASmIjs6DGkt-hNS6RThGafXFRO53w&s'},
            },
            {
              title: "Grip Tape",
              category: "Sports & Fitness",
              price: 2800,
              originalPrice: 3200,
              discount: 30,
              image: {uri: 'https://www.indooroutdoors.co.uk/cdn/shop/products/megamaxx-anti-slip-grip-tape-indoor-outdoors.jpg?v=1629470167'},
            },
          ]}
          renderItem={({ item }) => <WishListCard item={item} />}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          scrollEnabled={false} 
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingHorizontal: 6 }}
        />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1A1A1A",
    paddingTop: 40    
  },
  bannerimage: { 
    width: "100%", 
    height: 200, 
    justifyContent: "flex-end",
    marginBottom: 20
  },
  bannerbutton: {
    backgroundColor: "#39FF14",
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 20,
  },
  bannerbuttonText: { 
    color: "#fff", 
    fontWeight: "bold" 
  },

  scrollProductCard: {
    width: width/2,
    height: 200,
    overflow: "hidden",
    marginBottom: 30,
  },

  text: { 
    color: "#fff", 
    marginVertical: 15, 
    fontSize: 16,
    alignSelf: 'center'
  },
  wheelContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20, 
  },
  centerButton: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centerButtonText: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#2B73CA",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 6,
  },
  logo: { 
    width: 100, 
    height: 80, 
    resizeMode: "contain" 
  },

  scrollCategoryCard: {
    width: 180,
    height: 200,
    overflow: "hidden",
  },
  scrollCategoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryTexts: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    alignSelf: 'flex-start',
    left: 10
  },

  sectionTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginVertical: 20,
    marginLeft: 10,
    alignSelf: 'center'
  },

  categoryCard: {
    width: CARD_SIZE,
    height: 155,
    position: "relative",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    // backgroundColor: "rgba(0,0,0,0.1)",
    paddingVertical: 4,
    alignItems: "center",
  },
  categoryText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 6,
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    margin: 4,
    padding: 8,
    width: (width - 40) / 2,
    borderWidth: 1,
    borderColor: '#aaa',
    marginBottom: 10,  
  },
  imageContainer: {
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 3,
  },
  details: {
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
  category: {
    color: "#aaa",
    fontSize: 12,
    marginVertical: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  price: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 5,
  },
  strike: {
    color: "#888",
    fontSize: 12,
    textDecorationLine: "line-through",
    marginRight: 5,
  },
  discount: {
    color: "limegreen",
    fontSize: 12,
    fontWeight: "600",
  },
  button: {
    borderWidth: 1,
    borderColor: "#aaa",
    paddingVertical: 6,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
  
  priceCard: {
    width: 130, 
    height: 155,     
    marginRight: 16, 
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  priceImg: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    resizeMode: "cover",
  },
  priceTitle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 6,
  },
  priceCategory: {
    color: "#000",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 8
  },

  brandsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 8,
    height: 42,
    marginRight: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: "white",
    paddingLeft: 6,
  },
  filterBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    borderColor: '#fff',
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#444",
    backgroundColor: "#111",
  },
  navItem: { alignItems: "center" },
  navText: { color: "#fff", fontSize: 12, marginTop: 2 },
});
