import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Agenda, AgendaEntry, AgendaSchedule } from "react-native-calendars";

// Extend AgendaEntry to include your custom fields
interface CustomAgendaEntry extends AgendaEntry {
  time: string;
  title: string;
  color: string;
}

type CustomAgendaSchedule = {
  [date: string]: CustomAgendaEntry[];
};

const items: CustomAgendaSchedule = {
  "2025-02-05": [
    { time: "10:00 AM", title: "Meeting", color: "#FF5733", name: "Meeting", height: 60, day: "2025-02-05" },
    { time: "2:00 PM", title: "Lunch", color: "#33FF57", name: "Lunch", height: 60, day: "2025-02-05" },
  ],
  "2025-02-06": [
    { time: "9:00 AM", title: "Workout", color: "#3357FF", name: "Workout", height: 60, day: "2025-02-06" },
  ],
};

export default function CalendarScreen() {
  const renderItem = (reservation: CustomAgendaEntry, isFirst: boolean) => {
    return (
      <View style={[styles.item, { backgroundColor: reservation.color }]}>
        <Text style={styles.time}>{reservation.time}</Text>
        <Text style={styles.title}>{reservation.title}</Text>
      </View>
    );
  };

  return (
    <Agenda
      items={items as AgendaSchedule} // ✅ force cast so Agenda accepts it
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  time: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  title: {
    fontSize: 12,
    color: "#fff",
  },
});
