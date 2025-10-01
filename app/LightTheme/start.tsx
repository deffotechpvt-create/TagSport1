import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const router = useRouter();

const start = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/chanel-logo.png')} style={styles.logo}/>
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/LightTheme/loginpage')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createText} onPress={() => router.push('/LightTheme/createpage')}>Create a new account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  logo: {
    width: 315,
    height: 190,
    resizeMode: 'contain',
    top: 200,
    marginBottom: 420,
  },
  loginButton: {
    backgroundColor: '#007BFFCC',
    width: 327,
    height: 55,
    justifyContent: 'center',
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText:{
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'
  },
  createButton: {
    width: 327,
    height: 55,
    justifyContent: 'center',
    borderRadius: 6,
    alignItems: 'center',
  },
  createText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#1A1A1A'
  }
});


export default start