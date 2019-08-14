// Mark :- Spalsh animation 
import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
//import all the components we are going to use

export default class SplashAnimation extends React.Component {
  state = {
    height: new Animated.Value(600), // Initial value for opacity: 0
    width: new Animated.Value(360), // Initial value for opacity: 0
  };
  componentDidMount() {
    Animated.timing(
      this.state.width, // The animated value to drive
      {
        toValue: 360, // Animate to opacity: 1 (opaque)
        duration: 450, // Make it take a while
      }
    ).start(); // Starts the animation
    Animated.timing(
      this.state.height, // The animated value to drive
      {
        toValue: 750, // Animate to opacity: 1 (opaque)
        duration: 10000, // Make it take a while
      }
    ).start(); // Starts the animation
    setTimeout(function() {
      alert('Go to next Screen');
    }, 12000);
  }

  render() {
    let { height } = this.state;
    let { width } = this.state;

    return (
      <View style={styles.MainContainer}>
        <Animated.Image
          source={{
            uri:
              'https://aboutreact.com/wp-content/uploads/2019/04/site_banner_vertical.png',
          }}
          style={{
            width: width,
            height: height,
            position: 'absolute',
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: 48,
            backgroundColor: 'rgba(11, 56, 82, 0.3)',
          }}>
          <Image
            source={{
              uri:
                'https://aboutreact.com/wp-content/uploads/2019/03/1200px-React-icon.svg_.png',
            }}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Text style={{ fontSize: 18, color: 'white' }}>
            Example of Animated Splash Screen
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#2F7ECC',
  },
});