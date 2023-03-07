import React, { useState, useLayoutEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button, Input, Image, Avatar, Icon } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //console.log(props?.route?.params?.uri);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "Back To Login",
    });
  }, [props?.navigation]);

  const handleRegister = () => {
    if (
      props?.route?.params?.uri &&
      fullName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      // createUserWithEmailAndPassword(auth, email, password)
      //   .then((authUser) => {
      //     console.log("User Created!", authUser);
      //     authUser.user.updateProfile({
      //       displayName: fullName,
      //     });
      //   })
      //   .catch((e) => console.log(e.message));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* <Image
        source={{
          uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png",
        }}
        style={{ width: 100, height: 100 }}
      /> */}
      <View style={styles.inputContainer}>
        {!props?.route?.params?.uri ? (
          <Avatar
            rounded
            size="large"
            overlayContainerStyle={{ backgroundColor: "blue" }}
            icon={{ name: "camera", type: "font-awesome" }}
            onPress={() =>
              props.navigation.navigate("Camera", { from: "Register" })
            }
          />
        ) : (
          <Avatar
            rounded
            size="xlarge"
            overlayContainerStyle={{ backgroundColor: "blue" }}
            source={{ uri: `${props?.route?.params?.uri}` }}
            onPress={() =>
              props.navigation.navigate("Camera", { from: "Register" })
            }
          />
        )}
        <Input
          placeholder="full name"
          autoFocus
          type="Text"
          onChangeText={(t) => setFullName(t)}
          value={fullName}
          style={{ marginTop: 30 }}
        />
        <Input
          placeholder="email"
          autoFocus
          type="Email"
          onChangeText={(t) => setEmail(t)}
          value={email}
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
          title="Sign Up"
          onPress={() => handleRegister()}
        />
        <Button
          containerStyle={styles.btn}
          title="Sign In"
          type="outline"
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
