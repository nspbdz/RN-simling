import React, { useContext, Component, useState, useEffect } from "react";
import { View,Text,Button,TouchableOpacity } from "react-native";
import { UserContext } from "../contexts/userContext";
import styles from "../styles/style";
import { useNavigation } from "@react-navigation/native";

export default function List() {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(UserContext);

  // console.log(state)
const handleToRegister = ()  =>{
  navigation.navigate("RegisterBaru")

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
      
      {/* <TouchableOpacity 
       style={{
        backgroundColor: "#487eb0",
        height: 40,
        width: 150,
      
      }}
      onPress={handleToRegister}
      >
        <Text>Register Baru</Text>
      </TouchableOpacity> */}
      {/* <Button onPress={() => navigation.navigate("Perpanjang")}>
        Go to  List
      </Button> */}
    </View>
  )
}

