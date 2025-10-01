import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Pressable } from "react-native";
import SwitchStoreModal from "../switchStoreModal"; // import modal
import FloatingActionButton from "./floatingButton";

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);

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
            title: "Switch Store",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            tabBarButton: (props) => (
              <Pressable onPress={() => setModalVisible(true)} style={props.style}>
                {props.children}
              </Pressable>
            ),
          }}
        />

        <Tabs.Screen
          name="expl"
          options={{
            title: "Explore",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
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
          name="fitness"
          options={{
            title: "Fitness",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="walk-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="store"
          options={{
            title: "Store",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bag-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>

      {/* Switch Store Modal */}
      <SwitchStoreModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
}
