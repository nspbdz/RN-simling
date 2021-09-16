import { View, Picker, StyleSheet, TextInput, Button, TouchableOpacity, Text } from "react-native";
import React, { useContext, Component, useState, useEffect } from "react";
import DateField from 'react-native-datefield';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { UserContext } from "../contexts/userContext";
import { useNavigation } from "@react-navigation/native";

export default function DataRegistrasi({ handleData,handleTanggalRegitrasi }) {

  const navigation = useNavigation();
  const { state, dispatch } = useContext(UserContext);
  // console.log(state)


  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Golongan SIM"
          onChange={(e) => handleData(e, "golonganSim")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nomor SIM"
          onChange={(e) => handleData(e, "nomorSim")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nomor Registrasi"
          onChange={(e) => handleData(e, "nomorRegistrasi")}
        />
      </View>
      <View style={styles.inputContainer}>
        <DateField
          labelDate="date"
          labelMonth=" month"
          labelYear=" year"
          // onSubmit={(value) => console.log(value)}
          onSubmit={(value) => handleTanggalRegitrasi(value)}
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
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