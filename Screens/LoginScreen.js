import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import { ArrowLeftIcon, ChevronDownIcon } from "react-native-heroicons/solid";

export default function LoginScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={[tw`flex-1 bg-white`, { backgroundColor: "#fdd9e4" }]}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView style={tw`flex`}>
          <View style={tw`flex-row justify-start`}>
            <TouchableOpacity
              style={[
                tw`p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2`,
                { backgroundColor: "#554288" },
              ]}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ArrowLeftIcon size="20" color="white" />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-row justify-center`}>
            <Image
              source={require("../assets/logo.png")}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </View>
          <View style={tw`flex-row justify-center mt-2`}>
            <Text
              style={{
                fontSize: 30,
                color: "#554288",
                fontWeight: "bold",
                marginBottom: 30,
              }}
            >
              SafeGuard Her
            </Text>
          </View>
        </SafeAreaView>
        <View
          style={[
            tw`bg-white px-8 pt-8 pb-10`,
            { borderTopLeftRadius: 50, borderTopRightRadius: 50 },
          ]}
        >
          <View style={{ marginTop: 2 }}>
            <Text style={{ fontSize: 30, fontWeight: "800" }}>Sign In</Text>
            <Text style={{ color: "gray" }}>
              Let's get started by filling out the form below
            </Text>
          </View>
          <View style={{ marginTop: 40, marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "300", color: "#121212" }}>
              Enter your mobile number
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderWidth: 1.8,
                  borderRadius: 10,
                  borderColor: "#D3D3D3",
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                }}
              >
                <Image
                  source={require("../assets/india.png")}
                  style={{ width: 30, height: 20, marginRight: 10 }}
                />
                <ChevronDownIcon size="20" color="gray" />
              </View>
              <View
                style={{
                  borderWidth: 1.8,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  borderColor: "#D3D3D3",
                  marginLeft: 10,
                  flex: 1,
                  height: 50,
                }}
              >
                <Text style={{ padding: 10, color: "#121212" }}>+91 |</Text>
                <TextInput
                  style={{
                    height: 50,
                    color: "#121212",
                    flex: 1,
                  }}
                  placeholder="Enter your mobile number"
                  placeholderTextColor="#D3D3D3"
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#554288",
              paddingVertical: 15,
              borderRadius: 20,
              alignItems: "center",
              marginTop: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5,
            }}
            onPress={() => {
              // TODO: Backend
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text
              style={{ fontSize: 16, color: "#554288", fontWeight: "bold" }}
            >
              Don't have an account? Sign up here
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: "auto",
              marginTop: 50,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 12, color: "#C0C0C0", textAlign: "center" }}
            >
              By continuing, you agree that you have read and accepted our{" "}
              <Text style={{ color: "#554288" }}>T&Cs</Text> and{" "}
              <Text style={{ color: "#554288" }}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
