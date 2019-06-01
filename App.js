/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from './src/HomeScreen';
import ElectronicsScreen from './src/ElectronicsScreen';
import BooksScreen from './src/BooksScreen';
import ShoppingCartIcon from './src/ShoppingCartIcon';
import { Provider } from 'react-redux';
import store from './store';
import CartScreen from './src/CartScreen';

const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Electronics: {
    screen: ElectronicsScreen
  },
  Books: {
    screen: BooksScreen
  },
  Cart: {
    screen: CartScreen
  }
},
{
  defaultNavigationOptions: {
    headerTitle: 'Shopping App',
    headerRight: (
      <ShoppingCartIcon/>
    )   
  },
}
);

const AppStackNavigator = createAppContainer(StackNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    );
  }
}



