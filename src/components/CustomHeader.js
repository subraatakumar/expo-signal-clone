import React, { useLayoutEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Text, ListItem } from "react-native-elements";

const CustomHeader = (props) => {
  return (
    <TouchableOpacity>
      <ListItem
        containerStyle={{
          backgroundColor: "rgba(52, 52, 52, 0)",
          marginLeft: -40,
        }}
      >
        <Avatar
          rounded
          source={{ uri: `${props?.photoURL}` }}
          containerStyle={{ marginLeft: 5 }}
        />
        <ListItem.Title style={{ color: "#FFF" }}>
          {props?.displayName}
        </ListItem.Title>
      </ListItem>
    </TouchableOpacity>
  );
};

export default CustomHeader;
