import { View, Picker, StyleSheet, TextInput, Button, TouchableOpacity, Text, ScrollView } from "react-native";
import React, { useContext, Component, useState, useEffect } from "react";
import axios from 'react-native-axios';

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
  const [Foto, setFoto] = useState();
  const [FotoTTD, setFotoTTD] = useState();

  const { state, dispatch } = useContext(UserContext);

  console.log(Foto)
  console.log(FotoTTD)
  console.log(state.user.kodeStation)
  console.log(tanggalRegistrasi)

  const [data, setData] = useState({
    alamat: "",
    golonganDarah: "",
    golonganSim: "",
    nama: "",
    namaPutor: "",
    nik: "",
    nomorRegistrasi: "",
    nomorSim: "",
    pekerjaan: "",
    pendidikan: "",
    slipPembayaran: "",
    telepon: "",
    tempatLahir: "",

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
  const dataJson = JSON.stringify(data)


  const AddRegisterBaru = async (e) => {
    const formData = new FormData();
    // formData.set("nomorRegistrasi", data.nomorRegistrasi);
    // formData.set("nomorSim", data.nomorSim);
    // formData.set("alamat", data.alamat);
    // formData.set("golonganDarah", data.golonganDarah);
    // formData.set("golonganSim", data.golonganSim);
    // formData.set("nama", data.nama);
    // formData.set("namaPutor", data.namaPutor);
    // formData.set("nik", data.nik);
    // formData.set("pekerjaan", data.pekerjaan);
    // formData.set("pendidikan", data.pendidikan);
    // formData.set("nama", data.nama);
    // formData.set("slipPembayaran", data.slipPembayaran);
    // formData.set("telepon", data.telepon);
    // formData.set("tempatLahir", data.tempatLahir);
    // formData.set("tanggalRegistrasi", data.tanggalRegistrasi);
    // formData.set("tanggalLahir", data.tanggalLahir);
    // formData.set("kacamata", data.kacamata);
    // formData.set("cacat", data.cacat);
    // formData.set("tanggalPembayaran", data.tanggalPembayaran);
    // // formData.set("name", data.name);
    // formData.append("imageFile", Foto);
    // formData.append("imageFile2", FotoTTD);
    // formData.append('data', JSON.stringify(data));
    formData.append('imageFile', {
      //  uri: "file:", //Your Image File Path
      uri: Foto.uri, //Your Image File Path
      type: Foto.file.type,
      name: Foto.file.name,
      //  type: 'image/jpeg', 
      //  name: "imagename.jpg",
    });
    console.log(formData)
    axios({
      method: "post",
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      url: "http://localhost:5000/api/v1/dataPendaftar",
      // data: formData
    })
    // console.log(body)
      .then(function (response) {

        // handle success
        alert("Success Add Task List")
        //  router.push("/");

      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }


  return (
    <ScrollView >
      <View style={styles.container}>
        <DataRegistrasi handleData={handleChange} handleTanggalRegitrasi={setTanggalRegistrasi} />

        <DataPutor handleData={handleChange} handleTanggalPembayaran={setTanggalPembayaran} />
        <DataPribadi handleData={handleChange}
          handleSubmit={AddRegisterBaru}
          handleKacamata={setKacamata} handleCacat={setCacat}
          handleTanggalLahir={setTanggalLahir}
          handleFoto={setFoto}
          handleFotoTTD={setFotoTTD}
        />

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