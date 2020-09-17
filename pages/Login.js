import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getUsers } from "../api/users";
import { Actions } from "react-native-router-flux";

function Login() {
  const [isClicked, setIsClicked] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    setIsClicked(true);

    if (userInfo.email && userInfo.password) {
      const userList = await getUsers();
      const user = userList.filter(
        (user) =>
          user.email === userInfo.email && user.password === userInfo.password
      );

      if (!user.length) {
        alert("Failed");
      } else {
        alert("성공 정보 :" + JSON.stringify(user));
      }
    }
  };

  const moveSignup = () => {
    Actions.register();
  };
  return (
    <>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri:
              "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff6d77cab-2970-41d4-a75d-4f381b51e726%2Flogo.png?table=block&id=b0e3ee5a-b473-4974-8806-7bc29ce75dd0&width=380&userId=&cache=v2",
          }}
          style={{ width: 90, height: 90 }}
        />
        <Text style={{ marginTop: 15 }}>Welcome to my app</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={{ width: 300, fontWeight: "500" }}>Email</Text>
        <TextInput
          style={styles.inputBox}
          backgroundColor="silver"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
          keyboardType="email-address"
          selectionColor="#fff"
          onChangeText={(text) =>
            setUserInfo(() => {
              return {
                ...userInfo,
                email: text,
              };
            })
          }
        />
        {isClicked && userInfo.email === "" ? (
          <Text style={{ color: "red" }}>Email 을 입력해주십시오.</Text>
        ) : null}
        <Text style={{ width: 300, fontWeight: "500" }}>Password</Text>
        <TextInput
          style={styles.inputBox}
          backgroundColor="silver"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          placeholderTextColor="#ffffff"
          secureTextEntry
          selectionColor="#fff"
          onChangeText={(text) =>
            setUserInfo(() => {
              return {
                ...userInfo,
                password: text,
              };
            })
          }
        />
        {isClicked && userInfo.password === "" ? (
          <Text style={{ color: "red" }}>Password 를 입력해주십시오.</Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomText}>
        <Text>Don't have account yet?</Text>
        <TouchableOpacity onPress={moveSignup}>
          <Text style={{ paddingLeft: 10 }}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  formContainer: {
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
  bottomText: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
