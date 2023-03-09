import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import SingleUser from "../components/SingleUser";

const SelectUserFromList = (props) => {
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

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (props?.route?.params?.next) {
            props?.navigation.navigate(props?.route?.params?.next, {
              item: item,
            });
          }
        }}
      >
        <SingleUser item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={users}
        renderItem={RenderItem}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={() => <Text h3>No Users</Text>}
      />
    </View>
  );
};

export default SelectUserFromList;
