import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { Text, View, ScrollView,Button } from "react-native";
import HomeScreen from './HomeScreen';

const ProfileScreen = ({ navigation, route }) => {
  
  return <Text>This is {route.params.name}'s profile</Text>;
}
  export default ProfileScreen;