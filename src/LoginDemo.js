/*import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Dimensions, Text, TouchableOpacity, Animated } from 'react-native';


export default class LoginDemo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;
   if (this.state.password === "123456") {
    Alert.alert('Credentials', `${username} + ${password}`);

   }else {
    Alert.alert('Credentials', `${username}`);
   }
   
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity onPress={this.onLogin.bind(this)}>
        <Text style={styles.ButtonStyle}>Login</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  input: {
    width: Dimensions.get('window').width - 60,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 11,
    
  },
  ButtonStyle: {
    width: Dimensions.get('window').width - 60,
    height: 50,
    padding: 15,
    borderRadius: 11,
    backgroundColor: 'red',
  //  justifyContent: 'center',
    textAlign: 'center',
  //  alignSelf: 'center'
    
  },
});*/



// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableHighlight,
//   Image,
//   Alert
// } from 'react-native';

// export default class LoginDemo extends Component {

//   constructor(props) {
//     super(props);
//     state = {
//       email   : '',
//       password: '',
//     }
//   }

//   onClickListener = (viewId) => {
//     Alert.alert("Alert", "Button pressed "+viewId);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
//           <TextInput style={styles.inputs}
//               placeholder="Email"
//               keyboardType="email-address"
//               underlineColorAndroid='transparent'
//               onChangeText={(email) => this.setState({email})}/>
//         </View>
        
//         <View style={styles.inputContainer}>
//           <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
//           <TextInput style={styles.inputs}
//               placeholder="Password"
//               secureTextEntry={true}
//               underlineColorAndroid='transparent'
//               onChangeText={(password) => this.setState({password})}/>
//         </View>

//         <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
//           <Text style={styles.loginText}>Login</Text>
//         </TouchableHighlight>

//         <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
//             <Text>Forgot your password?</Text>
//         </TouchableHighlight>

//         <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
//             <Text>Register</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }




import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

import ScreenRecorderManager from 'react-native-screen-recorder'


export default class LoginDemo extends React.Component {
    start() {
      ScreenRecorderManager.start()
    }
    stop() {
      ScreenRecorderManager.stop()
    }
    render() {
      return (
        <View style={styles.container}>
         <Button
            onPress={this.start}
            title="start"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.stop}
            title="stop"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});