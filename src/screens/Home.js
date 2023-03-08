import React, { useEffect, useLayoutEffect } from "react";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import { Wrapper, CustomListItem, AddChatBtn } from "../components";
import { Button, Avatar, Text, Icon } from "react-native-elements";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Home = (props) => {
  useLayoutEffect(() => {
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
    <Wrapper style={{ flex: 1 }}>
      <Text h3>Home</Text>
      <CustomListItem />
      <AddChatBtn />
    </Wrapper>
  );
};

export default Home;
