import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const slotsData = [
  { id: "1", time: "6:30 PM - 7:00 PM", price: 150, oldPrice: 450 },
  { id: "2", time: "7:00 PM - 7:30 PM", price: 150, oldPrice: 450 },
  { id: "3", time: "7:30 PM - 8:00 PM", price: 150, oldPrice: 450 },
  { id: "4", time: "8:00 PM - 8:30 PM", price: 150, oldPrice: 450, booked: true },
  { id: "5", time: "8:30 PM - 9:00 PM", price: 150, oldPrice: 450 },
  { id: "6", time: "9:00 PM - 9:30 PM", price: 150, oldPrice: 450 },
  { id: "7", time: "9:30 PM - 10:00 PM", price: 150, oldPrice: 450 },
  { id: "8", time: "10:00 PM - 10:30 PM", price: 150, oldPrice: 450 },
  { id: "9", time: "10:30 PM - 11:00 PM", price: 150, oldPrice: 450 },
];

const sessions = ["Day", "Afternoon", "Evening", "Night"];

export default function BookingScreen() {
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [selectedSession, setSelectedSession] = useState("Night");
  const [successVisible, setSuccessVisible] = useState(false); 

  const getDates = () => {
    return Array.from({ length: 4 }, (_, i) =>
      currentDate.clone().add(i, "days")
    );
  };

  const handlePrev = () => {
    setCurrentDate(currentDate.clone().subtract(1, "days"));
  };

  const handleNext = () => {
    setCurrentDate(currentDate.clone().add(1, "days"));
  };

  const toggleSlot = (slotId: string) => {
    if (selectedSlots.includes(slotId)) {
      setSelectedSlots(selectedSlots.filter((id) => id !== slotId));
    } else {
      setSelectedSlots([...selectedSlots, slotId]);
    }
  };

  const renderSlot = ({ item }: { item: any }) => {
    const isSelected = selectedSlots.includes(item.id);

    if (item.booked) {
      return (
        <View style={styles.slot}>
          <Text style={styles.slotTime}>{item.time}</Text>
          <Text style={styles.bookedText}>Already Booked</Text>
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={[styles.slot, isSelected && styles.selectedSlot]}
        onPress={() => toggleSlot(item.id)}
      >
        <View style={styles.timePriceRow}>
          <Text style={[styles.slotTime, isSelected && styles.whiteText]}>
            {item.time}
          </Text>
          <Text style={styles.oldPrice}>₹ {item.oldPrice}</Text>
          <Text style={[styles.price, isSelected && styles.whiteText]}>
            ₹ {item.price}
          </Text>
        </View>

        {isSelected ? (
          <Ionicons name="close-circle-outline" size={22} color="#FF2E2E" />
        ) : (
          <Ionicons name="add-circle-outline" size={22} color="#007BFF" />
        )}
      </TouchableOpacity>
    );
  };

  const totalPrice = selectedSlots.length * 150;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.monthText}>
          {currentDate.format("MMMM")}{" "}
          <Text style={styles.yearText}>{currentDate.format("YYYY")}</Text>
        </Text>
      </View>

      {/* Date Selector */}
      <View style={styles.dateRow}>
        <TouchableOpacity onPress={handlePrev}>
          <Ionicons name="chevron-back" size={20} color="white" />
        </TouchableOpacity>

        {getDates().map((d) => {
          const formatted = d.format("YYYY-MM-DD");
          const isSelected = selectedDate === formatted;
          const isToday = d.isSame(moment(), "day");

          return (
            <TouchableOpacity
              key={formatted}
              style={[styles.dateBox, isSelected && styles.selectedDateBox]}
              onPress={() => setSelectedDate(formatted)}
            >
              <Text
                style={[
                  styles.dateLabel,
                  isSelected && styles.selectedDateText,
                ]}
              >
                {isToday ? "Today" : d.format("ddd")}
              </Text>
              <Text
                style={[
                  styles.dateNumber,
                  isSelected && styles.selectedDateText,
                ]}
              >
                {d.format("D")}
              </Text>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity onPress={handleNext}>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Session Filters */}
      <View style={styles.sessionRow}>
        {sessions.map((s) => (
          <TouchableOpacity
            key={s}
            style={[
              styles.sessionButton,
              selectedSession === s && styles.activeSessionButton,
            ]}
            onPress={() => setSelectedSession(s)}
          >
            <Text
              style={[
                styles.sessionText,
                selectedSession === s && styles.activeSessionText,
              ]}
            >
              {s}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Slots List */}
      <Text style={styles.availableText}>Available Times</Text>
      <FlatList
        data={slotsData}
        renderItem={renderSlot}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Bottom Bar */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerPrice}>
            ₹ {totalPrice} <Text style={styles.footerText}>Full charges</Text>{" "}
          </Text>
          <Text style={styles.footerText}>{selectedSlots.length} Slots</Text>
        </View>
        <TouchableOpacity
          disabled={selectedSlots.length === 0}
          style={selectedSlots.length === 0 && styles.disabledButton}
          onPress={() => setSuccessVisible(true)} 
        >
          <LinearGradient
            colors={["rgba(71,118,230,0.8)", "rgba(142,84,233,0.8)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.proceedButton}
          >
            <Text style={styles.proceedText}>Proceed</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/*  Success Modal */}
      <Modal
        transparent
        visible={successVisible}
        animationType="fade"
        onRequestClose={() => setSuccessVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setSuccessVisible(false)}
            >
            <View style={styles.successCircle}>
              <Ionicons name="checkmark" size={50} color="white" />
            </View>
            <Text style={styles.successTitle}>Success !</Text>
            <Text style={styles.successMessage}>
              Your request has been completed. {"\n"} Everything is set!
            </Text>

            {/* <TouchableOpacity
              style={styles.okButton}
              onPress={() => setSuccessVisible(false)}
            > */}
              {/* <Text style={styles.okText}>OK</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1A1A1A", paddingTop: 40 },
  header: { alignItems: "center", padding: 16 },
  monthText: { color: "white", fontSize: 22, fontWeight: "bold" },
  yearText: { color: "#007BFF" },

  dateRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  dateBox: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF1A",
    width: 50,
    height: 50,
  },
  selectedDateBox: { backgroundColor: "#39FF141A", borderColor: "#39FF14" },
  dateLabel: { color: "#fff", fontSize: 12, marginBottom: 2 },
  dateNumber: { color: "#fff", fontSize: 12, fontWeight: "600" },
  selectedDateText: { color: "white" },

  sessionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  sessionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFFFFF1A",
  },
  activeSessionButton: { backgroundColor: "#007BFF1A" },
  sessionText: { color: "white", fontSize: 12 },
  activeSessionText: { color: "white", fontWeight: "600" },

  availableText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    paddingHorizontal: 16,
    marginTop: 10,
  },

  slot: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF1A",
  },
  selectedSlot: { backgroundColor: "#39FF141A", borderColor: "#39FF14" },

  slotTime: { color: "white", fontSize: 14, fontWeight: "500", width: 135 },
  timePriceRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  oldPrice: {
    color: "gray",
    fontSize: 8,
    textDecorationLine: "line-through",
    marginLeft: 8,
  },
  price: { color: "white", fontSize: 14, fontWeight: "bold" },
  bookedText: { color: "#FF2E2E", fontSize: 14, fontWeight: "600" },
  whiteText: { color: "white" },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#FFFFFF33",
  },
  footerPrice: { color: "white", fontSize: 14, fontWeight: "600", marginBottom: 5 },
  footerText: { color: "gray", fontSize: 12 },
  proceedButton: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: { opacity: 0.5 },
  proceedText: { color: "white", fontWeight: "bold", fontSize: 16 },

  // ✅ Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#000",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  successCircle: {
    backgroundColor: "limegreen",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    marginBottom: 15,
  },
  successTitle: { color: "white", fontSize: 22, fontWeight: "bold", marginBottom: 8, alignSelf: 'center', },
  successMessage: { color: "#bbb", fontSize: 14, textAlign: "center", marginBottom: 20,  alignSelf: 'center', },
  
});
