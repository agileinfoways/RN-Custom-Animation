import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';



const styles = StyleSheet.create({
  container: {
flex: 1,
height: 1500,
width: Dimensions.get("window").width
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

export default (props) => (
  <View style={{flex: 1}}>
  <ScrollView>
  {/* <ItemButton color="#E53935" icon="List" text="LoginDemo" nav={props.navigation} target="Login" /> */}
  <ItemButton color="#E53935" icon="list" text="Listing" nav={props.navigation} target="Listing" />
  <ItemButton color="#E53935" icon="list" text="AnimatedList" nav={props.navigation} target="AnimatedList" />
   <ItemButton color="#E53935" icon="list" text="FlatList" nav={props.navigation} target="flatlist" />
   <ItemButton color="#E53935" icon="list" text="ZoomView" nav={props.navigation} target="zoom" />
   <ItemButton color="#E53935" icon="list" text="DetailImage" nav={props.navigation} target="Detail" />
   <ItemButton color="#E53935" icon="list" text="RotateView" nav={props.navigation} target="Rotate" />
   <ItemButton color="#E53935" icon="list" text="DragMe" nav={props.navigation} target="Drag" />
   <ItemButton color="#E53935" icon="list" text="SplashAnimation" nav={props.navigation} target="splash" />
   <ItemButton color="#E53935" icon="image" text="Image Transitions" nav={props.navigation} target="image" />
   <ItemButton color="#E53935" icon="list" text="Onboarding" nav={props.navigation} target="onboard" />
   <ItemButton color="#E53935" icon="list" text="Shared" nav={props.navigation} target="shared" />
   <ItemButton color="#E53935" icon="list" text="CardAnimation" nav={props.navigation} target="CardAnimation" />
   <ItemButton color="#E53935" icon="image" text="Swipe Card" nav={props.navigation} target="swipeCard" />
   <ItemButton color="#E53935" icon="image" text="Image Animation" nav={props.navigation} target="ImageAnimation" />
   <ItemButton color="#E53935" icon="image" text="View Animation" nav={props.navigation} target="ViewAnimation" />
   <ItemButton color="#E53935" icon="image" text="Drag and Drop Animation" nav={props.navigation} target="DragAndDrop" />

   
   
  </ScrollView>
  </View>
);




