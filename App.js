import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  LoginScreen,
  ProgressTrackerScreen,
  ResourceFinderScreen,
  CategorySelection,
  ResourceMapScreen,
} from "./screens";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerBackTitleVisible: false }}
        initialRouteName="Uplift Eureka"
      >
        <Stack.Screen name="Uplift Eureka" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Progress Tracker"
          component={ProgressTrackerScreen}
        />
        <Stack.Screen name="Resource Finder" component={ResourceFinderScreen} />
        <Stack.Screen
          name="Category Selection"
          component={CategorySelection}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen name="Resource Map" component={ResourceMapScreen} options={({ route }) => ({ title: route.params.title })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
