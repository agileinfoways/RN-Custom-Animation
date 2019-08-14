// First screen which we will use to send the data
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class ViewAnimation extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Image Animation',
    headerBackTitle: null,
    
  };
 
  render() {
    return (
       <View style={styles.container1}>
       <Animatable.View style={styles.leftView} animation="bounceInLeft" delay={300} ></Animatable.View>
       <Animatable.View style={styles.middleView} animation="fadeInUpBig"></Animatable.View>
       <Animatable.View style={styles.rightView} animation="bounceInRight" delay={300}></Animatable.View>
       </View>
    );
  }
 
}
const styles = StyleSheet.create({
 
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  leftView:{
    backgroundColor: 'blue',
    height:90,
     width:90,
     marginRight:10 
    },
    middleView:{
      backgroundColor: 'red',
      height:90, 
      width:90, },

    rightView:{
      backgroundColor: 'green',
      height:90, 
      width:90, 
      marginLeft:10
    }
  
  
});