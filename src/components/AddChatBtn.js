import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const AddChatBtn = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("SelectUserFromList", { next: "NewChat" });
  };

  return (
    <View style={{ position: "absolute", bottom: 10, right: 10 }}>
      <TouchableOpacity onPress={handleClick}>
        <Icon
          name="pencil-square-o"
          type="font-awesome"
          color={"#2c6BED"}
          raised
          reverse
          containerStyle={{
            marginRight: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddChatBtn;
