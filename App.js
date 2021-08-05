import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createStackNavigator } from "@react-navigation/stack";
import SignInScreen from './app/src/views/screens/SignInScreen';


const Stack = createStackNavigator();

const App =() => {
  return(
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{header: ()=> null}}>
        <Stack.Screen name = "SignIn" component = {SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
