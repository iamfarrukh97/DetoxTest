import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import ImageComponents from '../components/ImageComponents'

const ImagesScreen = () => {
  return (
    <SafeAreaView style={{ marginBottom: 50 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageComponents title="Europe" />
        <ImageComponents title="USA / Canada" />
        <ImageComponents title="Asia" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ImagesScreen
