import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar />
      <ListItem.Content>
        <ListItem.Title>Sample Title</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Sub Title
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;
