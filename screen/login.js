import { StatusBar } from "expo-status-bar";
import { useState , useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Scroll,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Token, setToken] = useState(null);

  // const onSubmit = async () => {
  //   await AsyncStorage.setItem("token", username);
  //   if (
  //     (username === "Umar" && password === "12345") ||
  //     (username === "Ayan" && password === "56789")
  //   ) {
  //     navigation.navigate("Home");
  //   } else {
  //     console.log("Not found");
  //   }
  // };

  // Function to check for existing token
const checkLogin = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      // User is already logged in, navigate to Home
      navigation.navigate('Home');
    } else {
      // User is not logged in, proceed with login
      // ... (your login logic here)
    }
  } catch (error) {
    console.error('Error checking token:', error);
    // Handle any errors that might occur during token retrieval
  }
};

// Call checkLogin when the app starts
useEffect(() => {
  checkLogin();
}, []);

// Submit function (assuming it's within a login form)
const onSubmit = async () => {
  // ... (your login validation logic here)

  if (username === 'Umar' && password === '12345') {
    await AsyncStorage.setItem('token', username); // Store token on successful login
    navigation.navigate('Home'); // Redirect to Home screen
  } else {
    console.log('Invalid credentials'); // Handle invalid credentials
  }
};


  const tokenLogin = async () => {
    const value = await AsyncStorage.getItem("token");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.loginhead}>
        <Text style={styles.sadapaytext}>Sadapay</Text>
      </View>
      <View style={styles.login}>
        <TextInput
          style={{
            padding: 13,
            paddingLeft: 20,
            borderWidth: 1,
            marginVertical: 10,
            borderRadius: 30,
          }}
          onChangeText={(value) => setUsername(value)}
          placeholder="Username"
        />
        <TextInput
          style={{
            padding: 13,
            paddingLeft: 20,
            borderWidth: 1,
            marginVertical: 10,
            borderRadius: 30,
          }}
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
          placeholder="Password"
        />
        <Pressable onPress={onSubmit}>
          <View
            style={{
              height: 55,
              width: "100%",
              backgroundColor: "#fb806e",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#02dcb9",
  },
  loginhead: {
    height: "40%",
    width: "100%",
    backgroundColor: "#fb806e",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  sadapaytext: {
    color: "white",
    fontSize: 50,
    fontWeight: "500",
  },
  login: {
    height: 230,
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
