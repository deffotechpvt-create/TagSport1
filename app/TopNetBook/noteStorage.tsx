import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Platform } from "react-native";

export type Note = {
  title: string;
  note: string;
  color: string;
  time: string;
  alarm: boolean;
};

const STORAGE_KEY = "NOTES";

export const loadNotes = async (): Promise<Record<string, Note[]>> => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};

export const saveNotes = async (notes: Record<string, Note[]>) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

export const clearAllNotes = async () => {
  await AsyncStorage.removeItem(STORAGE_KEY);
  if (Platform.OS === "web") {
    window.alert("All notes cleared!");
  } else {
    Alert.alert("Success", "All notes cleared!");
  }
};
