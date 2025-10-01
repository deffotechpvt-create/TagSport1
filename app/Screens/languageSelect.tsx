import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Language = {
  id: string;
  country: string;
  lang: string;
  native: string;
  flag: string;
};

const languages: Language[] = [
  { id: "1", country: "United States (UK)", lang: "English", native: "English", flag: "https://flagcdn.com/w320/us.png" },
  { id: "2", country: "India (Hindi)", lang: "Hindi", native: "हिन्दी", flag: "https://flagcdn.com/w320/in.png" },
  { id: "3", country: "India (Tamil)", lang: "Tamil", native: "தமிழ்", flag: "https://flagcdn.com/w320/in.png" },
  { id: "4", country: "India (Telugu)", lang: "Telugu", native: "తెలుగు", flag: "https://flagcdn.com/w320/in.png" },
  { id: "5", country: "India (Marathi)", lang: "Marathi", native: "मराठी", flag: "https://flagcdn.com/w320/in.png" },
  { id: "6", country: "Bangladesh (Bengali)", lang: "Bengali", native: "বাংলা", flag: "https://flagcdn.com/w320/bd.png" },
  { id: "7", country: "Pakistan (Urdu)", lang: "Urdu", native: "اردو", flag: "https://flagcdn.com/w320/pk.png" },
  { id: "8", country: "France (French)", lang: "French", native: "Français", flag: "https://flagcdn.com/w320/fr.png" },
  { id: "9", country: "Spain (Spanish)", lang: "Spanish", native: "Español", flag: "https://flagcdn.com/w320/es.png" },
];

const LanguageScreen = () => {
  const [selected, setSelected] = useState<string>("1");

  const renderItem = ({ item }: { item: Language }) => (
    <TouchableOpacity
        style={[styles.item, selected === item.id && styles.selectedItem]}
        onPress={() => {setSelected(item.id),
               router.push('/Screens/start')
        }}>
            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                <Image source={{ uri: item.flag }} style={styles.flag} />
                <Text style={styles.country}>{item.country}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.native}>({item.native})</Text>
            </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Language</Text>
      </View>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 6,
    marginBottom: 20,
  },
  headerTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#1A1A1A",
  },
  country: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 15,
    fontWeight: "600",
  },
  native: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  selectedItem: {
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  flag: {
    width: 34,
    height: 34,      
    borderRadius: 17, 
    resizeMode: "cover", 
  },
  textContainer: {
    flex: 1,
  },
  separator: {
    height: 12,
  },
});

export default LanguageScreen;
