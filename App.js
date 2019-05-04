import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/components/Home";
import ChatScreen from "./src/screens/ChatScreen";

const MainNavigator = createStackNavigator({
  home: { screen: Home },
  chat: { screen: ChatScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
