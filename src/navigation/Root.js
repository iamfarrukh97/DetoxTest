import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
// import CounterScreen from '../screens/CounterScreen'
import MemberListScreen from '../screens/memberScreens/MemberListScreen'
import ImagesScreen from '../screens/ImagesScreen'
// import AnimationScreen from '../screens/AnimationScreen'
// import ExtrasScreen from '../screens/ExtrasScreen'
// import ShowMemberScreen from '../screens/memberScreens/ShowMemberScreen'
// import AddMemberScreen from '../screens/memberScreens/AddMemberScreen'
// import EditMemberScreen from '../screens/memberScreens/EditMemberScreen'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Counters" component={CounterScreen} />
      <Stack.Screen name="Members" component={MemberListScreen} />
      <Stack.Screen name="Images" component={ImagesScreen} />
      <Stack.Screen name="Animation" component={AnimationScreen} />
      <Stack.Screen name="Extras" component={ExtrasScreen} /> */}
    </Stack.Navigator>
  )
}

const MemberStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Members" component={MemberListScreen} />
      {/* <Stack.Screen name="ShowMember" component={ShowMemberScreen} />
      <Stack.Screen name="AddMember" component={AddMemberScreen} />
      <Stack.Screen name="EditMember" component={EditMemberScreen} /> */}
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeFlow" component={HomeStack} />
      <Tab.Screen name="ImagesFlow" component={ImagesScreen} />
      <Tab.Screen name="MembersFlow" component={MemberStack} />
    </Tab.Navigator>
  )
}

const Root = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}

export default Root
