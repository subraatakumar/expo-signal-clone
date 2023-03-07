import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text, Avatar } from "react-native-elements";

export default function App(props) {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  console.log(props.route.params);
  if (!permission) {
    // Camera permissions are still loading
    return (
      <View>
        <Text>Please wait...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={[styles.container, { alignItems: "center" }]}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button
          icon={{ name: "check-circle", type: "font-awesome", color: "#FFF" }}
          iconLeft
          title="Grant Permission"
          containerStyle={{ width: 250, marginTop: 20 }}
          onPress={requestPermission}
        />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View style={{ flex: 1 }}></View>
        <View style={styles.buttonContainer}>
          <Avatar
            rounded
            size="large"
            icon={{
              name: "dot-circle-o",
              color: "lightblue",
              type: "font-awesome",
            }}
            onPress={async () => {
              if (cameraRef) {
                let photo = await cameraRef.takePictureAsync();
                console.log(photo);
                props.navigation.navigate(props.route.params.from, {
                  uri: photo.uri,
                });
                //   setImage(photo);
                //   setModalVisible();
              }
            }}
          />
          <Avatar
            rounded
            size="large"
            icon={{
              name: "undo",
              color: "lightblue",
              type: "font-awesome",
            }}
            onPress={toggleCameraType}
          />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    width: 250,
    flexDirection: "row",
    backgroundColor: "transparent",
    backgroundColor: "rgba(20,20,20,0.4)",
    borderRadius: 10,
    maxHeight: 50,
    alignSelf: "flex-end",
    marginBottom: 30,
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
