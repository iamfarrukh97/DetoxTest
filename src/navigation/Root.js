import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeScreen from '../screens/HomeScreen'
// import CounterScreen from '../screens/CounterScreen'
import MemberListScreen from '../screens/memberScreens/MemberListScreen'
import ImagesScreen from '../screens/ImagesScreen'
import { TouchableOpacity, View } from 'react-native'
// import AnimationScreen from '../screens/AnimationScreen'
// import ExtrasScreen from '../screens/ExtrasScreen'
// import ShowMemberScreen from '../screens/memberScreens/ShowMemberScreen'
// import AddMemberScreen from '../screens/memberScreens/AddMemberScreen'
// import EditMemberScreen from '../screens/memberScreens/EditMemberScreen'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
        }}
      />
      {/* <Stack.Screen name="Counters" component={CounterScreen} />
      <Stack.Screen name="Members" component={MemberListScreen} />
      <Stack.Screen name="Images" component={ImagesScreen} />
      <Stack.Screen name="Animation" component={AnimationScreen} />
      <Stack.Screen name="Extras" component={ExtrasScreen} /> */}
    </Stack.Navigator>
  )
}

const MemberStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Members"
        component={MemberListScreen}
        options={{
          headerTitle: 'Members',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('AddMember')}>
              <AntDesign style={{ paddingRight: 15 }} name="pluscircle" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
      {/* <Stack.Screen name="ShowMember" component={ShowMemberScreen} />
      <Stack.Screen name="AddMember" component={AddMemberScreen} />
      <Stack.Screen name="EditMember" component={EditMemberScreen} /> */}
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="HomeFlow"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: () => <FontAwesome5 name="home" size={20} />,
        }}
      />
      <Tab.Screen
        name="ImagesFlow"
        component={ImagesScreen}
        options={{
          title: 'Cities',
          headerShown: true,
          tabBarIcon: () => <FontAwesome5 name="city" size={20} />,
        }}
      />
      <Tab.Screen
        name="MembersFlow"
        component={MemberStack}
        options={{
          title: 'Members',
          tabBarIcon: () => <MaterialCommunityIcons name="wallet-membership" size={20} />,
        }}
      />
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
