import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/style";

export default function Headers(props) {
  return (
    <View style={styles.container}>
      {props?.leftButton}
      <Text>{props.title}</Text>
    </View>
  );
}
