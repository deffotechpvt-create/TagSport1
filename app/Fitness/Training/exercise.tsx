import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const exercise = () => {
  return (
    <View style={{flex:1 ,backgroundColor: '#1a1a1a', padding:24}}>
      <Text style={{color: '#fff'}}>Exercise Videos</Text>
      <TouchableOpacity onPress={()=>router.push('/Fitness/Training/training')}>
        <Text style={{color: '#fff'}}>Click here to Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default exercise