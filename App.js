import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import HomeScreen from "./Screens/HomeScreen";
import OTPVerifyScreen from "./Screens/OTPVerifyScreen";
import { StatusBar } from "react-native";
import { UserContext } from "./UserContext";
import CreatePasswordScreen from "./Screens/CreatePasswordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserContext>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fdd9e4" />
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OTPVerify"
            component={OTPVerifyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreatePassword"
            component={CreatePasswordScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext>
  );
}
