import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { auth } from "../../firebase";

const SingleUser = ({ item }) => {
  //  console.log(props);
  return (
    <ListItem bottomDivider>
      <Avatar rounded source={{ uri: item.photoURL }} />
      <ListItem.Content>
        <ListItem.Title>{item.displayName}</ListItem.Title>
        {auth?.currentUser && auth.currentUser.uid === item.uid && (
          <ListItem.Subtitle>Message Yourself</ListItem.Subtitle>
        )}
      </ListItem.Content>
    </ListItem>
  );
};

export default SingleUser;
