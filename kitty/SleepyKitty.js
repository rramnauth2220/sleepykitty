// -*- js-jsx -*-
import React from 'react';      
import { StyleSheet, TouchableWithoutFeedback, Image, Text, Button, View } from 'react-native';
import _ from 'lodash';

export default class SleepingKitty extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState = {word: 0, songsofar: "", wordsize: 18}
  }
  
  incrementSong() {
    this.setState(previous => {
		var words = ["Soft ", "kitty, ", "warm ", "kitty, ", "little ball ", "of fur... ", "\nHappy ", "kitty, ", "sleepy ", "kitty... ", "\nPurr, ", "purr, ", "purr.\n\n"]; 
		return {...previous, 
				word: previous.word + 1,
				songsofar: previous.songsofar + words[this.state.word % words.length], 
				wordsize: previous.wordsize * 0.8,}
    });
  }
  
  /* _changeStyle() {
    var  colors = ['#ddd', '#efefef', 'red', '#666', 'rgba(0,0,0,.1)', '#ededed'];
	var backgroundcolors = ['green', 'black', 'orange', 'blue', 'purple', 'pink'];
	var color = colors[Math.floor(Math.random()*colors.length)];
    var backgroundColor = backgroundcolors[Math.floor(Math.random()*backgroundcolors.length)];
    this.setState({
        color: color,
		backgroundColor: backgroundColor,
    })
  }, */

  setName(name) {
    this.setState(previous => {
      return {...previous}
    })
  }

  resetAll() {
    this.setState(previous => {
      return this.initialState
    });
  }

  render() {
    const plural = this.state.clickCount == 1? "" : "s"
    //const trimmedName = this.state.userName.trim() // Remove leading/trailing spaces
    //const name = trimmedName? trimmedName : "world"
    return (
      <View style={styles.container}>
			<TouchableWithoutFeedback onPress={() => this.incrementSong()}>
				<Image source={require('./imgs/kitty2.gif')} style={{flex:1, height: undefined, width: undefined}}/>
			</TouchableWithoutFeedback>
			
			<View style={{height: 20}}/> 
			<Text style={styles.imgContainer}>
				{this.state.songsofar}
			</Text>

			<Button title="Reset" color="#c1d9ff"
				disabled={_.isEqual(this.state, this.initialState)}
				onPress={() => this.resetAll()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FCF0E4',
    justifyContent: 'center',
  },
  imgContainer: {
	  marginTop: 20,
	  marginBottom: 20,
	  fontWeight: 'bold',
	  fontSize: 18,
	  color: '#75aaff',
  }
});
