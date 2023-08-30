import * as React from "react";
import { Button, View, Text } from "react-native";

const resources = [
  "Transportation",
  "Documentation",
  "Financial Assistance",
  "Family Services",
  "Legal Assistance",
  "Pet Assistance",
  "Clothing",
  "Employment",
];

export const CategorySelection = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Select A Category</Text>
      {resources.map((resource) => (
        <Button
          key={resource}
          title={resource}
          onPress={() => navigation.navigate("Resource Map", {title: resource})}
        />
      ))}
    </View>
  );
};

