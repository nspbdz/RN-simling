import { View, Picker, StyleSheet, TextInput, Button, TouchableOpacity, Text,ScrollView } from "react-native";
import React, { useContext, Component, useState, useEffect } from "react";

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { UserContext } from "../contexts/userContext";
import { useNavigation } from "@react-navigation/native";
import DataRegistrasi from "../components/DataRegistrasi";
import DataPribadi from "../components/DataPribadi";
import DataPutor from "../components/DataPutor";

export default function RegisterBaru() {
  const navigation = useNavigation();
  //login
  let [stationCode, setStationCode] = React.useState("")
  const [operator, setOperator] = useState();
  const [tanggalRegistrasi, setTanggalRegistrasi] = useState();
  //datapribadi
  const [tanggalLahir, setTanggalLahir] = useState();
  const [kacamata, setKacamata] = useState();
  const [cacat, setCacat] = useState();

  //data putor
  const [tanggalPembayaran, setTanggalPembayaran] = useState();

  const { state, dispatch } = useContext(UserContext);
  console.log(kacamata)
  // console.log(state)
  console.log(cacat)
  console.log(tanggalRegistrasi)

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
    <ScrollView >
    <View style={styles.container}>
      <DataRegistrasi handleData={handleChange} handleTanggalRegitrasi={setTanggalRegistrasi}  />

      <DataPutor handleData={handleChange} handleTanggalPembayaran={setTanggalPembayaran} />
      <DataPribadi handleData={handleChange} handleKacamata={setKacamata} handleCacat={setCacat} handleTanggalLahir={setTanggalLahir} />
    </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    alignItems: "center"
  },

});