import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
const SingleUser = ({ item }) => {
  //  console.log(props);
  return (
    <ListItem bottomDivider>
      <Avatar rounded source={{ uri: item.photoURL }} />
      <ListItem.Content>
        <ListItem.Title>{item.displayName}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default SingleUser;
