import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { Wrapper } from "../components";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       props.navigation.replace("Home");
  //     } else {
  //       props.navigation.replace("Login");
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => console.log("Signin Successful!"))
        .catch((e) => console.log(e));
    }
  };

  return (
    <Wrapper style={styles.container}>
      <Image
        source={{
          uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
        }}
        style={{ width: 150, height: 150 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="email"
          autoFocus
          type="Email"
          onChangeText={(t) => setEmail(t)}
          value={email}
          style={{ marginTop: 30 }}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          secureTextEntry
          onChangeText={(t) => setPassword(t)}
        />
        <Button
          containerStyle={styles.btn}
          title="Sign In"
          onPress={handleLogin}
        />
        <Button
          containerStyle={styles.btn}
          title="Sign Up"
          type="outline"
          onPress={() => props?.navigation.navigate("Register")}
        />
      </View>
    </Wrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
  btn: {
    width: 200,
    marginTop: 10,
  },
});
