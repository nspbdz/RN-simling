import { View, Picker, StyleSheet, TextInput, Button, TouchableOpacity, Text } from "react-native";
import React, { useContext, Component, useState, useEffect } from "react";
import DateField from 'react-native-datefield';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { UserContext } from "../contexts/userContext";
import { useNavigation } from "@react-navigation/native";

export default function DataPutor({ handleData,handleTanggalPembayaran }) {

  const navigation = useNavigation();
  const { state, dispatch } = useContext(UserContext);
  // console.log(state)


  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nama Putor"
          onChange={(e) => handleData(e, "namaPutor")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="No Slip Pembayaran"
          onChange={(e) => handleData(e, "slipPembayaran")}
        />
      </View>
      <View style={styles.inputContainer}>
        <DateField
          labelDate="date"
          labelMonth=" month"
          labelYear=" year"
          onSubmit={(value) => handleTanggalPembayaran(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Telepon"
          onChange={(e) => handleData(e, "telepon")}
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