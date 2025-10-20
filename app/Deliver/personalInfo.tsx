import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function PersonalInfoScreen() {
  const [open, setOpen] = useState(false);
  const [sport, setSport] = useState("");
  const [items, setItems] = useState([
    { label: "English", value: "English" },
    { label: "Tamil", value: "Tamil" },
    { label: "Hindi", value: "Hindi" },
    { label: "Telugu", value: "Telugu" },
  ]);
  
  const [profile, setProfile] = useState<string | null>(null);
  const [aadhaar, setAadhaar] = useState<string | null>(null);
  const [pan, setPan] = useState<string | null>(null);
  const [dl, setDl] = useState<string | null>(null);

  const pickImage = async (setImage: (uri: string | null) => void) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      {/* Title */}
      <Text style={styles.title}>Personal information</Text>
      <Text style={styles.subTitle}>
        Enter the details below so we can get to know and serve you better
      </Text>

      {/* Name */}
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#888" />

      {/* Date of Birth */}
      <Text style={styles.label}>Date of birth</Text>
      <TextInput style={styles.input} placeholder="dd - mm - yyyy" placeholderTextColor="#888" />

      {/* City */}
      <Text style={styles.label}>City</Text>
      <TextInput style={styles.input} placeholder="Enter city name" placeholderTextColor="#888" />

      {/* Address */}
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, { height: 70 }]}
        placeholder="Enter your address"
        placeholderTextColor="#888"
        multiline
      />

      {/* Languages */}
      <Text style={styles.label}>Language you know</Text>
      <DropDownPicker
        open={open}
        value={sport}
        items={items}
        setOpen={setOpen}
        setValue={setSport}
        setItems={setItems}
        placeholder="Select one or multiple"
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

      {/* Profile Picture */}
      <Text style={styles.label}>Your Profile Picture</Text>
      <View style={[styles.uploadBox, { height: 80 }]}>
          <View style={styles.profileRow}>
          {profile ? (
            <Image source={{ uri: profile }} style={styles.profileImage} />
          ) : (
            <Ionicons name="person-circle-outline" size={50} color="#aaa" />
          )}
          <TouchableOpacity style={styles.uploadBtn} onPress={() => pickImage(setProfile)}>
              <Ionicons name="camera" size={18} color="#007BFF" />
            <Text style={styles.uploadBtnText}>Upload Photo</Text>
          </TouchableOpacity>
        </View>
      </View>


      {/* Aadhaar */}
      <Text style={styles.label}>Aadhar card</Text>
      <View style={styles.uploadBox}>
        {aadhaar ? (
          <Image source={{ uri: aadhaar }} style={styles.uploadImage} />
        ) : (
          <>
            <Text style={styles.uploadDesc}>
              Upload photo of your Aadhaar card{"\n"}with your clear name and photo
            </Text>
            <TouchableOpacity style={styles.uploadBtn} onPress={() => pickImage(setAadhaar)}>
              <Ionicons name="camera" size={18} color="#007BFF" />
              <Text style={styles.uploadBtnText}>Upload Photo</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* PAN */}
      <Text style={styles.label}>Pan card</Text>
      <View style={styles.uploadBox}>
        {pan ? (
          <Image source={{ uri: pan }} style={styles.uploadImage} />
        ) : (
          <>
            <Text style={styles.uploadDesc}>
              Upload photo of your Pan card{"\n"}with your clear name and photo
            </Text>
            <TouchableOpacity style={styles.uploadBtn} onPress={() => pickImage(setPan)}>
              <Ionicons name="camera" size={18} color="#007BFF" />
              <Text style={styles.uploadBtnText}>Upload Photo</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Driving License */}
      <Text style={styles.label}>Driving License</Text>
      <View style={styles.uploadBox}>
        {dl ? (
          <Image source={{ uri: dl }} style={styles.uploadImage} />
        ) : (
          <>
            <Text style={styles.uploadDesc}>
              Upload photo of your Driving License{"\n"}with your clear name and photo
            </Text>
            <TouchableOpacity style={styles.uploadBtn} onPress={() => router.push('/Deliver/order')}>
              {/* pickImage(setDl) &&  */}
              <Ionicons name="camera" size={18} color="#007BFF" />
              <Text style={styles.uploadBtnText}>Upload Photo</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 40,
    paddingHorizontal: 24 
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 13,
    color: "#aaa",
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 10,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFFFFF4D",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 10,
    color: "#fff",
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

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginVertical: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  uploadBox: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#FFFFFF4D",
    borderRadius: 8,
    height: 170,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  uploadDesc: {
    color: "#aaa",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 12,
  },
  uploadBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0af",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  uploadBtnText: {
    color: "#007BFF",
    marginLeft: 6,
    fontWeight: "600",
    fontSize: 14,
  },
  uploadImage: {
    width: 100,
    height: 80,
    borderRadius: 6,
    resizeMode: "cover",
  },
});
