import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  Button
} from "react-native";

import {post} from "../middleware";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
      const body = {email, password}; 
      console.log(post)

      post('users/login', body)
      .then(res => console.log(res))
      
  }

  return (
    <View>
      <TextInput
        placeholder={"email"}
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        secureTextEntry
        placeholder={"password"}
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />

      <Button  onPress={ () => handleLogin() }> 
          <Text>
            Submit
          </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Login;
