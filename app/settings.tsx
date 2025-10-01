import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

export default function SettingsScreen() {

  const MenuItem = ({ icon, label, onPress }: any) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        {icon}
        <Text style={styles.menuText}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#aaa" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name = 'chevron-back' size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Settings</Text>

      <ScrollView>
        {/* Account Section */}
        <MenuItem
          icon={<Ionicons name="lock-closed-outline" size={22} color="#fff" />}
          label="Account Setting"
        />
        <MenuItem
          icon={<Feather name="folder" size={22} color="#fff" />}
          label="Privacy"
        />
        <MenuItem
          icon={
            <Ionicons name="notifications-outline" size={22} color="#fff" />
          }
          label="Notifications"
        />

        {/* General Section */}
        <MenuItem
          icon={<Ionicons name="person-add-outline" size={22} color="#fff" />}
          label="Share with friends"
          onPress={() => {}}
        />
        <MenuItem
          icon={<Ionicons name="star-outline" size={22} color="#fff" />}
          label="Feedback"
          onPress={() => {}}
        />
        <MenuItem
          icon={<Ionicons name="help-circle-outline" size={22} color="#fff" />}
          label="Help"
          onPress={() => {}}
        />
        <MenuItem
          icon={<MaterialIcons name="headset-mic" size={22} color="#fff" />}
          label="Contact"
          onPress={() => {}}
        />

        {/* Legal Section */}
        <MenuItem
          icon={<Feather name="file-text" size={22} color="#fff" />}
          label="Terms of service"
          onPress={() => {}}
        />
        <MenuItem
          icon={<FontAwesome5 name="shield-alt" size={20} color="#fff" />}
          label="Privacy Policy"
          onPress={() => {}}
        />

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutBtn} onPress={() => {}}>
          <Ionicons name="power-outline" size={20} color="#fff" />
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111", 
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
    // backgroundColor: '#DEECFBBF',
    padding: 8,
    borderRadius: 50,
  },
  title: {
    fontSize: 22,
    top: 10,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 40,
    color: '#fff'
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 12,
  },
  signOutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#E53935", // red button
  },
  signOutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
