import React, { useState, useRef } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "./ColorForm.component.style.js";

export default function ColorForm({ onNewColor = (f) => f }) {
  //using Hooks for the value set
  const [inputValue, setValue] = useState("");
  const input = useRef();
  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        style={styles.txtInput}
        value={inputValue}
        onChangeText={(text) => setValue(text)}
        autoCapitalize="none"
        placeholder="enter a color..."
      />
      <Button
        title="add"
        onPress={() => {
          input.current.blur();
          onNewColor(inputValue);
          setValue("");
        }}
      />
    </View>
  );
}
