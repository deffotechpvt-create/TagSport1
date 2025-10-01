import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, Href } from "expo-router";

export default function SwitchStoreModal({ visible, onClose }: { visible: boolean, onClose: () => void }) {
  const router = useRouter();

  const handleSelect = (path: Href) => {
    onClose();
    router.push(path);
    };
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Discover</Text>

          <TouchableOpacity onPress={() => handleSelect("/(tabs)/home")}>
            <Text style={styles.optionText}>Play</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSelect("/Fitness/health")}>
            <Text style={styles.optionText}>Fitness</Text>
          </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSelect("/Booking/homePage")}>
            <Text style={styles.optionText}>Store</Text>
            </TouchableOpacity>


          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  closeBtn: {
    marginTop: 15,
    alignSelf: "center",
  },
  closeText: {
    color: "red",
    fontWeight: "bold",
  },
});
