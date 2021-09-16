import { View, Picker, StyleSheet, TextInput, Button, TouchableOpacity, Text } from "react-native";
import React, { useContext, Component, useState, useEffect } from "react";
import DateField from 'react-native-datefield';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { UserContext } from "../contexts/userContext";
import { useNavigation } from "@react-navigation/native";

export default function DataPribadi({ handleData,handleKacamata,handleCacat,handleTanggalLahir }) {

  const navigation = useNavigation();
  const { state, dispatch } = useContext(UserContext);
  // console.log(state)

  return (
    <View style={styles.container}>
      <Text>Data Pribadi</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          onChange={(e) => handleData(e, "nama")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nik"
          onChange={(e) => handleData(e, "nik")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tempat Lahir"
          onChange={(e) => handleData(e, "tempatLahir")}
        />
      </View>

      <Text>Berkacamata</Text>
       <Picker
        // selectedValue={stationCode}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => handleKacamata(itemValue)}
      >
        <Picker.Item label="Pilih" value="null" />
        <Picker.Item label="Ya" value="ya" />
        <Picker.Item label="Tidak" value="tidak" />
      </Picker>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pekerjaan"
          onChange={(e) => handleData(e, "pekerjaan")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={6}
          placeholder="Alamat"
          onChange={(e) => handleData(e, "alamat")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tinggi"
          onChange={(e) => handleData(e, "tinggi")}
        />
      </View>
      <Text>Tanggal Lahir</Text>

      <View style={styles.inputContainer}>
        <DateField
          labelDate="date"
          labelMonth=" month"
          labelYear=" year"
          onSubmit={(value) => handleTanggalLahir(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Golongan Darah"
          onChange={(e) => handleData(e, "golonganDarah")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pendidikan"
          onChange={(e) => handleData(e, "pendidikan")}
        />
      </View>
      <Text> Cacat FIsik Dan Lain2</Text>
       <Picker
        // selectedValue={stationCode}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => handleCacat(itemValue)}
      >
        <Picker.Item label="Pilih" value="null" />
        <Picker.Item label="Ya" value="ya" />
        <Picker.Item label="Tidak" value="tidak" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
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