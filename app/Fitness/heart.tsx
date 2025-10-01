import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HeartRateScreen = () => {
  // Data for SYS rows
  const sysData = [
    { value: '145', label: 'SYS', sublabel: 'Check the Fatigue', progress: [70, 60, 30] },
    { value: '055', label: 'SYS', sublabel: 'Check the Fitness', progress: [50, 40, 20] },
    { value: '098', label: 'SYS', sublabel: 'Check the Workout', progress: [30, 60, 50] },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate</Text>

      <View style={styles.heartContainer}>
        {/* Heart shape, can replace with image or SVG */}
        <View style={styles.heartShape}>
            <Image source={require('../../assets/images/Health/heartbeat.png')}/>
        </View>
        {/* Heartbeat pulse line. Could be SVG or image, here represented as red bars */}
        <View style={styles.pulseLine} />
      </View>

      <View style={styles.mainRateRow}>
        <Text style={styles.mainRate}>120</Text>
        <Text style={styles.bpmText}>BPM</Text>
      </View>

      <Text style={styles.activityText}>Activity : Running</Text>

      <View style={styles.divider} />

      {/* SYS rows */}
      {sysData.map(({ value, label, sublabel, progress }, index) => (
        <View key={index} style={styles.sysRow}>
          <View style={styles.sysTextContainer}>
            <Text style={styles.sysValue}>{value}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.sysLabel}>{label}</Text>
              <Text style={styles.sysSubLabel}>{sublabel}</Text>
            </View>
          </View>
          <View style={styles.progressBars}>
            {progress.map((percent, i) => (
              <View
                key={i}
                style={[
                  styles.progressBar,
                  { width: `${percent}%`, backgroundColor: 'red', marginBottom: 3 },
                ]}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
  },
  heartContainer: {
    alignItems: 'center',
  },
  heartShape: {
    width: 100,
    height: 90,
    backgroundColor: 'red',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    transform: [{ rotate: '45deg' }],
    marginBottom: -30,
    shadowColor: 'red',
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  pulseLine: {
    width: '100%',
    height: 10,
    backgroundColor: 'transparent',
    marginTop: 40,
    // For representation, add lines or replace with SVG/image in actual use
    borderBottomWidth: 2,
    borderColor: 'red',
  },
  mainRateRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 0,
  },
  mainRate: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  bpmText: {
    fontSize: 14,
    color: 'red',
    marginLeft: 5,
    marginBottom: 8,
  },
  activityText: {
    color: '#757575',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#373737',
    marginVertical: 15,
  },
  sysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  sysTextContainer: {
    flex: 2,
  },
  sysValue: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
  sysLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
    marginRight: 10,
  },
  sysSubLabel: {
    fontSize: 10,
    color: '#757575',
  },
  progressBars: {
    flex: 3,
    justifyContent: 'center',
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    backgroundColor: 'red',
  },
});

export default HeartRateScreen;
