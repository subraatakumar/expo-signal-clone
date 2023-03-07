import { SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { auth } from "../../firebase";
import { useNavigation, useRoute } from "@react-navigation/native";

const Wrapper = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //console.log(authUser, route.name, navigation);
      if (authUser) {
        (route.name === "Login" || route.name === "Register") &&
          navigation &&
          navigation.replace("Home");
      } else {
        route.name !== "Login" && navigation && navigation.replace("Login");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={props.style}>
      <StatusBar style="light" />
      {props.children}
    </SafeAreaView>
  );
};

export default Wrapper;
