import React, { useEffect } from "react";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import { Wrapper } from "../components";
import { Button, Avatar, Text, Icon } from "react-native-elements";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Home = (props) => {
  useEffect(() => {
    if (!auth?.currentUser) {
      props.navigation.replace("Login");
    }
    props?.navigation &&
      props?.navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity>
            <Avatar
              rounded
              size="medium"
              source={{ uri: `${auth?.currentUser?.photoURL}` }}
              containerStyle={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={handleLogout}>
            <Icon
              name="power-off"
              type="font-awesome"
              color="#FFF"
              containerStyle={{
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        ),
        title: auth?.currentUser ? auth?.currentUser?.displayName : "Chat App",
      });
  }, []);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        props.navigation.replace("Login");
      })
      .catch(() => console.log("Unable to signout"));
  };

  return (
    <Wrapper>
      <Text h3>Home</Text>
    </Wrapper>
  );
};

export default Home;
