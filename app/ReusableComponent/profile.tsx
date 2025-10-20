import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProfileScreen = () => {
  const renderItem = (icon: any, label: string, isLast?: boolean, onPress?: () => void) => (
    <TouchableOpacity
        style={[styles.item, isLast && styles.lastItem]}  
        onPress={onPress}
    >
        <View style={styles.itemLeft}>
        {icon}
        <Text style={styles.itemText}>{label}</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#aaa" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={{top: -8}} onPress={()=>router.back()}><Ionicons name="close" size={24} color="#fff" /></TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* First Group */}
      <View style={styles.group}>
        {renderItem(<Ionicons name="bar-chart-outline" size={24} color="#fff" />, "Progress Tracking", false, () => router.push('/Booking/Profile/progress'))}
        {renderItem(<Ionicons name="trophy-outline" size={24} color="#fff" />, "Achievements", false, () => router.push('/Booking/Profile/achievements'))}
        {renderItem(<Ionicons name="document-text-outline" size={24} color="#fff" />, "Terms of service", true)}
      </View>

      {/* Second Group */}
      <View style={styles.group}>
        {renderItem(<Ionicons name="person-add-outline" size={24} color="#fff" />, "Share with friends")}
        {renderItem(<Ionicons name="star-outline" size={24} color="#fff" />, "Feedback")}
        {renderItem(<Ionicons name="help-circle-outline" size={24} color="#fff" />, "Help")}
        {renderItem(<Ionicons name="headset-outline" size={24} color="#fff" />, "Contact", true)}
      </View>

      {/* Third Group */}
      <View style={styles.group}>
        {renderItem(<Ionicons name="shield-checkmark-outline" size={24} color="#fff" />, "Privacy Policy")}
        {renderItem(<Ionicons name="settings-outline" size={24} color="#fff" />, "Settings", true)}
      </View>

      {/* Sign Out */}
      <TouchableOpacity style={styles.signOutButton}>
        <Ionicons name="power-outline" size={24} color="#FF2E2E" />
        <Text style={styles.signOutText}>Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 30,
    paddingTop: 45,
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
    fontWeight: "900",
    marginBottom: 10
  },
  group: {
    borderRadius: 10,
    marginBottom: 30,
    borderColor: '#FFFFFF80',
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    marginHorizontal: 4 ,
  },
  lastItem: {
    borderBottomWidth: 0, 
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
  signOutButton: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    paddingVertical: 14,
    paddingLeft: 22,
    borderRadius: 10,
    borderWidth: 1, 
    borderColor: '#FFFFFF80'
  },
  signOutText: {
    color: "#FF2E2E",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
});