import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";

export default function Home({ navigation }) {
  const [people, setPeople] = useState([
    { name: "Umar Masood", key: "1", payment: "Rs. 1000" },
    { name: "Ayan Mujahid", key: "2", payment: "Rs. 1000" },
    { name: "mario", key: "3", payment: "Rs. 1000" },
    { name: "luigi", key: "4", payment: "Rs. 1000" },
    { name: "peach", key: "5", payment: "Rs. 1000" },
    { name: "toad", key: "6", payment: "Rs. 1000" },
    { name: "Wajaht", key: "7", payment: "Rs. 1000" },
    { name: "Subhan", key: "8", payment: "Rs. 1000" },
    { name: "Owais", key: "9", payment: "Rs. 1000" },
    { name: "Ali", key: "10", payment: "Rs. 1000" },
    { name: "Shariq", key: "11", payment: "Rs. 1000" },
    { name: "Haseeb", key: "12", payment: "Rs. 1000" },
    { name: "Haseeb Bhai", key: "13", payment: "Rs.1000" },
    { name: "Umar Masood", key: "14", payment: "Rs. 1000" },
    { name: "Ayan Mujahid", key: "15", payment: "Rs. 1000" },
    { name: "mario", key: "16", payment: "Rs. 1000" },
    { name: "luigi", key: "17", payment: "Rs. 1000" },
    { name: "peach", key: "18", payment: "Rs. 1000" },
    { name: "toad", key: "19", payment: "Rs. 1000" },
    { name: "Wajaht", key: "20", payment: "Rs. 1000" },
    { name: "Subhan", key: "21", payment: "Rs. 1000" },
    { name: "Owais", key: "22", payment: "Rs. 1000" },
    { name: "Ali", key: "23", payment: "Rs. 1000" },
    { name: "Shariq", key: "24", payment: "Rs. 1000" },
    { name: "Haseeb", key: "25", payment: "Rs. 1000" },
    { name: "Haseeb Bhai", key: "26", payment: "Rs.1000" },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <View style={styles.card1}>
          <Text
            style={{
              marginTop: 22,
              marginLeft: 15,
              color: "white",
              fontSize: 15,
            }}
          >
            Current Balance
          </Text>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 15,
              fontSize: 27,
              color: "white",
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            Rs. 67878
          </Text>
          <View style={styles.mastercard}>
            <Image
              style={styles.image}
              source={require("../assets/card.png")}
            />
            <Image
              style={styles.image1}
              source={require("../assets/arrow.png.png")}
            />
          </View>
        </View>
        <View style={styles.card2cont}>
          <Pressable onPress={() => navigation.navigate("Card")}>
            <View style={[styles.card2, { justifyContent: "flex-end" }]}>
              <View
                style={{
                  height: "50%",
                  width: "30%",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    transform: [{ rotate: "90deg" }],
                    height: 20,
                    width: 20,
                    resizeMode: "contain",
                    marginBottom: 15,
                  }}
                  source={require("../assets/arrow.png.png")}
                />
              </View>
              <View style={{ height: "50%", width: "100#", borderRadius: 15 }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingLeft: 13,
                    fontWeight: "700",
                  }}
                >
                  Load         Money
                </Text>
              </View>
            </View>
          </Pressable>
          <View style={[styles.card2, styles.card3]}>
            <Pressable onPress={() => navigation.navigate("Card")}>
              <View
                style={{
                  height: "50%",
                  width: "30%",
                  borderRadius: 15,
                  alignSelf: "flex-end",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    transform: [{ rotate: "320deg" }],
                    height: 20,
                    width: 20,
                    resizeMode: "contain",
                    marginBottom: 10,
                  }}
                  source={require("../assets/arrow.png.png")}
                />
              </View>
              <View style={{ height: "50%", width: "100#", borderRadius: 15 }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingLeft: 13,
                    fontWeight: "700",
                  }}
                >
                  Send & Request
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.transcont}>
        <View style={styles.transcard}>
          <Text
            style={{
              fontSize: 17,
              paddingLeft: 20,
              paddingTop: 15,
              color: "grey",
            }}
          >
            Transactions
          </Text>

          <FlatList
            width={370}
            marginTop={5}
            data={people}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f2bbb6",
                    borderRadius: 50,
                    marginHorizontal: 10,
                    elevation: 5,
                    marginVertical: 3,
                  }}
                >
                  <Image source={require("../assets/transfer.png")} />
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    margin: 20,
                    marginLeft: 0,
                    marginVertical: 30,
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    height: 50,
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "600",
                      color: "#fb806e",
                      marginLeft: 10,
                    }}
                  >
                    {item.payment}
                  </Text>
                </View>
              </View>
            )}
          />
          {/* <Text style={{fontSize:17,paddingLeft:20,paddingTop:15,color: 'grey'}}>
            Transactions
          </Text>
          <View style={{height:120,width:370,flexDirection:'row'}}>
            <View style={{height:70,width:80,alignItems:'center',height:70,width:70, resizeMode:'contain',paddingTop:15,}}>
              <Image source={require('../assets/transfer.png')}/>
            </View>
            <View style={{paddingTop:10,}}>
            <Text style={{fontSize:17,fontWeight:'600',}}>Gulshan-e-iqbal Khi.</Text>
            <Text style={{fontSize:17,fontWeight:'600'}}>Gulshan-e-iqbal Khi.</Text>
            <Text style={{fontSize:17,fontWeight:'600'}}>Karachi Pk Karachi Pak</Text>
            <Text style={{paddingTop:7,}}>11:18 PM</Text>
            </View>
            <Text style={{fontSize:20,padding:10,fontWeight:'bold',paddingLeft:23,}}>Rs. 1000</Text>
          </View>
           */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  card: {
    height: 320,
    width: "100%",
    backgroundColor: "#f1f7f7",
    flexDirection: "row",
  },
  card1: {
    height: 260,
    width: 200,
    backgroundColor: "#02dcb9",
    marginLeft: 13,
    marginRight: 4,
    marginTop: 40,
    borderRadius: 15,
    elevation: 5,
  },
  card2cont: {
    height: 320,
    width: 170,
    backgroundColor: "#f1f7f7",
    alignItems: "center",
  },
  card2: {
    height: 123,
    width: 150,
    backgroundColor: "#1da9f8",
    marginTop: 42,
    borderRadius: 15,
    marginRight: 0,
    elevation: 5,
  },
  card3: {
    marginTop: 10,
    backgroundColor: "#fb806e",
    justifyContent: "flex-end",
  },
  mastercard: {
    marginTop: 130,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 183,
  },
  image: {
    height: 30,
    width: 40,
    resizeMode: "contain",
  },
  image1: {
    height: 30,
    width: 20,
    resizeMode: "contain",
  },
  transcont: {
    height: 455,
    width: "100%",
    backgroundColor: "#f1f7f7",

    alignItems: "center",
  },
  transcard: {
    height: 400,
    width: 370,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 5,
  },
});
