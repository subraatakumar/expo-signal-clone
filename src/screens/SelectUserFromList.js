import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import SingleUser from "../components/SingleUser";
import { FlatList } from "react-native-gesture-handler";

const SelectUserFromList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "users"));

    getDocs(q).then((querySnapshot) => {
      const temp = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        temp.push(doc.data());
      });
      setUsers((prev) => [...temp]);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={SingleUser}
        ListEmptyComponent={() => <Text h3>No Users</Text>}
      />
    </View>
  );
};

export default SelectUserFromList;
