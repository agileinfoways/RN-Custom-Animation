// First screen which we will use to send the data
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View,Text,  FlatList, Alert, Platform} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

export default class CardAnimation extends Component {
  constructor(props) {
    super(props);
   this.state = { GridViewItems: [
    {key: 'One'},
    {key: 'Two'},
    {key: 'Three'},
    {key: 'Four'},
    {key: 'Five'},
    {key: 'Six'},
    {key: 'Seven'},
    {key: 'Eight'},
    {key: 'Nine'},
    {key: 'Ten'},
  ]}
  
  }
  static navigationOptions = {
    title: 'Card Animation',
    headerBackTitle: null,
  };
 
  
 //CLICK EVENT OF VIEW
 GetGridViewItem (item) {
  Alert.alert(item);
  }

  render() {
    return (
        <View style={styles.MainContainer} animation='bounceInLeft'>
        <ScrollView>
        {/* Apply animation effect using animation property */}
        <Animatable.Text animation="slideInLeft" direction="normal" 
        style={{marginTop:20}}>Food & Drinks</Animatable.Text>

      <Animatable.View animation="fadeInUpBig" direction="normal" delay={500}>
        <FlatList
            horizontal={true}
            data={ this.state.GridViewItems }
            renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
            <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
              </View>
              }
          />
          </Animatable.View>
          <Animatable.Text animation="slideInLeft" direction="normal" style={{marginTop:20}}>TRAVEL TALK</Animatable.Text>

          <Animatable.View animation="fadeInUpBig" direction="normal" delay={500}>
           <FlatList 
            horizontal={true}
            data={ this.state.GridViewItems }
            renderItem={({item}) =><View style={styles.GridViewBlockStyle1}>
            <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
              </View>}
          />
           </Animatable.View>
         <Animatable.Text animation="slideInLeft" direction="normal" style={{marginTop:20}}>FUN & RECREATION</Animatable.Text>

          <Animatable.View animation="fadeInUpBig" direction="normal" delay={500}>
          <FlatList 
            horizontal={true}
            data={ this.state.GridViewItems }
            renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
            <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
              </View>}
          />
           </Animatable.View>
     </ScrollView>
     
  </View>
    );
  }
 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DBDBD6',
  },
  MainContainer :{
 
    justifyContent: 'center',
    flex:1,
    margin: 10,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0
     
    },
     
    GridViewBlockStyle: {
     
      justifyContent: 'center',
      flex:1,
      alignItems: 'center',
      height: 100,
      margin: 5,
      backgroundColor: '#00BCD4',
      width:100
     
    },
     
    GridViewInsideTextItemStyle: {
     
       color: '#fff',
       padding: 10,
       fontSize: 18,
       justifyContent: 'center',
       
     },
     GridViewBlockStyle1: {
     
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: 'blue',
        width:100
       
      },
    
  
});