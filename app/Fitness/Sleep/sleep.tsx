import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { LineChart } from "react-native-chart-kit";
import Svg, { G, Path, Text as SvgText } from "react-native-svg";

const { width } = Dimensions.get("window");

interface PieDataItem {
  name: string;
  value: number;
  color: string;
}

interface CustomPieChartProps {
  data: PieDataItem[];
  size: number;
}

const CustomPieChart: React.FC<CustomPieChartProps> = ({ data, size }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let startAngle = 0;
  
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <G transform={`translate(${size / 2}, ${size / 2})`}>
        {data.map((item, index) => {
          const angle = (item.value / total) * 360;
          const endAngle = startAngle + angle;
          
          const startRadians = (startAngle * Math.PI) / 180;
          const endRadians = (endAngle * Math.PI) / 180;
          
          const startX = Math.cos(startRadians) * (size / 2 - 10);
          const startY = Math.sin(startRadians) * (size / 2 - 10);
          const endX = Math.cos(endRadians) * (size / 2 - 10);
          const endY = Math.sin(endRadians) * (size / 2 - 10);
          
          const largeArcFlag = angle > 180 ? 1 : 0;
          
          const path = [
            `M 0 0`,
            `L ${startX} ${startY}`,
            `A ${size / 2 - 10} ${size / 2 - 10} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            `Z`
          ].join(" ");
          
          const middleAngle = startAngle + angle / 2;
          const middleRadians = (middleAngle * Math.PI) / 180;
          const textRadius = size / 2 - 30;
          const textX = Math.cos(middleRadians) * textRadius;
          const textY = Math.sin(middleRadians) * textRadius;
          
          startAngle = endAngle;
          
          return (
            <G key={index}>
              <Path
                d={path}
                fill={item.color}
                strokeWidth={2}
              />
              <SvgText
                x={textX}
                y={textY}
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
              >
                {`${Math.round((item.value))}%`}
              </SvgText>
            </G>
          );
        })}
      </G>
    </Svg>
  );
};

export default function Sleep() {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"));

  const getDates = () => {
    return Array.from({ length: 4 }, (_, i) => currentDate.clone().add(i, "days"));
  };

  const lineChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [5, 7, 6, 8.5, 10, 7.5, 7.5],
        color: () => "#04BFDA", 
        strokeWidth: 2,
      },
    ],
  };

  const maxValue = Math.max(...lineChartData.datasets[0].data);
  const maxIndex = lineChartData.datasets[0].data.indexOf(maxValue);


  const pieData: PieDataItem[] = [
    { name: "Normal", value: 67, color: "#04BFDA" },
    { name: "Core", value: 11, color: "#9B88ED" },
    { name: "Irregular", value: 21, color: "#FB67CA" },
    { name: "Insomniac", value: 27, color: "#FFA84A" },
  ];

  const handlePrev = () =>
    setCurrentDate(currentDate.clone().subtract(1, "days"));
  const handleNext = () =>
    setCurrentDate(currentDate.clone().add(1, "days"));

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Sleeping Quality</Text>

      {/* Date Selector */}
      <View style={styles.dateRow}>
        <TouchableOpacity onPress={handlePrev}>
          <Ionicons name="chevron-back" size={20} color="white" />
        </TouchableOpacity>

        {getDates().map((d) => {
          const formatted = d.format("YYYY-MM-DD");
          const isSelected = selectedDate === formatted;
          const isToday = d.isSame(moment(), "day");

          return (
            <TouchableOpacity
              key={formatted}
              style={[styles.dateBox, isSelected && styles.selectedDateBox]}
              onPress={() => setSelectedDate(formatted)}
            >
              <Text
                style={[
                  styles.dateLabel,
                  isSelected && styles.selectedDateText,
                ]}
              >
                {isToday ? "Today" : d.format("ddd")}
              </Text>
              <Text
                style={[
                  styles.dateNumber,
                  isSelected && styles.selectedDateText,
                ]}
              >
                {d.format("D")}
              </Text>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity onPress={handleNext}>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.improvementText}>
        90% <Text style={{ color: "#FFFFFF80" }}>better from last month</Text>
      </Text>

      <View style={styles.header}>
        <Text style={styles.title}>Timings</Text>
        <TouchableOpacity style={styles.setGoalBtn}>
          <Text style={styles.setGoalText}>Set Goal</Text>
        </TouchableOpacity>
      </View>
      <LineChart
        data={lineChartData}
        width={width - 40}
        height={250}
        chartConfig={{
          backgroundColor: "#1a1a1a",
          backgroundGradientFrom: "#1a1a1a",
          backgroundGradientTo: "#1a1a1a",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(34, 211, 238, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#fff",
          },
          propsForBackgroundLines: {
            strokeDasharray: "4,4",
            stroke: "#848A9C",
          },
        }}
        bezier
        style={styles.chart}
        withVerticalLines={false}
        withHorizontalLines={true} 
        yAxisSuffix="h"
        yAxisInterval={2}
        segments={4}
        fromZero={true}
      />

      {/* <View
        style={[
          styles.verticalLine,
          {
            left: ((width - 40) / lineChartData.labels.length) * maxIndex + 30,
          },
        ]}
      />

      <View
        style={[
          styles.highlightDot,
          {
            left: ((width - 40) / lineChartData.labels.length) * maxIndex + 25,
            bottom: (maxValue / 12) * 190 + 35, 
          },
        ]}
      >
        <View style={styles.innerDot} />
      </View>

      <View
        style={[
          styles.tooltip,
          {
            left: ((width - 40) / lineChartData.labels.length) * maxIndex + 15,
            bottom: (maxValue / 12) * 190 + 60,
          },
        ]}
      >
        <Text style={styles.tooltipText}>{maxValue}h</Text>
      </View> */}

      <View style={styles.legendContainer}>
        <View style={[styles.legendDot, { backgroundColor: "#04BFDA" }]}>
          <View style={styles.legendDotInner} />
        </View>
        <Text style={styles.legendText}>Normal</Text>

        <View style={[styles.legendDot, { backgroundColor: "#9B88ED" }]}>
          <View style={styles.legendDotInner} />
        </View>
        <Text style={styles.legendText}>Core</Text>

        <View style={[styles.legendDot, { backgroundColor: "#FB67CA" }]}>
          <View style={styles.legendDotInner} />
        </View>
        <Text style={styles.legendText}>Irregular</Text>

        <View style={[styles.legendDot, { backgroundColor: "#FFA84A" }]}>
          <View style={styles.legendDotInner} />
        </View>
        <Text style={styles.legendText}>Insomniac</Text>
      </View>

      <View style={styles.pieWrapper}>
        <CustomPieChart data={pieData} size={220} />
      </View>

      <TouchableOpacity
        onPress={() => router.push("/Fitness/Sleep/sleepStories")}
      >
        <LinearGradient
          colors={["#4776E6", "#8E54E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.sleepButton}
        >
          <Text style={styles.sleepText}>Sleep Stories</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },

  dateRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 16,
  },
  dateBox: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF1A",
    width: 50,
    height: 50,
  },
  selectedDateBox: { backgroundColor: "#39FF141A", borderColor: "#39FF14" },
  dateLabel: { color: "#fff", fontSize: 12, marginBottom: 2 },
  dateNumber: { color: "#fff", fontSize: 12, fontWeight: "600" },
  selectedDateText: { color: "white" },

  improvementText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  setGoalBtn: {
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },
  setGoalText: {
    color: "gray",
    fontWeight: "bold",
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  chart: {
    left: -25
  },
  verticalLine: {
    position: "absolute",
    top: 40,
    bottom: 40,
    width: 2,
    backgroundColor: "orange",
  },
  highlightDot: {
    position: "absolute",
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "orange",
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
  },
  innerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
  },
  tooltip: {
    position: "absolute",
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "orange",
  },
  tooltipText: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  legendDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  legendDotInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
  },
  legendText: {
    color: "white",
    marginRight: 10,
    fontSize: 14,
    alignSelf: "center",
  },
  pieWrapper: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
  },
  sleepButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  sleepText: { color: "white", fontWeight: "600", fontSize: 18 },
});