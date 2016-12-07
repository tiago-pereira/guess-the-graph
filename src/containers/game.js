'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Question from '../components/question';
import Menu from '../components/menu';
import * as gameActions from '../actions/gameActions';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

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

// @connect(state => ({
//   state: state.counter
// }))
class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    console.log(this.props);

    if (state.inGame) {
      return (
        <Question points={state.points} number={state.questionNumber} confirmAnswer={actions.confirmAnswer}/>
      );
    } else {
      return (
        <Menu startGame={actions.startGame}/>
      );
    }
  }
}

export default connect(state => ({
    state: state.game
  }),
  (dispatch) => ({
    actions: bindActionCreators(gameActions, dispatch)
  })
)(Game);
