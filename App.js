import React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeBaseProvider, Button } from "native-base"; 
import UserContextProvider from "./src/contexts/userContext"

// screens
import Home from "./src/screens/Home";
import List from "./src/screens/List";
import RegisterBaru from "./src/screens/RegisterBaru";
import Perpanjang from "./src/screens/Perpanjang";

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserContextProvider>
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "My home",
                headerStyle: {
                  backgroundColor: "#f368e0",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="List"
              component={List}
              options={{
                title: "List Screen",
                headerStyle: {
                  backgroundColor: "#f368e0",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
             <Stack.Screen
              name="RegisterBaru"
              component={RegisterBaru}
              options={{
                title: "RegisterBaru Screen",
                headerStyle: {
                  backgroundColor: "#f368e0",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
             <Stack.Screen
              name="Perpanjang"
              component={Perpanjang}
              options={{
                title: "Perpanjang Screen",
                headerStyle: {
                  backgroundColor: "#f368e0",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>

    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#032829",
  },
});
