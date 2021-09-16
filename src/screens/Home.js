import { Button } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import Login from "../components/Login";
import Headers from "../components/Headers";
import styles from "../styles/style";
import List from "./List"
import RegisterBaru from "./RegisterBaru"
export default function Home({ navigation }) {
  return (
    <View >
      <Login navigation={navigation} />
      {/* <List /> */}
      {/* <RegisterBaru />  */}
    </View>
  );
}
