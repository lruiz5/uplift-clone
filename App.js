import * as React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

function HomeScreen({ navigation }) {
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
}

function ResourceFinderScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Resource Finder Screen</Text>
      <Button
        title="Immediate Needs"
        onPress={() => navigation.navigate("Category Selection")}
      />
      <Button
        title="Rebuilding"
        onPress={() => navigation.navigate("Category Selection")}
      />
      <Button
        title="New Beginnings"
        onPress={() => navigation.navigate("Category Selection")}
      />
      <Button
        title="Additional Resources"
        onPress={() => navigation.navigate("Category Selection")}
      />
    </View>
  );
}

function CategorySelection() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Select A Category</Text>
      {resources.map((resource) => (
        <Button
          key={resource}
          title={resource}
          onPress={() => console.log(resource)}
        />
      ))}
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Progress Tracker")}
      />
    </View>
  );
}
function ProgressTrackerScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Progress Tracker Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Uplift Eureka">
        <Stack.Screen name="Uplift Eureka" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Progress Tracker"
          component={ProgressTrackerScreen}
        />
        <Stack.Screen name="Resource Finder" component={ResourceFinderScreen} />
        <Stack.Screen name="Category Selection" component={CategorySelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
