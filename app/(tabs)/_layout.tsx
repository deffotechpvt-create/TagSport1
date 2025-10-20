import { Ionicons } from "@expo/vector-icons";
import { Tabs, usePathname, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, TouchableWithoutFeedback, View } from "react-native";
import SwitchStoreModal from "../switchStoreModal";
import FloatingActionButton from "./floatingButton";

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHomeScreen =
    pathname === "/home" || pathname === "/(tabs)/home";

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            backgroundColor: "#000",
            borderTopWidth: 0,
            elevation: 0,
            paddingTop: 10,
          },
          tabBarActiveTintColor: "#007BFF",
          tabBarInactiveTintColor: "#fff",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: isHomeScreen ? "Switch Store" : "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            tabBarButton: (props) => (
              <Pressable
                onPress={() => {
                  if (isHomeScreen) {
                    setModalVisible(true);
                  } else {
                    router.push("/home");
                  }
                }}
                style={props.style}
              >
                {props.children}
              </Pressable>
            ),
          }}
        />

        <Tabs.Screen
          name="bookEvent"
          options={{
            title: "Book Event",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="floatingButton"
          options={{
            tabBarButton: () => (
              <FloatingActionButton
                style={{ bottom: 35 }}
                onPress={() => console.log("Plus pressed")}
              >
                <Ionicons name="add" size={32} color="#fff" />
              </FloatingActionButton>
            ),
            tabBarLabel: "",
          }}
        />

        <Tabs.Screen
          name="bookClass"
          options={{
            title: "Book Class",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="barbell" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>

      {modalVisible && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "flex-end",
          }}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>

          <SwitchStoreModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </View>
      )}
    </>
  );
}
