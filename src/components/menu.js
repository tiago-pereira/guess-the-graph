import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { startGame } = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={startGame} style={styles.button}>
          <Text>Novo jogo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
