import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Wrapper } from "../components";
import { Button } from "react-native-elements";
import { auth } from "../../firebase";

const Home = () => {
  return (
    <Wrapper>
      <Text>Home</Text>
      <Button title="logout" onPress={() => auth.signOut()} />
    </Wrapper>
  );
};

export default Home;
