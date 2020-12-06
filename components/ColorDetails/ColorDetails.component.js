import React from "react";
import { View, Text } from "react-native";
import Color from "color";
import styles from "./ColorDetails.component.style.js";

export default function ColorDetails({ route }) {
  const { color: name } = route.params;
  const color = Color(name);
  const textColor = {
    fontSize: 30,
    color: color.negate().toString(),
  };
  return (
    <View style={[styles.container, { backgroundColor: name }]}>
      <Text style={textColor}>{name}</Text>
      <Text style={textColor}>{color.rgb().toString()}</Text>
      <Text style={textColor}>{color.hsl().toString()}</Text>
      <Text style={textColor}>{color.luminosity()}</Text>
    </View>
  );
}
