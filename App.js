import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}>
      <Text>Detox Practice</Text>
      <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => {}}>
        Login with Facebook
      </Icon.Button>
    </View>
  )
}

export default App
