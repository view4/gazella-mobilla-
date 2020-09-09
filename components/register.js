import React, { useState } from "react";

import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { post } from "../middleware";

const Register = () => {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const body = { email, password, name };

    post("users/register", body).then((res) => console.log(res));
  };

  return (
    <View>
      <Text> Register </Text>
      <TextInput
        placeholder={"email"}
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry
        placeholder={"name"}
        style={styles.input}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        secureTextEntry
        placeholder={"password"}
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />

      <Button text={"hey"} onPress={() => handleLogin()}>
        <Text>Submit</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Register;
