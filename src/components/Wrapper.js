import { SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { auth } from "../../firebase";
import { useNavigation, useRoute } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";

const Wrapper = (props) => {
  return (
    <SafeAreaView style={props.style}>
      <StatusBar style="light" />
      {props.children}
    </SafeAreaView>
  );
};

export default Wrapper;
