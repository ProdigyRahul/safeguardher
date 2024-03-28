import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import TrackMeScreen from "./TrackMeScreen";
import RecordScreen from "./RecordScreen";
import SOSScreen from "./SOSScreen";
import FakeCallScreen from "./FakeCallScreen";
import HelplineScreen from "./HelplineScreen";
import { View, Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

// Custom SOS icon component
const SOSIcon = () => (
  <View style={styles.sosIcon}>
    <View>
      <MaterialCommunityIcons name="alert" size={20} color="#fff" />
      <Text style={styles.sosIconText}>SOS</Text>
    </View>
  </View>
);

const TabsWrapper = ({ navigation, route }) => {
  const { name } = route;

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "#554288",
        inactiveTintColor: "gray",
        style: styles.tabBar,
        labelStyle: styles.tabLabel,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="TrackMeTab"
        component={TrackMeScreen}
        options={{
          tabBarLabel: "Track Me",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="location-on" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RecordTab"
        component={RecordScreen}
        options={{
          tabBarLabel: "Record",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="fiber-manual-record" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SOSTab"
        component={SOSScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => <SOSIcon />,
        }}
      />
      <Tab.Screen
        name="FakeCallTab"
        component={FakeCallScreen}
        options={{
          tabBarLabel: "Fake Call",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="call" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="HelplineTab"
        component={HelplineScreen}
        options={{
          tabBarLabel: "Helpline",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsWrapper;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#554288",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabLabel: {
    fontSize: 12,
    marginBottom: 3,
  },
  sosIcon: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  sosIconInner: {
    alignItems: "center",
  },
  sosIconText: {
    color: "#fff",
    fontSize: 10,
  },
});
