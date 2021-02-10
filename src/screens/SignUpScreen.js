import React, { useContext, useState } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { FontAwesome, Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
const SignUpScreen = ({ navigation }) => {
  const [handle, setHandle] = useState("");
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let userData = { handle, role, email, password, confirmPassword };
  return (
    <View style={styles.authViewStyle}>
      <Card>
        <Card.Title>Welcome to Deliver-it</Card.Title>
        <Card.Divider />

        <Input
          leftIcon={<Ionicons name="ios-person" size={24} color="orange" />}
          placeholder="Name"
          onChangeText={(currentInput) => {
            setHandle(currentInput);
          }}
        />

        <Input
          placeholder="Contact"
          leftIcon={<AntDesign name="contacts" size={24} color="orange" />}
          secureTextEntry={true}
          onChangeText={(currentInput) => {
            setConfirmPassword(currentInput);
          }}
        />

        <Input
          leftIcon={<FontAwesome name="envelope" size={24} color="orange" />}
          placeholder="E-mail Address"
          onChangeText={(currentInput) => {
            setEmail(currentInput);
          }}
        />

        <Input
          placeholder="Password"
          leftIcon={<Feather name="key" size={24} color="orange" />}
          secureTextEntry={true}
          onChangeText={(currentInput) => {
            setPassword(currentInput);
          }}
        />

        <Input
          placeholder="Confirm Password"
          leftIcon={<Feather name="key" size={24} color="orange" />}
          secureTextEntry={true}
          onChangeText={(currentInput) => {
            setConfirmPassword(currentInput);
          }}
        />

        <Input
          placeholder="Address"
          leftIcon={<Feather name="key" size={24} color="orange" />}
          secureTextEntry={false}
          onChangeText={(currentInput) => {
            setConfirmPassword(currentInput);
          }}
        />

        <View style={{ flexDirection: "row", margin: 10 }}>
          <Ionicons name="ios-school" size={24} color="orange" />
          <Picker
            selectedValue={role}
            style={{ height: 28, width: 120, marginLeft: 10 }}
            onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
          >
            <Picker.Item label="User" value="user" />
            <Picker.Item label="Delivery Man" value="deliveryMan" />
          </Picker>
        </View>
        {false ? (
          <Button
            icon={
              <ActivityIndicator size="large" color="white" animating={true} />
            }
            title="  Loading..."
          />
        ) : (
          <>
            <Button
              icon={<AntDesign name="user" size={24} color="white" />}
              title="  Sign Up!"
              onPress={() => {
                signUp(userData, navigation, uiDispatch);
              }}
            />
            <Button
              type="clear"
              icon={<AntDesign name="login" size={24} color="dodgerblue" />}
              title="  Already have an account?"
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            />
          </>
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  authViewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffe6e6",
  },
});

export default SignUpScreen;
