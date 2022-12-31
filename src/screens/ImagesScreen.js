import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import ImageComponents from '../components/ImageComponents'

const ImagesScreen = () => {
  return (
    <SafeAreaView style={{ marginBottom: 50 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageComponents title="Europe" testID={'europe'} />
        <ImageComponents title="USA / Canada" testID={'usa/canada'} />
        <ImageComponents title="Asia" testID={'asia'} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ImagesScreen
