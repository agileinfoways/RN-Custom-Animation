/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import { useScreens } from 'react-native-screens';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/HomeScreen';
import FlatList from './src/FlatList';
import RotateView from './src/RotateView';
import SplashAnimation from './src/SplashAnimation';
import ZoomExample from './src/ZoomExample';
import DetailView from './src/DetailView';
import ImagesGrid from './src/ImagesGrid';
import DragMe from './src/DragMe';
import Layout from './src/LayoutTransition';
import Onboarding from './src/Onboarding';
import SharedElements from './src/SharedElements';
import swipeCard from './src/SwipeCard';
import ListAnimation from './src/ShowList';
import Listing from './src/Listing';
import LoginDemo from './src/LoginDemo';
import TabAnimation from './src/TabAnimation';
import CardAnimation from './src/cardanimation';
import { fromLeft, zoomIn, zoomOut, fromBottom, fromTop } from 'react-navigation-transitions'
import ImageAnimation from './src/imageAnimation';
import ViewAnimation from './src/viewAnimation';
import DragAndDrop from './src/DragAndDrop';

useScreens();

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go there
  if(scenes.routeName === 'CardAnimation'){
    return fromBottom();
  }
  return fromBottom();
  // if (prevScene
  //   && prevScene.route.routeName === 'ScreenA'
  //   && nextScene.route.routeName === 'ScreenB') {
  //   return zoomIn();
  // } else if (prevScene
  //   && prevScene.route.routeName === 'ScreenB'
  //   && nextScene.route.routeName === 'ScreenC') {
  //   return zoomOut();
  // }
  // return fromLeft();
}

const AppNavigator = createStackNavigator({
  
home: {screen: HomeScreen, navigationOption: {title: "Fluid Transitions"}},
flatlist: { screen: FlatList , navigationOption: {title: "List"}},
Detail: {screen: DetailView, navigationOption: {title: "Detail"}},
Rotate: { screen: RotateView , navigationOption: {title: "Rotating View"}},
splash: {screen: SplashAnimation, navigationOption: {title: "AnimateView"}},
zoom: { screen: ZoomExample , navigationOption: {title: "Zooming"}},
image: { screen: ImagesGrid , navigationOption: {title: "GridImages"}},
Drag: { screen: DragMe , navigationOption: {title: "Touch & Drag"}},
Layout: { screen: Layout , navigationOption: {title: "Touch & Drag"}},
shared: { screen: SharedElements },
onboard: {screen: Onboarding },
swipeCard: {screen: swipeCard,navigationOption: {title: "SwipeCard"}},
AnimatedList:{screen: ListAnimation,navigationOption: {title: "List"}},
//Login:{screen: LoginDemo, navigationOption: {title: "LogIn"}},
Login:{screen: LoginDemo, navigationOption: {title: "LogIn"}},
Listing:{screen: Listing, navigationOption: {title: "Listing"}},
CardAnimation:{screen: CardAnimation},
ImageAnimation:{screen:ImageAnimation},
ViewAnimation:{screen:ViewAnimation},
 DragAndDrop:{screen:DragAndDrop}
},{
  transitionConfig: (nav) => handleCustomTransition(nav)
},

// },
{
  initialRouteName: 'DragAndDrop',
}
);

export default createNavigationContainer(AppNavigator);
