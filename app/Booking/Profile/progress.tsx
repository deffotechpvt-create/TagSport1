import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import PieChart from 'react-native-pie-chart'
import { LineChart } from 'react-native-chart-kit'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const screenWidth = Dimensions.get('window').width
const widthAndHeight = 182

type Tab = 'Week' | 'Month' | 'Year'

export default function TestChart() {
  const [selectedTab, setSelectedTab] = useState<Tab>('Week')

  const lineDataSets: Record<Tab, { labels: string[]; datasets: { data: number[] }[] }> = {
    Week: {
      labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      datasets: [{ data: [500, 650, 700, 450, 100, 250, 150] }],
    },
    Month: {
      labels: ['W1', 'W2', 'W3', 'W4'],
      datasets: [{ data: [2000, 2800, 1500, 3000] }],
    },
    Year: {
      labels: ['Jan', 'Apr', 'Jul', 'Oct'],
      datasets: [{ data: [5000, 7200, 4000, 6500] }],
    },
  }

  const series = [
    { value: 50, color: '#007BFF' }, // Daily activities
    { value: 20, color: '#FF2E2E' }, // Video showing
    { value: 15, color: '#FFFFFF' }, // White slice
    { value: 15, color: '#39FF14' }, // Video uploading
  ]

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/Booking/profile')}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Progress Tracking</Text>
      </View>

      <View style={styles.tabContainer}>
        {(Object.keys(lineDataSets) as Tab[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <LineChart
        data={lineDataSets[selectedTab]}
        width={330}
        height={220}
        withDots={false}             
        withShadow={false}           
        withInnerLines={true}        
        withHorizontalLines={true}  
        withVerticalLines={false}    
        chartConfig={{
          backgroundColor: '#1A1A1A',
          backgroundGradientFrom: '#1A1A1A',
          backgroundGradientTo: '#1A1A1A',
          decimalPlaces: 0,
          color: (opacity = 1) => `#007BFF`,
          labelColor: (opacity = 1) => `rgba(200, 200, 200, ${opacity})`,
          propsForBackgroundLines: {
            stroke: "rgba(224, 224, 224, 0.3)",
            strokeWidth: 1,    
            strokeDasharray: "",                 
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 0,
        }}
      />

      <View style={styles.container}>
        <View style={styles.pieChartBorderWrapper}>
          <PieChart widthAndHeight={widthAndHeight} series={series} cover={0.7} padAngle={0.02} />
          <View style={styles.centeredTextWrapper}>
            <Text style={styles.centeredText}>
              Completed{'\n'}100%
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.legendWrapper}>
        <View style={styles.legendRow}>
          <View style={[styles.legendBox, { backgroundColor: '#39FF14' }]} />
          <Text style={styles.legendText}>Video uploading{'\n'}15%</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendBox, { backgroundColor: '#FFFFFF' }]} />
          <Text style={styles.legendText}>Booking{'\n'}15%</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendBox, { backgroundColor: '#FF2E2E' }]} />
          <Text style={styles.legendText}>Video showing{'\n'}20%</Text>
        </View>
        <View style={styles.legendRow}>
          <View style={[styles.legendBox, { backgroundColor: '#007BFF' }]} />
          <Text style={styles.legendText}>Daily activities{'\n'}50%</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 20,
    marginTop: 25
  },
  activeTab: {
    // backgroundColor: '#2196F3',
  },
  tabText: {
    color: '#aaa',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  chart: {
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 125,
    alignSelf: 'center',
  },
  pieChartBorderWrapper: {
    borderWidth: 3,
    borderColor: '#ffffff',
    borderRadius: 182 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTextWrapper: {
    position: 'absolute',
    width: 182 * 0.7,
    height: 182 * 0.7,
    borderRadius: (182 * 0.7) / 2,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  centeredText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  legendWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 30,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    width: '45%',
  },
  legendBox: {
    width: 2,
    height: 36,
    marginRight: 8,
  },
  legendText: {
    color: '#fff',
    fontSize: 15,
  },
})
