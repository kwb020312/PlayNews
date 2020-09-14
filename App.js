import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TabScreen from "./components/TabScreen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { getArticles } from "./api/news";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, call } from "redux-saga/effects";

const initialState = {
  isLoading: true,
  datas: "",
  general: "",
  health: "",
  entertainment: "",
};

const sagaMiddleware = createSagaMiddleware();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATAS":
      return {
        ...state,
        isLoading: true,
      };
    case "TAKE_DATAS":
      return {
        ...state,
        [action.category]: action.data,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

function* DataSaga(action) {
  try {
    const Datas = yield call(() => getArticles(action.category));
    yield put({
      type: "TAKE_DATAS",
      data: Datas,
      isLoading: false,
      category: action.category,
    });
  } catch (e) {
    yield alert(e);
  }
}

function* rootSaga() {
  yield takeEvery("GET_DATAS", DataSaga);
}
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

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
