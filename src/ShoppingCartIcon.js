import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'

class ShoppingCartIcon extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
        <Text>{ this.props.cartItems.length }</Text>
        <Text>
          <Icons onPress={() => this.props.navigation.navigate('Cart')} name="ios-cart" size = {30}/>
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));