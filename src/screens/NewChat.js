import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Icon, Text, Input } from "react-native-elements";
import { db, auth } from "../../firebase";
import { CustomHeader } from "../components";
import writeToDb from "../helpers/writeToDb";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const NewChat = (props) => {
  const [msgText, setMsgText] = useState("");
  const [msgType, setMsgType] = useState(["text"]);

  useLayoutEffect(() => {
    if (props?.route?.params) {
      props?.navigation &&
        props.navigation.setOptions({
          headerTitle: () => <CustomHeader {...props?.route?.params?.item} />,
        });
    }
  }, [props?.route?.params]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      where("receiverUid", "==", props?.route?.params?.item?.uid)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      console.log(
        "Messages: ",
        props?.route?.params?.item?.displayName,
        messages
      );
    });
    return () => unsubscribe;
  }, []);

  const sendMessage = () => {
    writeToDb(db, "messages", {
      msgType,
      msgText,
      imageLink: "",
      docLink: "",
      senderUid: auth?.currentUser?.uid,
      senderDisplayName: auth?.currentUser?.displayName,
      senderPhotoUrl: auth?.currentUser?.photoURL,
      receiverUid: props?.route?.params?.item?.uid,
      receiverDisplayName: props?.route?.params?.item?.displayName | "",
      receiverPhotoUrl: props?.route?.params?.item?.photoURL | "",
    })
      .then(() => {
        setMsgText("");
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flexDirection: "row", height: 60 }}>
        <Input
          placeholder="Enter Message"
          containerStyle={{ flex: 1 }}
          value={msgText}
          onChangeText={setMsgText}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Icon
            name="send"
            type="ion-icons"
            color={"#2c6BED"}
            raised
            reverse
            containerStyle={{
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewChat;
