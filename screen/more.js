import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,ScrollView, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function More({navigation}) {

  const Login = async() => {
    await AsyncStorage.removeItem('token')
    navigation.navigate('Login')
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cont}>
        <View style={styles.innercont}>
          <Image style={{marginLeft:20,height:40,width:40,resizeMode:'contain',tintColor:'#02d2ae'}} source={require('../assets/user.png')}/>
          <Text style={{fontSize:16,fontWeight:'700',paddingLeft:13,}}>Umar Masood</Text>
        </View>
      </View>
      <View style={[styles.cont,{marginTop:10,}]}>
        <View style={styles.innercont}>
          <Image style={{marginLeft:20,height:40,width:40,resizeMode:'contain',tintColor:'#fb806e'}} source={require('../assets/help.png')}/>
          <Text style={{fontSize:16,fontWeight:'700',paddingLeft:13,}}>Help Center</Text>
        </View>
      </View>
      <View style={styles.cont1}>
        <View style={{height:'90%',width:'93%',backgroundColor:'white',marginTop:17,borderRadius:15,elevation:5,}}>
          <Text style={{fontSize:20,color:'grey',marginTop:10,paddingLeft:15}}>Info</Text>
          <View style={{height:60,width:'100%',alignItems:'center',flexDirection:'row'}}>
            <Image style={{marginLeft:20,height:40,width:40,resizeMode:'contain',tintColor:'#fb806e'}} source={require('../assets/insurance.png')}/>
            <Text style={{fontSize:16,fontWeight:'700',paddingLeft:13,}}>Privacy Policy</Text>
          </View>
          <View style={{height:60,width:'100%',alignItems:'center',flexDirection:'row'}}>
            <Image style={{marginLeft:23,height:40,width:40,resizeMode:'contain',tintColor:'#fb806e'}} source={require('../assets/terms-and-conditions.png')}/>
            <Text style={{fontSize:16,fontWeight:'700',paddingLeft:9,}}>Terms & conditions</Text>
          </View>
          <View style={{height:60,width:'100%',alignItems:'center',flexDirection:'row'}}>
            <Image style={{marginLeft:23,height:40,width:40,resizeMode:'contain',tintColor:'#fb806e'}} source={require('../assets/event.png')}/>
            <Text style={{fontSize:16,fontWeight:'700',paddingLeft:10,}}>Schedule of charges</Text>
          </View>
        </View>
      </View>
      <View style={[styles.cont,{marginTop:10,}]}>
        <View style={styles.innercont}>
          <Image style={{marginLeft:20,height:40,width:40,resizeMode:'contain',tintColor:'#fb806e'}} source={require('../assets/device.png')}/>
          <Text style={{fontSize:16,fontWeight:'700',paddingLeft:13,}}>Manage devices</Text>
        </View>
      </View>
      <Pressable onPress={Login}>
      <View style={[styles.cont,{marginTop:10,}]}>
        <View style={[styles.innercont]}>

          <Image style={{marginLeft:24,height:40,width:40,resizeMode:'contain',tintColor:'#fb806e'}} source={require('../assets/logout.png')}/>
          <Text style={{fontSize:16,fontWeight:'700',paddingLeft:8,}}>Log out</Text>
        </View>
      </View>
      </Pressable>
    </ScrollView>
  );               
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f7f7',
  },
  cont:{
    height:100,
    width:'100%',
    backgroundColor:'#f1f7f7',
    marginTop:60,
    alignItems:'center',
    justifyContent:'center',
  },
  innercont:{
    height:80,
    width:'93%',
    backgroundColor:'white',
    borderRadius:15,
    alignItems:'center',
    flexDirection:'row',
    elevation:5,
  },
  cont1:{
    height:250,
    alignItems:'center',
      
  },
});
