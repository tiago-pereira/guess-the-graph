import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  optionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50
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
            img: require('../../img/question-0.jpg'),
	          options: [
              'Gap', 'Double bottom/top', 'Head and shoulders', 'Triple bottom/top'
            ],
            rightAnswer: 'Gap'
        }
      }
      case 1: {
        return {
          img: require('../../img/question-1.jpg'),
          options: [
            'Saucers', 'Double bottom/top', 'Head and shoulders', 'Triple bottom/top'
          ],
          rightAnswer: 'Head and shoulders'
        }
      }
      case 2: {
        return {
          img: require('../../img/question-2.jpg'),
          options: [
            'Head and shoulders', 'Gap', 'Saucers', 'Triple bottom/top'
          ],
          rightAnswer: 'Triple bottom/top'
        }
      }
      case 3: {
        return {
          img: require('../../img/question-3.jpg'),
          options: [
            'Saucers', 'Double bottom/top', 'Head and shoulders', 'Triple bottom/top'
          ],
          rightAnswer: 'Double bottom/top'
        }
      }
      case 4: {
        return {
          img: require('../../img/question-4.jpg'),
          options: [
            'Saucers', 'Double bottom/top', 'Head and shoulders', 'Triple bottom/top'
          ],
          rightAnswer: 'Saucers'
        }
      }
      default: {
        return {}
      }

    }
  }


  render() {
    const { number, confirmAnswer, points } = this.props;
    console.log(this.props);
    const question = this.getQuestion(number);


    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
        <Text>{'Pontos: '+ points}</Text>

	      <Image style={{width: 300, height: 300}} source={question.img} />
        <View style={styles.optionsContainer}>
          {question.options.map(option =>
            <TouchableOpacity style={styles.option} key={option} onPress={() => confirmAnswer(option === question.rightAnswer)} style={styles.button}>
              <Text>{option}</Text>
            </TouchableOpacity>
         )}
        </View>
      </View>
    );
  }
}
