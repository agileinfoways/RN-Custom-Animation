import React, { Component } from 'react';
import {
StyleSheet,
View,
FlatList,
TouchableOpacity,
Text,
SafeAreaView,
Image,
Animated
} from 'react-native';

export default class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.delayValue = 1500;
        this.state = {
          animatedValue: new Animated.Value(0),
          data:[1, 2, 3, 4, 5],
          currentIndex:0
        }
      }

componentDidMount = () => {
  
}
_renderItem = ({index}) => {
  
    Animated.timing(this.state.animatedValue, {
        toValue: 1,
        //tension: 20,
        duration:1000,
        useNativeDriver: true,
        // delay: this.state.currentIndex * 2000
      }).start()

  this.delayValue = this.delayValue + 1000;
  const translateX = this.state.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [(index * -59), 0]
  });

  return (

  
    <Animated.View
      style={[styles.button, {opacity: this.state.animatedValue, transform: [{ translateY: translateX }] }]}
    >
      <View
        style={styles.imageContainer}
      >
        <Image
          source={require('../android/app/src/main/res/drawable/download1.jpeg')}
          style={styles.image}
        />
      </View>
    <View
      style={styles.insideStyle}
    >
      <Text style={{ fontWeight: 'bold' }}>Hello</Text>
      <Text>Test</Text>
    </View>
   </Animated.View>
  )
}
render() {
  const { data } = this.state;
  return (
    <SafeAreaView style={styles.container}>
     <FlatList
       keyExtractor={this._keyExtractor}
       data={data}
       renderItem={this._renderItem}
     />
    </SafeAreaView>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'gray'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    margin: 15,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  insideStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    height:50,
    margin:20
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    margin: 20
  }
});
