import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { clearAllNotes, loadNotes, Note, saveNotes } from "../TopNetBook/noteStorage";

export default function AddNoteScreen() {
  const { date } = useLocalSearchParams<{ date: string }>();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [color, setColor] = useState("green");
  const [alarm, setAlarm] = useState(false);

  // date/time pickers
  const [day, setDay] = useState("23");
  const [month, setMonth] = useState("02");
  const [hour, setHour] = useState("03");
  const [minute, setMinute] = useState("30");
  const [period, setPeriod] = useState("PM");

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
  const periods = ["AM", "PM"];

  const saveNote = async () => {
    const newNote: Note = {
      title,
      note,
      color,
      time: `${day}-${month} ${hour}:${minute} ${period}`,
      alarm,
    };
    const data = await loadNotes();
    if (!data[date]) data[date] = [];
    data[date].push(newNote);
    await saveNotes(data);
    router.push('/TopNetBook/addCalendar');
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.push('/TopNetBook/addCalendar')}>
          <Ionicons name="close" size={22} color={'#fff'}/>
        </TouchableOpacity>
        <Text style={styles.header}>Add Note</Text>
      </View>
      <Text style={styles.subHeader}>Date and Time</Text>
      <View style={styles.pickerRow}>
        <View style={styles.pickerColumn}>
          <Text style={styles.pickerLabel}>Day</Text>
          <Picker
            selectedValue={day}
            onValueChange={setDay}
            style={styles.picker}
            dropdownIconColor="#fff"
          >
            {days.map((d) => (
              <Picker.Item key={d} label={d} value={d} color="#fff" />
            ))}
          </Picker>
        </View>
        <View style={styles.pickerColumn}>
          <Text style={styles.pickerLabel}>Mon</Text>
          <Picker
            selectedValue={month}
            onValueChange={setMonth}
            style={styles.picker}
            dropdownIconColor="#fff"
          >
            {months.map((m) => (
              <Picker.Item key={m} label={m} value={m} color="#fff" />
            ))}
          </Picker>
        </View>
        <View style={styles.pickerColumn}>
          <Text style={styles.pickerLabel}>Hr</Text>
          <Picker
            selectedValue={hour}
            onValueChange={setHour}
            style={styles.picker}
            dropdownIconColor="#fff"
          >
            {hours.map((h) => (
              <Picker.Item key={h} label={h} value={h} color="#fff" />
            ))}
          </Picker>
        </View>
        <View style={styles.pickerColumn}>
          <Text style={styles.pickerLabel}>Min</Text>
          <Picker
            selectedValue={minute}
            onValueChange={setMinute}
            style={styles.picker}
            dropdownIconColor="#fff"
          >
            {minutes.map((m) => (
              <Picker.Item key={m} label={m} value={m} color="#fff" />
            ))}
          </Picker>
        </View>
        <View style={styles.pickerColumn}>
          <Text style={styles.pickerLabel}> </Text>
          <Picker
            selectedValue={period}
            onValueChange={setPeriod}
            style={styles.picker}
            dropdownIconColor="#fff"
          >
            {periods.map((p) => (
              <Picker.Item key={p} label={p} value={p} color="#fff" />
            ))}
          </Picker>
        </View>
      </View>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Write the title"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Note</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Write your important note"
        placeholderTextColor="#888"
        value={note}
        onChangeText={setNote}
        multiline
      />
      <View style={styles.colorAlarmRow}>
        <View style={styles.colorSection}>
          <Text style={styles.label}>Color</Text>
          <View style={styles.colorRow}>
            {["green", "red", "grey", "blue"].map((c) => (
              <TouchableOpacity
                key={c}
                onPress={() => setColor(c)}
                style={[
                  styles.colorDot,
                  {
                    backgroundColor: c,
                    borderWidth: color === c ? 3 : 0,
                    borderColor: color === c ? "#fff" : "transparent",
                  },
                ]}
              />
            ))}
          </View>
        </View>
        <View style={styles.alarmSection}>
          <Text style={styles.label}>Alarm</Text>
          <Switch value={alarm} onValueChange={setAlarm} />
        </View>
      </View>
      <TouchableOpacity
        onPress={async () => {
          await clearAllNotes();
          router.back();
        }}
      >
        <Text style={{ color: "red", marginTop: 30 }}>Clear All Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveBtn} onPress={saveNote}>
        <Text style={styles.saveText}>Save Note</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingHorizontal: 24, paddingTop: 40, },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 10, 
    width: 150
  },

  header: { color: "#fff", fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  subHeader: { color: "#fff", fontSize: 16, marginBottom: 8 },
  pickerRow: { flexDirection: "row", justifyContent: "space-between" },
  pickerColumn: { flex: 1, alignItems: "center" },
  pickerLabel: { color: "#888", fontSize: 12, marginBottom: 2 },
  picker: {
    width: "100%",
    color: "#fff",
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
    marginBottom: 6
  },
  label: { color: "#aaa", marginTop: 12 },
  input: {
    backgroundColor: "#1c1c1c",
    color: "#fff",
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
    fontSize: 15,
  },
  colorAlarmRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 11,
    alignItems: "center",
  },
  colorSection: { flex: 0.7 },
  colorRow: { flexDirection: "row", justifyContent: "space-around", marginTop: 8 },
  colorDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginHorizontal: 7,
  },
  alarmSection: { flex: 0.3, alignItems: "center", },
  saveBtn: {
    backgroundColor: "#007bff",
    borderRadius: 10,
    padding: 17,
    marginTop: 34,
  },
  saveText: { color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 18 },
});
