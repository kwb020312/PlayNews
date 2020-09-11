import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TabScreen from "./components/TabScreen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const loadFont = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
    };
    loadFont().then(() => {
      setIsLoading(false);
    });
  }, []);
  if (isLoading === false) {
    return (
      <View style={styles.container}>
        <TabScreen />
      </View>
    );
  } else {
    return <Text></Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
