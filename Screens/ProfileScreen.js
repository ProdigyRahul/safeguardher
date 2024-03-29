import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#554288" />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="chevron-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.content}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>Jane Doe</Text>
          <Text style={styles.label}>Number:</Text>
          <Text style={styles.value}>123-456-7890</Text>
          <Text style={styles.label}>Current Password:</Text>
          <Text style={styles.value}>********</Text>
          <Text style={styles.label}>New Password:</Text>
          <Text style={styles.value}>********</Text>
        </View>
        <TouchableOpacity style={styles.historyButton}>
          <MaterialCommunityIcons name="history" size={24} color="#fff" />
          <Text style={styles.historyButtonText}>History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdd9e4",
  },
  navbar: {
    backgroundColor: "#554288",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileInfo: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  historyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#554288",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  historyButtonText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
  },
});
