import { View, Picker, StyleSheet, TextInput,Button,TouchableOpacity,Text} from "react-native";
import React, { useContext, Component, useState, useEffect } from "react";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { UserContext } from "../contexts/userContext";
import { useNavigation } from "@react-navigation/native";
const Login = () => {

  const [selectedValue, setSelectedValue] = useState("");
  const navigation = useNavigation();
  
  let [stationCode, setStationCode] = React.useState("")
  const { state, dispatch } = useContext(UserContext);
  const [operator, setOperator] = useState();
  console.log(stationCode)
  console.log(state)
  const [data, setData] = useState({

    operator: "",
    password: "",
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
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGIN',
      payload: {
        id: 2,
        name: "user1",
        email: data.email,
        password: data.password,
        kodeStation: stationCode
      }
    })

    setData({
      email: "",
      password: ""
    })
    navigation.navigate("List")
  };
  return (
    <View style={styles.container}>
        <Picker
          selectedValue={stationCode}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setStationCode(itemValue)}
        >
          <Picker.Item label="Pilih Area" value="null" />
          <Picker.Item label="1338 - SIMLING INDRAMAYU" value="1338" />
          <Picker.Item label="1337 - SIMLING MAJALENGKA" value="1337" />
          <Picker.Item label="1336 - SIMLING CIREBON" value="1336" />
        </Picker>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Operator"
          onChange={(e) => handleChange(e, "operator")}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          onChange={(e) => handleChange(e, "password")}
        />
      </View>
      <TouchableOpacity 
       style={{
        backgroundColor: "#487eb0",
        height: 40,
        width: 150,
      }}
      onPress={handleSubmit}
      >
        <Text>Login</Text>
      </TouchableOpacity>
           

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
    margin:5
  },
  input: {
    width:150,
    height: 40,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default Login;