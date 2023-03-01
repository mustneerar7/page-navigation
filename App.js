import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import { HomeScreen } from "./components/Screens/HomeScreen";
import { ProfileScreen } from "./components/Screens/ProfileScreen";
import { ListScreen } from "./components/Screens/ListScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List screen" component={ListScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default MyStack;