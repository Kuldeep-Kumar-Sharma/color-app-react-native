import React from "react";
import { FlatList } from "react-native";
import ColorButton from "../ColorButton/Button.component.js";
import ColorForm from "../ColorForm/ColorForm.component.js";
import { useColors } from "../hooks";
import styles from "./ColorList.component.style.js";

export default function ColorList({ navigation }) {
  const { colors, addColor } = useColors();
  return (
    <>
      <ColorForm onNewColor={addColor} />
      <FlatList
        style={[styles.container]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={() =>
                navigation.navigate("Details", {
                  color: item.color,
                })
              }
            />
          );
        }}
      />
    </>
  );
}
