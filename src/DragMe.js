import React, { Component } from 'react';
import {View, Text, StyleSheet, Animated, PanResponder, Dimensions} from "react-native";


class DragMe extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            pan     : new Animated.ValueXY(),
            scale     : new Animated.Value(1)   //Step 1
        };
    

        this.panResponder = PanResponder.create({    //Step 2
            onStartShouldSetPanResponder : () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
//             onPanResponderGrant:(e, gesture) => {
// this.state.pan.setOffset({
//     x: this.state.pan.x._Value,
//     y: this.state.pan.y._Value
// });
// this.state.pan.setValue({x:0, y: 0 });
// Animated.spring(this.state.scale,{
//     toValue: 1.3, friction : 3
// }).start();
//             },

            onPanResponderMove           : Animated.event([null,{ //Step 3
                dx : this.state.pan.x,
                dy : this.state.pan.y,
                toValue: 1.3,
                friction: 3
            }]),
            onPanResponderRelease        : (e, gesture) => {

                // this.state.pan.flattenOffset();
                Animated.spring(
                    this.state.scale,{
                        toValue: 1, friction: 3
                    }).start();
                
            } //Step 4
        });
    }

    

renderDraggable(){
    return (
        <View style={styles.draggableContainer}>
            <Animated.View 
                {...this.panResponder.panHandlers}                       //Step 1
                style={[this.state.pan.getLayout(), styles.circle]}>     
                <Text style={styles.text}>Drag me!</Text>
            </Animated.View>
        </View>
    );
}

    render(){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.dropZone}>
                    <Text style={styles.text}>Drop me here!</Text>
                </View>

                {this.renderDraggable()}
            </View>
        );
    }

    
}
let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    dropZone    : {
        height         : Dimensions.get("window").height,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});
export default (DragMe);