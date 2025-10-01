import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type MembershipCardProps = {
  title: string;
  description: string;
  dailyTime: string;
  access: string;
  others: string;
  price: string;
};

const MembershipCard: React.FC<MembershipCardProps> = ({
  title,
  description,
  dailyTime,
  access,
  others,
  price,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{description}</Text>

      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.cardLabel}>Daily time</Text>
          <Text style={styles.cardDetail}>{dailyTime}</Text>
        </View>
        <View>
          <Text style={styles.cardLabel}>Access</Text>
          <Text style={styles.cardDetail}>{access}</Text>
        </View>
      </View>

      <View style={{ marginTop: 8 }}>
        <Text style={styles.cardLabel}>Others</Text>
        <Text style={styles.cardDetail}>{others}</Text>
      </View>

      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const Premium = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={{ top: -5 }} onPress={()=> router.push('/Sports/CoachingCentre/coachingService')}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Go Premium</Text>
        <View style={{ width: 30 }} />
        
      </View>
      <Text style={styles.subTitle}>No commitment, Cancel anytime</Text>

      {/* Cards */}
      <MembershipCard
        title="Basic access Membership"
        description="Offers access to all gym facilities with options for morning -only. Includes payment options for monthly or annual plans."
        dailyTime="04:00 am - 10:00 am"
        access="Limited games"
        others="1 month Free classes"
        price="₹ 30.00 / month"
      />

      <MembershipCard
        title="Pro access Membership"
        description="Offers access to all gym facilities with options for morning -only. Includes payment options for monthly or annual plans."
        dailyTime="04:00 am - 10:00 pm"
        access="All games"
        others="All live games, No ads , E-mail Support."
        price="₹ 60.00 / month"
      />

      <MembershipCard
        title="Elite access Membership"
        description="Offers access to all gym facilities with options for morning -only. Includes payment options for monthly or annual plans."
        dailyTime="04:00 am - 10:00 pm"
        access="All games"
        others="All live games, No ads , E-mail Support, HD Quality"
        price="₹ 60.00 / month"
      />
    </ScrollView>
  );
};

export default Premium;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24,
    paddingTop: 45,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: -5
  },
  subTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 24,
    alignSelf: 'center'
  },
  card: {
    backgroundColor: "#333",
    padding: 24,
    borderRadius: 12,
    marginBottom: 18,
    width: "100%",
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 8,
  },
  cardText: {
    color: "#aaa",
    fontSize: 12,
    marginBottom: 12,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  cardLabel: {
    color: "#bbb",
    fontSize: 12,
    marginBottom: 2,
  },
  cardDetail: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  price: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    marginTop: 12,
  },
});
