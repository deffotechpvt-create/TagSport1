import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const router = useRouter();

const start = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/Screens/languageSelect')}>
        <Image source={require('../../assets/images/chanellogo.png')} style={styles.logo}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20
  },
  logo: {
    width: 315,
    height: 190,
    resizeMode: 'contain',
    top: 200,
    marginBottom: 420,
  },
  
});


export default start