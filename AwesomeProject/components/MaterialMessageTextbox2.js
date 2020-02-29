import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialMessageTextbox2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text
        style={[
          styles.label,
          {
            color: props.error
              ? "red"
              : props.success
              ? "green"
              : "rgba(18,19,20,1)"
          }
        ]}
      >
        {props.text1 || "Extract Text From Image"}
      </Text>
      <TextInput
        placeholder={props.textInput1 || "Input"}
        value = {props.value}
        editable = {props.editable}
        multiline={props.multiline}
        style={[
          styles.inputStyle,
          {
            borderBottomColor: props.error
              ? "red"
              : props.success
              ? "green"
              : "#D9D5DC"
          }
        ]}
      ></TextInput>
      {props.error ? (
        <Text
          style={[
            styles.helper1,
            {
              color: props.error ? "red" : "transparent"
            }
          ]}
        >
          Error message
        </Text>
      ) : null}
      {props.success ? (
        <Text
          style={[
            styles.helper2,
            {
              color: props.success ? "green" : "transparent"
            }
          ]}
        >
          Success message
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  label: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 30,
    fontFamily: "roboto-700",
    lineHeight: 20,
    textAlign: "left"
  },
  inputStyle: {
    width: 375,
    flex: 1,
    color: "rgba(5,172,212,1)",
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "rgba(25,134,186,1)",
    borderWidth: 3,
    borderStyle: "solid",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  helper1: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  helper2: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  }
});

export default MaterialMessageTextbox2;
