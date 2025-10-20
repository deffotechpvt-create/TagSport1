import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DeliveryTrackingScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef<TextInput[]>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move focus to next input
    if (text && index < otp.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 40, paddingBottom: 40 }}>
      <Image
        source={require('../../assets/images/Delivery/map.jpg')} 
        style={styles.map}
      />

      <Text style={styles.label}>Enter OTP from receiver</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              if (ref) otpRefs.current[index] = ref;
            }}
            style={styles.otpBox}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>

      <Text style={styles.label}>Photo Proof (optional)</Text>
      <View style={styles.photoRow}>
        <TouchableOpacity style={styles.uploadBtn}>
          <Ionicons name="cloud-upload-outline" size={22} color="white" />
          <Text style={styles.uploadText}>Upload Photo</Text>
        </TouchableOpacity>

        <View style={styles.qrBox}>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="black" />
        </View>
      </View>

      <Text style={[styles.label, { marginTop: 20 }]}>Current State</Text>
      <View style={styles.timeline}>
        <TimelineItem
          title="Order Confirmation"
          date="Sun, 26th Mar '25 - 9:00 am"
          desc="Your item has been picked up by courier partner"
          subDate="Mon, 27th Mar '25 - 11:00 am"
          active
          isLast={false}
        />
        <TimelineItem
          title="Shipped"
          date="Mon, 27th Mar '25 - 12:06 am"
          desc="Your item has been received in the hub nearest to you"
          active
          isLast={false}
        />
        <TimelineItem
          title="Out for delivery"
          date="Wed, 29th Mar '25 - 8:36 am"
          desc="Your item is out for delivery"
          active
          isLast={false}
        />
        <TimelineItem
          title="Delivered"
          date="Wed, 29th Mar '25 - 5:30 pm"
          active={false}
          isLast={true}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/Deliver/verifyOTP")}>
        <Text style={styles.buttonText}>Reached Delivery Location</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const TimelineItem = ({ title, date, desc, subDate, active, isLast }: any) => {
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineIndicatorContainer}>
        <View
          style={[
            styles.outerCircle,
            { borderColor: active ? "#4c8cff" : "#FFFFFF60" },
          ]}
        >
          <View
            style={[
              styles.innerCircle,
              { backgroundColor: active ? "#4c8cff" : "#FFFFFF60" },
            ]}
          />
        </View>

        {!isLast && <View style={[styles.line, { backgroundColor: active ? "#4c8cff" : "#FFFFFF60" }]} />}
      </View>

      <View style={styles.timelineContent}>
        <Text style={styles.timelineTitle}>{title}</Text>
        <Text style={styles.timelineDate}>{date}</Text>
        {desc && <Text style={styles.timelineDesc}>{desc}</Text>}
        {subDate && <Text style={styles.timelineDate}>{subDate}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    padding: 16,
  },
  map: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderRadius: 8,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 5,  
    borderWidth: 1,
    borderColor: '#fff'
  },
  photoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 30
  },
  uploadBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 12,
    borderRadius: 8,
  },
  uploadText: {
    color: "white",
    marginLeft: 8,
  },
  qrBox: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  timeline: {
    marginTop: 10,
    paddingHorizontal: 24
  },
  timelineItem: {
    flexDirection: "row",
    marginBottom: 24,
  },
  timelineLeft: {
    width: 30,
    alignItems: "center",
  },
  timelineIndicatorContainer: {
    alignItems: "center",
  },
  outerCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  line: {
    flex: 2 ,
    width: 1,
    backgroundColor: "#333",
    borderStyle: 'dashed',
    borderWidth: 1,
    marginBottom: -25
  },
  timelineContent: {
    flex: 1,
    paddingLeft: 10,
  },
  timelineTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  timelineDate: {
    color: "#bbb",
    fontSize: 13,
  },
  timelineDesc: {
    color: "#888",
    fontSize: 13,
    marginVertical: 2,
  },
  button: {
    backgroundColor: "#7f3dff",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DeliveryTrackingScreen;
