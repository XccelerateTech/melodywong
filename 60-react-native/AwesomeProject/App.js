/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, ScrollView, Button, Text, View, TouchableOpacity, Alert, TextInput, Linking, PermissionsAndroid, natvigator, Image, Dimensions} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});






export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      email: 'Email Address',
      password: 'Password',
      ok: false
    }
  }

  

  componentDidMount(){
    async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          // PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            'title': 'Cool Photo App Camera Permission',
            'message': 'Cool Photo App needs access to your camera ' +
                       'so you can take awesome pictures.'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera")
        } else {
          console.log("Camera permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }

    // await requestCameraPermission();

    // geolocation.getCurrentPosition((position)=>{
    //   console.log(position)
    //   this.setState({
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude
    //   })
    //   console.log('location', this.state.latitude, this.state.longitude)
    // }),
    // (error) => {
    //   console.log(error);

    // }
  }

  onPress = () =>{
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => {
          console.log('Cancel Pressed')
          this.setState({ok:false})
        }, style: 'cancel'},
        {text: 'OK', onPress: () => {
          console.log('OK Pressed')
          this.setState({ok:true})
        }},
      ],
      { cancelable: false }
    )
  }

  callMe =()=>{
    const url = 'whatsapp://send?text=Hello&phone=85211111111'
      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          console.log('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      // <View style={}>
        // <ScrollView>
     
        <View style={styles.container}>
          <Image source={require('./facebook-logo.png')} style={styles.logo}/>
          <TextInput
            style={styles.textField}
            onChangeText={(email) => {this.setState({email})}}
             placeholder={'Email Address'}
          />
          <TextInput
            style={styles.textField} secureTextEntry={true}
            onChangeText={(password) => {this.setState({password})}}
            placeholder={'Password'}
          />

          <TouchableOpacity style={{width: '80%', marginTop:10, height: 50}} >
            <Button color="#4254b2" title="Login" onPress={this.onPress}/>
          </TouchableOpacity>

          <Text style={styles.signup}>Signup for Facebook</Text>



        </View>
    


 
         
        // </ScrollView>
        
   
      // </View>
    );
  }
}

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    height: ScreenHeight,
    backgroundColor: '#4267b2',
  },
  logo:{
    width: 193, height: 110,
    marginTop: (ScreenHeight*.2)
  },
  blue:{
    flex: 1, 
    backgroundColor: '#4267b2',
    alignItems: 'center'
  },
  green:{
    flex: 1, 
    backgroundColor: 'green',
    alignItems: 'center'
  },
  textField:{
    width: '80%', height: 50, borderColor: 'gray', borderWidth: 1, margin: 5,
    backgroundColor:'#ffffff',
    borderRadius:5,
    padding:10
  },
  signup:{
    position:'absolute', bottom:ScreenHeight*.1 ,color: 'white', textDecorationLine:'underline', fontSize:18,

  }

});
