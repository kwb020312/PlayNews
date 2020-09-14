import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TabScreen from "./components/TabScreen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "END_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

const store = createStore(reducer);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
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
      <Provider store={store}>
        <View style={styles.container}>
          <TabScreen />
        </View>
      </Provider>
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
