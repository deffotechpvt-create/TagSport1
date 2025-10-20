// import {
//   Feather,
//   FontAwesome5,
//   Ionicons,
//   MaterialIcons,
// } from "@expo/vector-icons";
// import { router } from "expo-router";
// import React from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// export default function SettingsScreen() {

//   const MenuItem = ({ icon, label, onPress }: any) => (
//     <TouchableOpacity style={styles.menuItem} onPress={onPress}>
//       <View style={styles.menuLeft}>
//         {icon}
//         <Text style={styles.menuText}>{label}</Text>
//       </View>
//       <Ionicons name="chevron-forward" size={20} color="#aaa" />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//         <Ionicons name = 'chevron-back' size={24} color="#fff" />
//       </TouchableOpacity>

//       <Text style={styles.title}>Settings</Text>

//       <ScrollView>
//         {/* Account Section */}
//         <MenuItem
//           icon={<Ionicons name="lock-closed-outline" size={22} color="#fff" />}
//           label="Account Setting"
//         />
//         <MenuItem
//           icon={<Feather name="folder" size={22} color="#fff" />}
//           label="Privacy"
//         />
//         <MenuItem
//           icon={
//             <Ionicons name="notifications-outline" size={22} color="#fff" />
//           }
//           label="Notifications"
//         />

//         {/* General Section */}
//         <MenuItem
//           icon={<Ionicons name="person-add-outline" size={22} color="#fff" />}
//           label="Share with friends"
//           onPress={() => {}}
//         />
//         <MenuItem
//           icon={<Ionicons name="star-outline" size={22} color="#fff" />}
//           label="Feedback"
//           onPress={() => {}}
//         />
//         <MenuItem
//           icon={<Ionicons name="help-circle-outline" size={22} color="#fff" />}
//           label="Help"
//           onPress={() => {}}
//         />
//         <MenuItem
//           icon={<MaterialIcons name="headset-mic" size={22} color="#fff" />}
//           label="Contact"
//           onPress={() => {}}
//         />

//         {/* Legal Section */}
//         <MenuItem
//           icon={<Feather name="file-text" size={22} color="#fff" />}
//           label="Terms of service"
//           onPress={() => {}}
//         />
//         <MenuItem
//           icon={<FontAwesome5 name="shield-alt" size={20} color="#fff" />}
//           label="Privacy Policy"
//           onPress={() => {}}
//         />

//         {/* Sign Out Button */}
//         <TouchableOpacity style={styles.signOutBtn} onPress={() => {}}>
//           <Ionicons name="power-outline" size={20} color="#fff" />
//           <Text style={styles.signOutText}>Sign out</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#111", 
//     paddingHorizontal: 16,
//     paddingTop: 50,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 50,
//     left: 16,
//     zIndex: 10,
//     // backgroundColor: '#DEECFBBF',
//     padding: 8,
//     borderRadius: 50,
//   },
//   title: {
//     fontSize: 22,
//     top: 10,
//     fontWeight: '900',
//     textAlign: 'center',
//     marginBottom: 40,
//     color: '#fff'
//   },
//   menuItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "",
//   },
//   menuLeft: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   menuText: {
//     color: "#fff",
//     fontSize: 16,
//     marginLeft: 12,
//   },
//   signOutBtn: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 20,
//     paddingVertical: 14,
//     borderRadius: 12,
//     backgroundColor: "#E53935", // red button
//   },
//   signOutText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//     marginLeft: 8,
//   },
// });
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SettingScreen = () => {
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
        <TouchableOpacity style={{top: -8}} onPress={()=>router.back()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Setting</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* First Group */}
      <View style={styles.group}>
        {renderItem(<Ionicons name="lock-closed-outline" size={24} color="#fff" />, "Account Setting", false )}
        {renderItem(<Ionicons name="folder-outline" size={24} color="#fff" />, "Privacy", false )}
        {renderItem(<Ionicons name="notifications-outline" size={24} color="#fff" />, "Notifications", true)}
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
        {renderItem(<Ionicons name="document-text-outline" size={24} color="#fff" />, "Terms of service", false)}
        {renderItem(<Ionicons name="shield-checkmark-outline" size={24} color="#fff" />, "Privacy Policy", true)}
      </View>

      {/* Sign Out */}
      <TouchableOpacity style={styles.signOutButton}>
        <Ionicons name="power-outline" size={24} color="#FF2E2E" />
        <Text style={styles.signOutText}>Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SettingScreen;

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