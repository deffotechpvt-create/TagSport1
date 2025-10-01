import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';

const Start = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/chanellogo.png')} style={styles.logo}/>

      <TouchableOpacity onPress={() => router.push('/Screens/loginpage')} style={styles.buttonWrapper} activeOpacity={0.8}>
        <LinearGradient
          colors={['#4776E6', '#8E54E9']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton} onPress={() => router.push('/Screens/signup')}>
        <Text style={styles.createText}>Sign Up</Text>
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
    marginBottom: 400,
  },
  buttonWrapper: {
    borderRadius: 6,
    overflow: 'hidden',   
    marginBottom: 15,
  },
  loginButton: {
    width: 327,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderWidth: 1,
    borderColor: '#FFFFFF99',
    borderRadius: 6,
    alignItems: 'center',
  },
  createText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff'
  }
});

export default Start
