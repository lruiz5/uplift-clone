import * as React from "react";
import { Button, View, Text } from "react-native";

const resources = [
  "Immediate Needs",
  "Rebuilding",
  "New Beginnings",
  "Additional Resources",
];

export const ResourceFinderScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Resource Finder Screen</Text>
      {resources.map((resource) => (
        <Button
          key={resource}
          title={resource}
          onPress={() =>
            navigation.navigate("Category Selection", { title: resource })
          }
        />
      ))}
    </View>
  );
};
