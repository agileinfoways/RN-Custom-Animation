import React from "react";
import { StyleSheet, Text, View, Animated, PanResponder } from "react-native";

class Card extends React.Component {
  rendercard() {
    return this.props.data.map(item => {
      return this.props.renderCards(item);
      
    });
  }

  render(){
    return <View>
{this.rendercard()}
    </View>;
  }
}
export default Card;
