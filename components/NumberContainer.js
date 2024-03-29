import React from "react";
/** COMPONENT TO WRAP THE NUMBER */

import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/color";

const NumberContainer = (props) => (
  <View style={styles.container}>
    <Text style={styles.number}>{props.children}</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 22,
    color: Colors.accent,
  },
});

export default NumberContainer;
