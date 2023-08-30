import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#0084DB",
          borderColor: "#0084DB",
          borderWidth: 1,
          borderRadius: 3,
          padding: 15,
          marginVertical: 30,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "#fff" }}>Progress Tracker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#0084DB",
          borderColor: "#0084DB",
          borderWidth: 1,
          borderRadius: 3,
          padding: 15,
        }}
        onPress={() => navigation.navigate("Resource Finder")}
      >
        <Text style={{ color: "#fff" }}>Resource Finder</Text>
      </TouchableOpacity>
    </View>
  );
};
