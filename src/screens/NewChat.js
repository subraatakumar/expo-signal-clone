import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { db, auth } from "../../firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

const NewChat = () => {
  useEffect(() => {
    // const cityRef = doc(db, "cities", auth?.currentUser?.uid);
    // setDoc(
    //   cityRef,
    //   {
    //     sender: auth?.currentUser?.uid,
    //     senderPhotoURL: auth?.currentUser?.photoURL,
    //     senderDisplayName: auth?.currentUser?.displayName,
    //   },
    //   { merge: true }
    // );
    // Add a new document with a generated id.
    // addDoc(collection(db, "cities"), {
    //   name: "Tokyo",
    //   country: "Japan",
    // }).then((docRef) => console.log("Document written with ID: ", docRef.id));
  }, []);
  return (
    <View>
      <Text>NewChat</Text>
    </View>
  );
};

export default NewChat;
