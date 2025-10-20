import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const { width } = Dimensions.get("window");

interface Order {
  id: string;
  status: "Pickup Pending" | "Pickup Failed" | string;
}

interface Store {
  id: string;
  status: "Delivery Pending" | "Delivered" | string;
}


const ordersData: Order[] = [
  { id: "11250", status: "Pickup Pending" },
  { id: "11251", status: "Pickup Failed" },
  { id: "11252", status: "Pickup Pending" },
  { id: "11253", status: "Pickup Pending" },
  { id: "11254", status: "Pickup Pending" },
  { id: "11255", status: "Pickup Pending" },
  { id: "11256", status: "Pickup Pending" },
];

const storesData: Store[] = [
  { id: "11250", status: "Delivery Pending" },
  { id: "11251", status: "Delivered" },
  { id: "11252", status: "Delivered" },
  { id: "11253", status: "Delivered" },
  { id: "11254", status: "Delivered" },
  { id: "11255", status: "Delivered" },
  { id: "11256", status: "Delivered" },
];

const transactions = [
  { id: "1", type: "Completed", date: "April 21, 2025", amount: "+$400.00", color: "green" },
  { id: "2", type: "Withdrawal", date: "April 20, 2025", amount: "-$400.00", color: "red" },
  { id: "3", type: "Completed", date: "April 19, 2025", amount: "+$200.00", color: "green" },
  { id: "4", type: "Completed", date: "April 19, 2025", amount: "+$800.00", color: "green" },
];


const tabs = ["Orders", "Store", "Registration", "Earning Wallet"] as const;
type Tab = (typeof tabs)[number];

const statusColors: Record<string, string> = {
  "Pickup Pending": "#FF2E2E33",
  "Pickup Failed": "#FF2E2E33",
  "Delivery Pending": "#FF2E2E33",
  Delivered: "#37ff145c",

};

export default function OrdersStorePage() {
  const [activeTab, setActiveTab] = useState<Tab>("Orders");

  const onStatusPress = (id: string, status: string) => {
    Alert.alert(`Order/Store ${id}`, `Current status: ${status}`, [
      { text: "OK" },
    ]);
  };

  const renderOrderItem: ListRenderItem<Order> = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.orderInfo}>
        <Text style={styles.orderLabel}>Order No.</Text>
        <Text style={styles.orderNumber}>#{item.id}</Text>
      </View>

      <TouchableOpacity>
        <Ionicons
          name="chevron-down"
          size={20}
          color="#FF2E2E"
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.statusBadge,
          { backgroundColor: statusColors[item.status] || "#FF2E2E33" },
        ]}
        onPress={() => onStatusPress(item.id, item.status)}
      >
        <Text style={styles.statusText}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const onStatusChange = (status: string) => {
    setSelectedStatus(status);
  };

  const renderStoreItem: ListRenderItem<Store> = ({ item }) => (
    <View style={{ marginVertical: 7 }}>
      {/* Top row */}
      <View style={[styles.card, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.orderLabel}>Store No.</Text>
          <Text style={styles.orderNumber}>#{item.id}</Text>
        </View>

        <TouchableOpacity onPress={() => toggleExpand(item.id)} style={{ marginRight: '20%' }}>
          <Ionicons
            name={expandedId === item.id ? "chevron-up" : "chevron-down"}
            size={20}
            color="#FF2E2E"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.statusBadge, { backgroundColor: statusColors[item.status] || "#942B2B" }]}
          onPress={() => onStatusPress(item.id, item.status)}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </TouchableOpacity>
      </View>

      {expandedId === item.id && (
        <View style={styles.expandedBox}>
          <View style={styles.headerRow}>
            <View style={styles.userIcon}>
              <Ionicons name="person" size={18} color="#FF2E2E" />
            </View>
            <Text style={styles.userName}>Praveen Kumar</Text>
            <TouchableOpacity style={styles.callIconBtn}>
              <Ionicons name="call" size={20} color="#FF2E2E" />
            </TouchableOpacity>
          </View>

          <View style={styles.pickupCenter}>
            <View style={styles.pickupHeader}>
              <Ionicons name="hand-right" size={16} color="#FF2E2E" />
              <Text style={styles.pickupTitle}>Pickup Center-1</Text>
              <TouchableOpacity style={styles.callSmallBtn}>
                <Ionicons name="call" size={18} color="#FF2E2E" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.navigateSmallBtn}>
                <Ionicons name="navigate" size={18} color="#FF2E2E" />
              </TouchableOpacity>
            </View>
            <Text style={styles.pickupAddress}>Nikhita Stores, 201/B, Nirant Apts, Andheri East 400069</Text>
            <View style={styles.itemRow}>
              <Image source={require("../../assets/images/Products/bat.png")} style={styles.itemImage} />
              <View style={styles.itemDesc}>
                <Text style={styles.itemName}>Cricket bat</Text>
                <Text style={styles.itemNo}>No 1</Text>
                <Text style={styles.itemQty}>Qty: 1</Text>
              </View>
            </View>
          </View>

          <View style={styles.pickupCenter}>
            <View style={styles.pickupHeader}>
              <Ionicons name="exit" size={16} color="#FF2E2E" />
              <Text style={styles.pickupTitle}>Pickup Center-2</Text>
              <TouchableOpacity style={styles.callSmallBtn}>
                <Ionicons name="call" size={18} color="#FF2E2E" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.navigateSmallBtn}>
                <Ionicons name="navigate" size={18} color="#FF2E2E" />
              </TouchableOpacity>
            </View>
            <Text style={styles.pickupAddress}>Ananta Stores, 204/C, Apts, Andheri East 400069</Text>
            <View style={styles.itemRow}>
              <Image source={require("../../assets/images/Products/ball.png")} style={styles.itemImage} />
              <View style={styles.itemDesc}>
                <Text style={styles.itemName}>Cricket ball</Text>
                <Text style={styles.itemNo}>No 1</Text>
                <Text style={styles.itemQty}>Qty: 1</Text>
              </View>
            </View>
          </View>

          <View style={styles.deliveryRow}>
            <Ionicons name="location" size={16} color="#FF2E2E" />
            <Text style={styles.deliveryText}>201/D, Ananta Apts, Near Jal Bhawan, Andheri 400069</Text>
            <TouchableOpacity style={styles.navigateSmallBtn}>
              <Ionicons name="navigate" size={18} color="#FF2E2E" />
            </TouchableOpacity>
          </View>

          <View style={styles.paymentRow}>
            <Ionicons name="cash" size={20} color="#eee" />
            <Text style={styles.priceText}>₹ 2300</Text>
            <Ionicons name="checkmark-circle" size={20} color="#34A853" />
            <Text style={styles.paidText}>Paid</Text>
          </View>

          <View style={styles.statusRow}>
            <View style={styles.deliveryTimeBox}>
              <Text style={styles.deliveryLabel}>Delivery on</Text>
              <Text style={styles.deliveryDate}>Tomorrow</Text>
              <Text style={styles.deliveryTime}>5:30 PM, Thu, 25/08/2023</Text>
            </View>

            <View style={styles.timeLeftBox}>
              <Text style={styles.timeLeftLabel}>TIME LEFT</Text>
              <Text style={styles.timeLeftValue}>1:04 Hrs</Text>
            </View>
          </View>

          <View style={styles.updateStatusFull}>
            <Text style={styles.updateLabel}>Update Status</Text>
            <Picker
              style={styles.statusPicker}
              selectedValue={selectedStatus}
              onValueChange={onStatusChange}
            >
              <Picker.Item label="Select an option" value="" />
              <Picker.Item label="Picked up" value="pickedUp" />
              <Picker.Item label="In transit" value="inTransit" />
              <Picker.Item label="Delivered" value="delivered" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.confirmBtn} onPress={()=> router.push('/Deliver/deliverTracking')}>
            <LinearGradient
              colors={['#4776E6', '#8E54E9']}
              style={styles.confirmGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            >
              <Text style={styles.confirmText}>CONFIRM PICKUP</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Tabs */}
      <View style={styles.topNav}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabScrollContainer}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tabItem,
                activeTab === tab && styles.activeTab,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Orders Tab */}
      {activeTab === "Orders" && (
        <FlatList
          data={ordersData}
          keyExtractor={(item) => item.id}
          renderItem={renderOrderItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Store Tab */}
      {activeTab === "Store" && (
        <FlatList
          data={storesData}
          keyExtractor={(item) => item.id}
          renderItem={renderStoreItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Registration Tab */}
      {activeTab === "Registration" && (
        <ScrollView contentContainerStyle={styles.registrationContainer}>
          <View style={styles.profileCard}>
            <LinearGradient
              colors={["#FB9A4D", "#FFF0E4"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradientBorder}
            >
              <Image
                source={require('../../assets/images/Achievements/2.jpg')}
                style={styles.profileImage}
              />
            </LinearGradient>
            <View style={{ marginLeft: 10 }}>
              <View style={styles.infoRow}>
                <Ionicons name="person-outline" size={20} color="#FF5963" style={styles.infoIcon} />
                <Text style={styles.profileText}>Kamal Sharma</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="call-outline" size={20} color="#FF5963" style={styles.infoIcon} />
                <Text style={styles.profileText}>+91 9999988888</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="mail-outline" size={20} color="#FF5963" style={styles.infoIcon} />
                <Text style={styles.profileText}>loremipsum@gmail.com</Text>
              </View>
            </View>
            <View style={styles.ratingBadge}>
              <Text style={{ color: "white" }}>4.9 <Ionicons name="star" color={'#FF5963'} size={15} style={{ marginLeft: 6, top: 2 }}/></Text>
            </View>
          </View>

          {[
            { label: "Personal Information", status: "Approved", color: "#39FF14B2" },
            { label: "Personal Documents", status: "Verification Pending", color: "#FF2E2EB2" },
            { label: "Vehicle Details", status: "Approved", color: "#39FF14B2" },
            { label: "Bank Account Details", status: "Approved", color: "#39FF14B2" },
            { label: "Emergency Details", status: "Approved", color: "#39FF14B2" },
          ].map((item, index) => (
            <View key={index} style={styles.sectionCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.sectionLabel}>{item.label}</Text>
                <Text style={[styles.sectionStatus, { color: item.color }]}>{item.status}</Text>
              </View>
              <Ionicons name="chevron-forward" size={22} color="#ccc" style={{ top: 10 }} />
            </View>
          ))}
        </ScrollView>
      )}

      {/* Earning Wallet Tab */}
      {activeTab === "Earning Wallet" && (
        <View style={styles.walletContainer}>
          <Text style={styles.walletTitle}>Earning Wallet</Text>

          <View style={styles.subTabs}>
            <Text style={[styles.subTab, styles.subTabInactive]}>Today</Text>
            <Text style={[styles.subTab, styles.subTabActive]}>Weekly</Text>
            <Text style={[styles.subTab, styles.subTabInactive]}>Monthly</Text>
          </View>
          <Text style={styles.balance}>$ 1,250.00</Text>
          <View style={styles.breakdownRow}>
            <View style={styles.breakdownItem}>
              <Text style={styles.breakdownLabel}>EF & PF</Text>
              <Text style={styles.breakdownValue}>$ 600.00</Text>
            </View>
            <View style={styles.breakdownItem}>
              <Text style={styles.breakdownLabel}>Online</Text>
              <Text style={styles.breakdownValue}>$ 650.00</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.withdrawBtn}>
            <Text style={styles.withdrawBtnText}>Withdrawal Request</Text>
          </TouchableOpacity>

          <Text style={styles.historyTitle}>Transaction History</Text>

          {transactions.map((tx) => (
            <View key={tx.id} style={styles.transactionRow}>
              <View>
                <Text style={styles.txType}>{tx.type}</Text>
                <Text style={styles.txDate}>{tx.date}</Text>
              </View>
              <Text style={[styles.txAmount, { color: tx.color }]}>{tx.amount}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 50,
  },
  topNav: {
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    marginBottom: 10,
  },
  tabScrollContainer: {
    flexDirection: "row",
  },
  tabItem: {
    width: width / 3.3,      
    paddingVertical: 14,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#2979FF",
  },
  tabText: {
    color: "#fff",
    fontSize: 14,
  },
  activeTabText: {
    color: "#2979FF",
    fontWeight: "bold",
  },

  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 8,
    marginVertical: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  orderInfo: {
    flex: 1,
  },
  orderLabel: {
    fontSize: 12,
    color: "#ccc",
  },
  orderNumber: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 3,
  },
  dropdownIcon: {
    right: 90,
  },
  statusBadge: {
    width: 130,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  statusText: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },

  registrationContainer: { paddingHorizontal: 20 },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },

  gradientBorder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  profileImage: {
    width:55,
    height: 55,
    borderRadius: 32,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  infoIcon: {
    marginRight: 8,
  },
  profileText: { color: "white", fontWeight: "400", fontSize: 16, marginBottom: 5 },
  ratingBadge: {
    marginLeft: "auto",
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 16,
    top: -30
  },
  sectionCard: {
    backgroundColor: "#222",
    height: 90, 
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionLabel: {
    color: "white",
    fontSize: 18,
    marginBottom: 4,
  },
  sectionStatus: {
    fontSize: 16,
  },

  walletContainer: {
    flex: 1,
    padding: 16,
  },
  walletTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  subTab: {
    fontSize: 14,
    paddingBottom: 6,
  },
  subTabActive: {
    color: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#2979FF",
  },
  subTabInactive: {
    color: "#999",
  },
  balance: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  breakdownRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  breakdownItem: {
    alignItems: "center",
    flex: 1,
  },
  breakdownLabel: {
    color: "#999",
    fontSize: 14,
    marginBottom: 4,
  },
  breakdownValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  withdrawBtn: {
    backgroundColor: "linear-gradient(90deg, #4D9EFF, #9B5EFF)", // ❌ RN doesn’t support linear-gradient directly
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: "center",
  },
  withdrawBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  historyTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  txType: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  txDate: {
    color: "#999",
    fontSize: 12,
  },
  txAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },

  expandedBox: {
    backgroundColor: '#222',
    padding: 16,
    marginTop: 10,
    borderRadius: 14,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userIcon: {
    width: 26,
    height: 26,
    backgroundColor: '#222',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
    flex: 1,
  },
  callIconBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    marginLeft: 6,
  },
  pickupCenter: {
    backgroundColor: '#222',
    borderRadius: 10,
    marginBottom: 15,
    padding: 11,
  },
  pickupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  pickupTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 6,
    flex: 1,
  },
  pickupAddress: {
    color: '#AFAFAF',
    fontSize: 13,
    marginLeft: 26,
    marginVertical: 4,
  },
  callSmallBtn: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 6,
    marginLeft: 8,
  },
  navigateSmallBtn: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
    marginLeft: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 4,
  },
  itemImage: {
    width: 49,
    height: 49,
    borderRadius: 12,
    resizeMode: 'cover',
    backgroundColor: '#1C1C1C',
    borderWidth: 1,
    borderColor: '#333',
  },
  itemDesc: {
    marginLeft: 10,
  },
  itemName: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 3,
  },
  itemNo: {
    color: '#B5FFB7',
    fontSize: 13,
    fontWeight: '400',
  },
  itemQty: {
    color: '#B9B9B9',
    fontSize: 13,
    fontWeight: '400',
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#232323',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
  },
  deliveryText: {
    color: '#FFF',
    fontSize: 14,
    flex: 1,
    marginLeft: 8,
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 5,
  },
  priceText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
    marginRight: 7,
  },
  paidText: {
    color: '#34A853',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 7,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  deliveryTimeBox: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  deliveryLabel: {
    color: '#FF3434',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 2,
  },
  deliveryDate: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 1,
  },
  deliveryTime: {
    color: '#A3A3A3',
    fontSize: 12,
  },
  timeLeftBox: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginLeft: 5,
    alignItems: "center",
  },
  timeLeftLabel: {
    color: '#FF2E2E',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 2,
  },
  timeLeftValue: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  updateStatusBox: {
    flex: 1,
    alignItems: 'flex-end',
  },
  updateStatusFull: {
    marginTop: 10,
    backgroundColor: "#2A2A2A",
    padding: 10,
    borderRadius: 10,
  },
  updateLabel: {
    color: '#FF3434',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 3,
  },
  statusPicker: {
    height: 36,
    minWidth: 130,
    color: '#FFF',
    backgroundColor: '#232323',
    borderRadius: 8,
    paddingHorizontal: 6,
  },
  confirmBtn: {
    marginTop: 8,
    borderRadius: 25,
    overflow: 'hidden',
  },
  confirmGradient: {
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  confirmText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 17,
    letterSpacing: 0.5,
  },
});
