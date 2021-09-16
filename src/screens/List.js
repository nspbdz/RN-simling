import React, { useContext, Component, useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity,StyleSheet } from "react-native";
import { UserContext } from "../contexts/userContext";
import { useNavigation } from "@react-navigation/native";

export default function List() {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(UserContext);

  // console.log(state)
  const handleToRegister = () => {
    navigation.navigate("RegisterBaru")

  }
  const handleToPerpanjang = () => {
    navigation.navigate("Perpanjang")

  }

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={{
          backgroundColor: "#487eb0",
          height: 40,
          width: 150,

        }}
        onPress={handleToRegister}
      >
        <Text>Register Baru</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#487eb0",
          height: 40,
          width: 150,

        }}
        onPress={handleToPerpanjang}
      >
        <Text>Perpanjang </Text>
      </TouchableOpacity>


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    alignItems: "center"
  },

});

