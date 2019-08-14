import React, { Component } from 'react';
import { View, Text, Dimensions, Button, TouchableOpacity, FlatList, Image, StyleSheet, Animated} from 'react-native';
import chunk from 'lodash.chunk';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.5,
  },
  detailsView: {
    padding: 10,
    backgroundColor: '#ECECEC',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    margin: 2,
  },
  header: {
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FA',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
  },
  imageContainer: {
    flexDirection: 'row',
  },
});

class ImagesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.delayValue = 500;
    this.state = {
       animatedValue: new Animated.Value(0),
      items: [],
      index: 0
    };
  }
  // componentDidMount = () => {
  //   Animated.spring(this.state.animatedValue, {
  //     toValue: 1,
  //     tension: 20,
  //     useNativeDriver: true
  //   }).start();
  // }

  componentWillMount() {
    const items = [];
    const size = Dimensions.get('window').width;
    const max = 39;
    const randMax = 100;
    for (let i = 0; i < max; i++) {
      let randomNumber = Math.floor((Math.random() * randMax) + 1);
      const idExists = (e) => e.id === randomNumber;
      while (items.findIndex(idExists) > -1) {
        randomNumber = Math.floor((Math.random() * randMax) + 1);
      }

      items.push({ url: `https://picsum.photos/${size}/${size}?image=${randomNumber}`, id: randomNumber });
    }
    this.setState({ ...this.state, items });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageGrid
          images={this.state.items}
          // imageSelected={(image) => this.props.navigation.navigate('imageDetails', { url: image.url })}
          imageSelected={(image,index) =>  {
            let a = this.state.items;
            let b = this.state.items;

            for(let i = 0; i<a.length; i++){
              if (image === a[i]) {
                b.splice(i,1);
                this.setState({
            items: b, chunkedImages: b
          });
              }
            }
          }}
        />
      </View>);
  }
}

class ImageDetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const uri = navigation.getParam('url', '');
    return (
      <View style={styles.container}>
        <Transition anchor={uri}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
          </View>
        </Transition>
        <View style={styles.imageContainer}>
          <Transition shared={uri}>
            <Image style={styles.detailsImage} source={{ uri }} />
          </Transition>
        </View>
        <Transition anchor={uri}>
          <View style={styles.detailsView}>
            <Text style={styles.text}>{uri}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Back" onPress={() => navigation.goBack()} />
            </View>
          </View>
        </Transition>
      </View>
    );
  }
}

class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this._colCount = 3;
    const { width: windowWidth } = Dimensions.get('window');
    this._margin = 2;
    this._photoSize = (windowWidth - this._margin * this._colCount * 2) / this._colCount;
    this.state = { chunkedImages: chunk(props.images, this._colCount) };
  }

  _colCount

  _photoSize

  _margin

  _chunkedImages

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, chunkedImages: chunk(nextProps.images, this._colCount) });
  }

  render() {
    return (
      <FlatList
        data={this.state.chunkedImages}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem.bind(this)}
      />);
  }

  keyExtractor(item, index) {
    
    return `key_${index}`;
    
  }

  renderItem = ({item}) => {

    // this.delayValue = this.delayValue + 500;
    // const translateX = this.state.animatedValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [this.delayValue, 1]
    // });
    // this.setState({
    //   index: index
    // });

    return (
    
      <View style={[styles.row]}>
        {item.map(this.renderCell.bind(this))}
      </View>
    );
  }

  renderCell(image) {
//     this.animatedValue = new Animated.Value(0),
//     //alert(this.state.index)
//     Animated.timing(this.state.animatedValue, {
//       toValue: 1,
//       //tension: 20,
//       duration:1000,
//     //  useNativeDriver: true,
//       // delay: this.state.currentIndex * 2000
//     }).start()

// this.delayValue = this.delayValue + 1000;
// const translateX = this.animatedValue.interpolate({
//   inputRange: [0, 1],
//   outputRange: [this.delayValue, 0]
//  });
    return (
      <TouchableOpacity onPress={() => this.props.imageSelected(image)} key={image.url}>
        <Animated.View style={styles.cell}>
          <Transition shared={image.url}>
            <Image
              resizeMode="cover"
              source={{ uri: image.url }}
              style={{ width: this._photoSize, height: this._photoSize }}
            />
          </Transition>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const Navigator = FluidNavigator({
  imageList: { screen: ImagesGrid },
  imageDetails: { screen: ImageDetailsScreen },
}, {
  defaultNavigationOptions: {
    gesturesEnabled: true,
  },
});

class ImageTransitions extends React.Component {
  static router = Navigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <Navigator navigation={navigation} />
    );
  }
}
export default ImageTransitions;