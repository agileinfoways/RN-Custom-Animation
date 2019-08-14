import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Animated, Easing, PanResponder } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
flex:1
  },
  ball:{
height:100,
width:100,
backgroundColor: 'red'
  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 10,
  },
  button: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#A0A0A0',
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 16,
  },
});

const ItemButton = (props) => (
  <TouchableOpacity onPress={() => props.nav.navigate(props.target)} style={styles.buttonContainer}>
    <View style={styles.button} backgroundColor="#DEDEDE">
      <Icon name={props.icon} size={22} color={props.color} />
      <Text style={styles.buttonText}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

class RotateView extends Component{
  constructor(props){
    super(props)
    this.position = new Animated.ValueXY({x:50,y:50})
    //Animated.panresponder
    Animated.timing(this.position,{
      toValue:{x:100, y:50},
      duration:10000,
      
    }).start()
    
    };
    myRotation(){
      rotate = this.position.x.interpolate({
        inputRange:[0,10],
        outputRange:['0deg', "180deg"]
      })
      return{
        ...this.position.getLayout(),
        transform:[{rotate: rotate}]
      }
    }

    render(){
      return(

        <ScrollView contentContainerStyle={styles.container}>
          <Animated.View style={this.myRotation()}>
            <View style={styles.ball}/>
          </Animated.View>
      </ScrollView>
      );

    }
}
export default (RotateView)




///3D  Card Rotate Demo

// import React from "react";
// import {
//   View, StyleSheet, Dimensions, ImageSourcePropType,
// } from "react-native";
// import { Asset, AppLoading, DangerZone } from "expo";

// import Card from "./components/Card";

// const { Animated } = DangerZone;
// const { Value, call } = Animated;
// const { width } = Dimensions.get("window");

// interface AppState {
//   card?: {
//     front: ImageSourcePropType;
//     back: ImageSourcePropType;
//   }
// }

// export default class App extends React.Component<{}, AppState> {
//   x = new Value(0);

//   state: AppState = {
//     card: null,
//   };

//   async componentDidMount() {
//     const front = require("./assets/front.png");
//     const back = require("./assets/back.png");
//     await Promise.all([
//       Asset.loadAsync(front),
//       Asset.loadAsync(back),
//     ]);
//     this.setState({ card: { front, back } });
//   }

//   render() {
//     const { x } = this;
//     const { card } = this.state;
//     if (!card) {
//       return (<AppLoading />);
//     }
//     return (
//       <View style={styles.container}>
//         <Card front={card.front} back={card.back} {...{ x }} />
//         <Animated.ScrollView
//           style={StyleSheet.absoluteFillObject}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{ width: width * 2 }}
//           scrollEventThrottle={16}
//           onScroll={Animated.event(
//             [
//               {
//                 nativeEvent: {
//                   contentOffset: { x },
//                 },
//               },
//             ],
//           )}
//           horizontal
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
