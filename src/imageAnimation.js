// First screen which we will use to send the data
import React, { Component } from 'react';
//import react in our code.
import { Animated,StyleSheet, View, TouchableOpacity, TextInput ,Text, AppRegistry, FlatList, Alert, Platform,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

export default class ImageAnimation extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Image Animation',
    headerBackTitle: null,
    
  };
 
  render() {
   
    return (
    
       <View style={styles.container}>
       <Animatable.Image animation="slideInLeft"  source={{ uri: "landingscreen_graphic" }} style={styles.image1StyleLeft} />
       <Animatable.Image animation="slideInLeft"   source={{ uri: "ImageTop" }} style={styles.image2StyleLeft} />
       <Animatable.Image animation="zoomIn"   source={{ uri: "login_bg" }} style={styles.imageCenter}   />
       <Animatable.Image animation="slideInRight" source={{ uri: "ImageTop" }} style={styles.image1Right}   />
       <Animatable.Image animation="slideInRight"   source={{ uri: "landingscreen_graphic" }} style={styles.image2Right}   />
       </View>
       
      
    );
  }
 
}
const styles = StyleSheet.create({
  container: {
    marginTop:5,
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  container1: {
   // flex: 1,
    marginTop:25,
    flex:1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  image1StyleLeft:{  
    height: 70, 
    width: 70, 
    borderRadius:35, 
    borderColor:'red', 
    borderWidth:1, 
    marginTop:5 , 
    position: 'absolute',
    left:250,
    zIndex: 1, 
},
image2StyleLeft:{ 
   height: 70, 
   width: 70, 
   borderRadius:35, 
   borderColor:'red',
   borderWidth:1, 
   marginTop:5 ,
  position: 'absolute' ,
  left:200,
  zIndex: 2, 
},
imageCenter:{ 
  height: 80,
  width: 80, 
  borderRadius:40, 
  borderColor:'red',
  borderWidth:1, 
  alignSelf: 'center', 
  marginTop:5 ,
  zIndex: 3,
},
image1Right:{
   height: 70, 
   width: 70, 
   borderRadius:35,
   borderColor:'red', 
   borderWidth:1,  
   marginTop:5,
   position: 'absolute',
   right:200 ,
   zIndex: 2, 
   backgroundColor:'red'
  },

   image2Right:{ 
     height: 70, 
     width: 70, 
     borderRadius:35,
    borderColor:'red', 
    borderWidth:1,  
    marginTop:5,
    position: 'absolute',
    right:250 ,
    zIndex: 1, 
  }
  
});