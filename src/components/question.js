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

export default class Question extends Component {
  constructor(props) {
    super(props);
  }


  getQuestion(number){
    switch(number){
      case 0: {
        return {
            options: [
              'teste', 'teste2', 'teste3'
            ],
            rightAnswer: 'teste'
        }
      }
      case 1: {
        return {
          options: [
            'novoTeste', 'novoTeste2', 'novoTeste3'
          ],
          rightAnswer: 'teste2'
        }
      }
      case 2: {
        return {
          options: [
            'isabella', 'tchago', 'amora'
          ],
          rightAnswer: 'tchago'
        }
      }
      default: {
        return {}
      }

    }
  }


  render() {
    const { number, confirmAnswer } = this.props;
    console.log(this.props);
    const question = this.getQuestion(number);

    console.log(question);

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {question.options.map(option =>
          <TouchableOpacity key={option} onPress={() => confirmAnswer(option === question.rightAnswer)} style={styles.button}>
            <Text>{option}</Text>
          </TouchableOpacity>
       )}
      </View>
    );
  }
}
