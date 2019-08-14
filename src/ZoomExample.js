import React, { Component } from 'react'
import { View, StyleSheet, Animated, TouchableOpacity, Dimensions, Image, back, Button, Text} from 'react-native'


const deviceHeight = Dimensions.get("window").height
const deviceWidth = Dimensions.get("window").width
class ZoomExample extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
   componentWillMount = () => {
      this.animatedWidth = new Animated.Value(50)
      this.animatedHeight = new Animated.Value(100)
   }
   animatedBox = () => {
      Animated.spring(this.animatedWidth, {
         toValue: deviceWidth,
         duration: 4000,
         stiffness:200,
         backgroundColor:'red'

      }).start()
      Animated.spring(this.animatedHeight, {
         toValue: deviceHeight,
         duration: 4000,
         stiffness:200,
         backgroundColor:'red'
         
      }).start()
   }
   render() {
      const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
      return (
         <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
             <Animated.Image style={[styles.boxImage, animatedStyle]} source={{uri: "http://gogotaxiapps.com:7025/uploads/logo/gogo_logo_link.JPG"}}>
            </Animated.Image>

             {/* <Animated.Text style={[styles.boxButton, animatedStyle]}>
            Press Me</Animated.Text> */}
   
         </TouchableOpacity>
      )
   }
}
export default ZoomExample

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
  //    alignItems: 'center'
   },
   box: {
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 100,
      justifyContent: 'center',
   },
   boxImage: {
    //backgroundColor: 'blue',
    width: 150,
    height: 300,
    alignSelf:'center',
    justifyContent: 'center',
 },
 boxButton: {
  backgroundColor: 'red',
  width: 300,
  height: 50,
  justifyContent:'center',
  alignItems:'center'
}
})
