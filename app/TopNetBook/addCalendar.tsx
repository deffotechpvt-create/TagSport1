import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Calendar } from "react-native-calendars";
import { loadNotes, Note } from "../TopNetBook/noteStorage";

export default function CalendarScreen() {
  const [notes, setNotes] = useState<Record<string, Note[]>>({});
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const data = await loadNotes();
        setNotes(data);
      })();
    }, [])
  );

  const todayStr = new Date().toISOString().split("T")[0];
  const tomorrowStr = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  })();

  // Multidot support for react-native-calendars
  const markedDates = Object.keys(notes).reduce((acc, date) => {
    acc[date] = {
      marked: true,
      dots: notes[date].map(note => ({
        color: note.color || "#00adf5",
        selectedDotColor: "#fff"
      })),
    };
    return acc;
  }, {} as Record<string, any>);

  markedDates[selectedDate] = {
    ...markedDates[selectedDate],
    selected: true,
    selectedColor: "#007bff",
    dots: notes[selectedDate]?.map(note => ({
      color: note.color || "#00adf5",
      selectedDotColor: "#fff"
    })) ?? []
  };

  // Format for super clear section labeling
  const sectionLabel = (date: string) => {
    if (date === todayStr) return `TODAY ${date}`;
    if (date === tomorrowStr) return `TOMORROW ${date}`;
    return date;
  };

  return (
    <ScrollView style={styles.container}>
      {/* MAP Top Section */}
      <View style={styles.mapContainer}>
        <ImageBackground
          source={require("../../assets/images/Photos/map.jpg")}
          style={styles.mapImage}
        >
          <TouchableOpacity style={styles.locationBtn}>
            <Ionicons name="locate" size={18} color="#1A1A1A" />
            <Text style={styles.locationText}>Use my location</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* Search bar below map */}
      <View style={styles.searchWrapper}>
        <TouchableOpacity
          activeOpacity={1.0}
          onPress={() => router.push("/TopNetBook/search")}
        >
          <View style={styles.searchInputWrapper}>
            <Ionicons
              name="search"
              size={18}
              color="#888"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#888"
              style={styles.searchInput}
              editable={false}
              pointerEvents="none"
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markingType="multi-dot"
        markedDates={markedDates}
        theme={{
          calendarBackground: "#1A1A1A",
          dayTextColor: "#fff",
          monthTextColor: "#fff",
          textDisabledColor: "#444",
          arrowColor: "#fff",
        }}
        style={styles.calendar}
      />

      <Text style={styles.dateTitle}>{sectionLabel(selectedDate)}</Text>
      <FlatList
        data={notes[selectedDate] || []}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteRow}>
            <View style={[styles.dot, { backgroundColor: item.color || "#888" }]} />
            <View style={styles.noteContainer}>
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteTime}>{item.time}</Text>
              <Text style={styles.noteDesc}>{item.note}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notes for this date.</Text>
        }
      />

      {selectedDate !== tomorrowStr &&
        (notes[tomorrowStr]?.length ?? 0) > 0 && (
          <>
            <Text style={styles.dateTitle}>{sectionLabel(tomorrowStr)}</Text>
            <FlatList
              data={notes[tomorrowStr] || []}
              keyExtractor={(_, i) => i.toString()}
              renderItem={({ item }) => (
                <View style={styles.noteRow}>
                  <View style={[styles.dot, { backgroundColor: item.color || "#888" }]} />
                  <View style={styles.noteContainer}>
                    <Text style={styles.noteTitle}>{item.title}</Text>
                    <Text style={styles.noteTime}>{item.time}</Text>
                    <Text style={styles.noteDesc}>{item.note}</Text>
                  </View>
                </View>
              )}
            />
          </>
        )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          router.push({
            pathname: "/TopNetBook/addNote",
            params: { date: selectedDate },
          })
        }
      >
        <Ionicons name="add" size={26} color="#007bff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24,
    paddingTop: 70,
  },
  
  mapContainer: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 40,
  },
  mapImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    justifyContent: "flex-end",
  },
  backIcon: {
    position: "absolute",
    top: 10,        
    left: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 8,
    borderRadius: 20,
  },
  locationBtn: {
    position: "absolute",
    bottom: 12,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  locationText: {
    color: "#1A1A1A",
    fontSize: 12,
    marginLeft: 4,
  },

  searchWrapper: {
    alignSelf: "center",
    top: -50,
    width: "90%",
  },
  searchInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 8,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: "#000",
  },
  calendar: {
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    elevation: 3,
  },
  dateTitle: {
    color: "#007bff",
    marginTop: 10,
    marginBottom: 2,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 24,
    textTransform: "uppercase"
  },
  noteRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 24,
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 14,
    borderWidth: 1,
    borderColor: "#333",
  },
  noteContainer: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
    padding: 13,
  },
  noteTitle: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  noteTime: { color: "#999", fontSize: 13 },
  noteDesc: { color: "#ccc", fontSize: 14, marginTop: 2 },
  addButton: {
    position: "absolute",
    bottom: 0,
    right: 15,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    elevation: 10,
  },
  emptyText: { color: "#999", textAlign: "center", marginTop: 20, fontSize: 14 },
});
