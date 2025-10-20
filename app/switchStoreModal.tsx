import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SwitchStoreModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  if (!visible) return null;

  const handleSelect = (path: Href) => {
    onClose();
    router.push(path);
  };

  const stores = [
    {
      title: "PLAY",
      image:
        "https://www.shutterstock.com/image-photo/dynamic-intense-game-collage-africanamerican-260nw-2477186037.jpg",
      path: "/(tabs)/home" as any,
    },
    {
      title: "FITNESS",
      image:
        "https://t4.ftcdn.net/jpg/03/20/49/25/360_F_320492530_2aeFG0eKU03OM20OD4eLzRte0K6xpw9i.jpg",
      path: "/Fitness/home" as any,
    },
    {
      title: "STORE",
      image:
        "https://t4.ftcdn.net/jpg/02/86/93/35/360_F_286933595_BMa9QBz8qwJPcoqoTjs2lI4vnP7mYq3Z.jpg",
      path: "/Products/home" as any,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select a Store</Text>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={22} color="#ccc" />
        </TouchableOpacity>
      </View>

      {/* Store Options */}
      {stores.map((store, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          activeOpacity={0.9}
          onPress={() => handleSelect(store.path)}
        >
          <Image
            source={{ uri: store.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>{store.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    width: "100%",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginVertical: 6,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    bottom: 5,
    left: 10,
    right: 10,
    // backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 8,
    paddingVertical: 4,
  },
  overlayText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
