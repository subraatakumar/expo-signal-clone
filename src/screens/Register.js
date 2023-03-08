import React, { useState, useLayoutEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button, Input, Image, Avatar, Icon } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth, storage } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import uploadImage from "../helpers/uploadImage";

const Register = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //console.log(props?.route?.params?.uri);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "Create User",
    });
  }, [props?.navigation]);

  const handleRegister = () => {
    if (
      props?.route?.params?.uri &&
      fullName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      uploadImage(storage, props?.route?.params?.uri, "profileimg", email)
        .then((t) => {
          console.log("photo URL:", t);
          createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
              console.log("User Created!", authUser, t, fullName);
              updateProfile(auth.currentUser, {
                displayName: fullName,
                photoURL: t,
              }).then((t) => {
                auth.signOut();
                console.log("Extra Profile Information updated!", t);
                props.navigation.replace("Login");
              });
            })
            .catch((e) => console.log("User Creation Error:", e.message));
        })
        .catch((e) => console.log("Rej:", e));
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
          onPress={handleRegister}
        />
        <Button
          containerStyle={styles.btn}
          title="Sign In"
          type="outline"
          onPress={() => props.navigation.replace("Login")}
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
