import { View, Picker, StyleSheet, TextInput, Button, TouchableOpacity, Text } from "react-native";
import React, { useContext, Component, useState, useEffect } from "react";

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { UserContext } from "../contexts/userContext";
import { useNavigation } from "@react-navigation/native";
import DataRegistrasi from "../components/DataRegistrasi";

export default function RegisterBaru() {
  const navigation = useNavigation();
  let [stationCode, setStationCode] = React.useState("")
  const { state, dispatch } = useContext(UserContext);
  // console.log(state)
  const [operator, setOperator] = useState();
  const [kacamata, setKacamata] = useState();
  const [cacat, setCacat] = useState();
  console.log(stationCode)

  const [data, setData] = useState({
    TanggalRegistrasi: "",
    golonganSim: "",
    nomorRegistrasi: "",
    nomorSim: ""
  });


  const handleChange = (e, name) => {
    console.log(e.nativeEvent.text)
    console.log(name)
    console.log(data)
    setData({
      ...data,
      [name]: e.nativeEvent.text,
    });
  };


  return (
    <View style={styles.container}>
      <DataRegistrasi handleData={handleChange}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  inputContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 40,
    margin: 5
  },
  input: {
    width: 150,
    height: 40,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15
  }
});