import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ColorList from "./components/ColorList/ColorList.component.js";
import ColorDetails from "./components/ColorDetails/ColorDetails.component.js";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={ColorList} />
        <Screen name="Details" component={ColorDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
