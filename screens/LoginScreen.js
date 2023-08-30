import * as React from "react";
import { Button, View, Text } from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Progress Tracker")}
      />
    </View>
  );
};
