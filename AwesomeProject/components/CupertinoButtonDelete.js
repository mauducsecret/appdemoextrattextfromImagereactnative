import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";


function CupertinoButtonDelete(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
      <Image source={require('../assets/images/camera.png')} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  icon: {
    color: "#000",
    fontSize: 24,
    fontFamily: "Roboto"
  }
});

export default CupertinoButtonDelete;
