import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const DietForm = () => {
  const [open, setOpen] = useState(false);
  const [sport, setSport] = useState("Kabaddi");
  const [items, setItems] = useState([
    { label: "Kabaddi", value: "Kabaddi" },
    { label: "Cricket", value: "Cricket" },
    { label: "Football", value: "Football" },
    { label: "Running", value: "Running" },
  ]);

  const [currentWeight, setCurrentWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [duration, setDuration] = useState("");
  const [goal, setGoal] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const goals = [
    "Lose weight",
    "Maintain weight",
    "Gain weight",
    "Gain muscle",
    "Manage stress",
    "Increase step count",
  ];
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View style={styles.headerRow}>
        <Ionicons
          name="chevron-back"
          size={26}
          color="#fff"
          onPress={() => router.back()}
        />
        <Text style={styles.date}>Today, {formattedDate}</Text>
      </View>


      <Text style={styles.label}>Select Sports</Text>
      <DropDownPicker
        open={open}
        value={sport}
        items={items}
        setOpen={setOpen}
        setValue={setSport}
        setItems={setItems}
        placeholder="Choose a sport"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={{ color: "white" }}
        placeholderStyle={{ color: "#aaa" }}
        arrowIconStyle={{}}
        ArrowDownIconComponent={({ style }) => (
            <Ionicons name="chevron-down" size={20} color="white"/>
        )}
        ArrowUpIconComponent={({ style }) => (
            <Ionicons name="chevron-up" size={20} color="white" />
        )}
      />

      <Text style={styles.label}>Weight ( Kg )</Text>
      <View style={styles.row}>
        <TextInput
          placeholder="Current weight"
          placeholderTextColor="#aaa"
          style={styles.input}
          keyboardType="numeric"
          value={currentWeight}
          onChangeText={setCurrentWeight}
        />
        <TextInput
          placeholder="Target weight"
          placeholderTextColor="#aaa"
          style={styles.input}
          keyboardType="numeric"
          value={targetWeight}
          onChangeText={setTargetWeight}
        />
      </View>

      <Text style={styles.label}>Duration ( Months )</Text>
      <TextInput
        placeholder="Enter duration"
        placeholderTextColor="#aaa"
        style={styles.inputFull}
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />

      <Text style={styles.label}>Now select your Goals !</Text>
      {goals.map((g, idx) => {
        const isSelected = selectedGoals.includes(g);
        return (
            <TouchableOpacity
            key={idx}
            style={[styles.goalButton, isSelected && styles.activeGoal]}
            onPress={() => {
                if (isSelected) {
                setSelectedGoals(selectedGoals.filter(goal => goal !== g));
                } else {
                setSelectedGoals([...selectedGoals, g]);
                }
            }}
            >
            <Text style={styles.goalText}>{g}</Text>
            </TouchableOpacity>
        );
      })}

      <TouchableOpacity style={{ marginTop: 30 }} onPress={()=>router.push('/Fitness/Health/health')}>
        <LinearGradient
          colors={["#4776E6", "#8E54E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.startBtn}
        >
          <Text style={styles.startBtnText}>Start Your Diet</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DietForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A", 
    paddingTop: 70,
    paddingHorizontal: 20
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  date: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 20,
  },
  label: {
    color: "white",
    fontSize: 16,
    marginVertical: 20,
    fontWeight: "600",
  },
  dropdown: {
    backgroundColor: "#1a1a1a",
    borderColor: "#FFFFFF4D",
    marginBottom: 15,
  },
  dropdownContainer: {
    backgroundColor: "#1a1a1a",
    borderColor: "#FFFFFF4D",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 14,
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF4D'
  },
  inputFull: {
    color: "white",
    fontSize: 14,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF4D'
  },
  goalButton: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#FFFFFF4D'
  },
  activeGoal: {
    borderColor: "#007BFF",
    borderWidth: 1,
  },
  goalText: {
    color: "white",
    fontSize: 14,
  },
  startBtn: {
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
  },
  startBtnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
