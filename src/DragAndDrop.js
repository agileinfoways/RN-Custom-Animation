import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated } from "react-native";

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      dropableHeight:null,
      dropableWidth:null,
      dropableX:null,
      dropableY:null,
      movableHeight:null,
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),
        onPanResponderRelease: (e, gesture) => {
          if (this.isDropArea(gesture)) {
            Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 1000
            }).start(() =>
              this.setState({
                showDraggable: false
              })
            );
          } 
        }
      });
  }

  isDropArea(gesture) {
    // console.log("gesture.moveY=====>"+movableHeight)
    return gesture.moveY > 250;

  }
  onLayout(){

  }
  render() {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, {opacity:this.state.opacity}]}
          />
        </View>
      );
    }
  }
}


export default class DragAndDrop extends Component {

  find_dimesions(layout){
    const {x, y, width, height} = layout;
    console.warn("X =======>"+x);
    console.warn("Y =======>"+y);
    console.warn("width =======>"+width);
    console.warn("height =======>"+height);
    this.setState({dropableHeight:height}) 
    this.setState({movableHeight:height})   
    
    console.warn("dropableHeight =======>"+height);
  }
    render1() {
        return (
          <View style={styles.mainContainer}>
          <View style={styles.ballContainer}>
            <View style={styles.row}>
              <Draggable />
              </View>
            </View>
            <View style={styles.dropZone}>
              <Text style={styles.text}>Drop them here!</Text>
            </View>
            <View style={styles.ballContainer}>
            <View style={styles.row}>
              <Draggable />
              </View>
            </View>
          </View>
        );
      }
  render() {
    return (
      <View style={styles.mainContainer}>
         
       
        <View style={styles.ballContainer}>
        <View style={styles.row}>
          <Draggable />
          <Draggable />
        </View>
        </View>
        <View onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }} style={styles.dropZone}>
          <Text style={styles.text}>Drop them here!</Text>
        </View>
      </View>
    );
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:200
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: 150,
    width:100,
    backgroundColor: "#00334d",
    alignSelf:'center'
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});