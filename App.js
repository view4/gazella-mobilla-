import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import axios from "axios";
import Login from "./components/login";
import Register from "./components/register";

export default function App() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={styles.container}>
      < Login />
      <Register />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
