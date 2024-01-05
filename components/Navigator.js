
import React from 'react';
import { StyleSheet, View ,Image, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Home from '../screen/home';
import Card from '../screen/cardscreen';
import More from '../screen/more';
import Login from '../screen/login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'white',
        height:80,
        ...style.header
      }
    }}>
      <Stack.Screen options={{title:'',headerShown:false}} name= 'Login' component={Login} />
      <Stack.Screen options={{headerShown:false}} name='Home'component={Home} />
      <Stack.Screen options={{title:''}} name= 'Card' component={Card} />
    </Stack.Navigator>
  );
};

// const Aboutstack = () => {
//   return (
//     <Stack.Navigator
//     screenOptions={{
//       headerStyle:{
//         backgroundColor:'grey',
//         height:80,
//         ...style.header
//       }
//     }}>
//       <Stack.Screen name='About'component={About} />
//       <Stack.Screen name="Review" component={Review} />
//     </Stack.Navigator>
//   );
// };
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 5,
            height: 50,
            borderRadius: 0,
            ...style.shadow,
        },
      }}>
        <Tab.Screen 
        name=" " 
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: getTabBarStyle(route),
          tabBarLabel:"",
          headerTransparent:'',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
                height:30,
              }}
            >
              <Image
                // ye image pehle assests mai dalni hogi phir waha se import karni hai jesy nechy given hai

                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "red" : "black",
                }}
              />
              <Text
                style={{ color: focused ? "red" : "black", fontSize: 12 }}
              >
                Home
              </Text>
            </View>
          ),
        })} />
        
        <Tab.Screen 
        name="  " 
        component={More} 
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                // ye image pehle assests mai dalni hogi phir waha se import karni hai jesy nechy given hai

                source={require("../assets/menu.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "red" : "black",
                }}
              />
              <Text
                style={{ color: focused ? "red" : "black", fontSize: 12, }}
              >
                ABOUT
              </Text>
            </View>
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
};


const getTabBarStyle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  let display = 'flex'; // Default to showing the tab bar

  if (routeName === 'Card' || routeName === 'Login') {
    display = 'none'; // Hide the tab bar for these specific screens
  }

  return { display };
};

// const getTabBarStyle = (route) => {  
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
//   let display = (routeName === 'Card') ? 'none':'flex';
//   return {display}
// }



const style = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});

export default App;