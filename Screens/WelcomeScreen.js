import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
export default function WelcomeScreen({ navigation }) {
  const handleGetStarted = () => {
    navigation.navigate("Signup");
  };
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={[tw`flex-1`, { backgroundColor: "#fdd9e4" }]}>
      <View style={tw`flex-1 flex justify-around my-4`}>
        <Text
          style={[tw` font-bold text-4xl text-center`, { color: "#554288" }]}
        >
          Welcome Screen
        </Text>
        <View style={tw`flex-row justify-center`}>
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 350,
              height: 350,
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={[tw`py-3 mx-7 rounded-xl`, { backgroundColor: "#554288" }]}
            onPress={handleGetStarted}
          >
            <Text style={tw`text-xl font-bold text-center text-white`}>
              Get Started
            </Text>
          </TouchableOpacity>
          <View style={tw`flex-row justify-center mt-3`}>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={tw`text-gray-700 font-semibold`}>
                Already have an Account?
                <Text style={tw`font-semibold text-gray-700`}> Log In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
