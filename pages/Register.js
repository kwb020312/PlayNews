import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Actions } from "react-native-router-flux";
import * as userApi from "../api/users";

function Register() {
  // 상태 추가 ( 클릭 여부 및 사용자 정보 )
  const [isClick, setIsClick] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 사용자 등록 버튼 클릭시 처리
  const registUser = async () => {
    setIsClick(true);

    if (userInfo.name && userInfo.email && userInfo.password) {
      await userApi.createUser(userInfo);

      // 그냥 alert 를 호출하고 라우터를 적용하면 팝업은 뜬 상태로 페이지 이동이 먼저 처리되기 때문에
      // 버튼 옵션을 넣어 버튼 클릭시 페이지 이동이 이루어지도록 한다.
      Alert.alert("사용자 등록 완료", "로그인 페이지로 이동합니다.", [
        {
          text: "OK",
          onPress: () => Actions.login(),
        },
      ]);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={{ fontSize: 16, fontWeight: "900" }}>
          사용자 등록을 위한 정보를 입력해주십시오.
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={{ width: 300, fontWeight: "500" }}>Name</Text>
        <TextInput
          style={styles.inputBox}
          backgroundColor="silver"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Name"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          onChangeText={(text) => setUserInfo({ ...userInfo, name: text })}
        />
        {isClick && userInfo.name === "" ? (
          <Text style={{ color: "red" }}>Name 을 입력해주십시오.</Text>
        ) : null}
        <Text style={{ width: 300, fontWeight: "500" }}>Email</Text>
        <TextInput
          style={styles.inputBox}
          backgroundColor="silver"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
        />
        {isClick && userInfo.email === "" ? (
          <Text style={{ color: "red" }}>Email 을 입력해주십시오.</Text>
        ) : null}
        <Text style={{ width: 300, fontWeight: "500" }}>Password</Text>
        <TextInput
          style={styles.inputBox}
          backgroundColor="silver"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          secureTextEntry
          onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
        />
        {isClick && userInfo.password === "" ? (
          <Text style={{ color: "red" }}>Password 을 입력해주십시오.</Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={registUser}>
          <Text style={styles.buttonText}>Regist</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>Do you have account?</Text>
        <TouchableOpacity
          onPress={() => {
            Actions.login();
          }}
        >
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#1c313a",
    width: 300,
    marginVertical: 10,
    paddingVertical: 13,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Register;
