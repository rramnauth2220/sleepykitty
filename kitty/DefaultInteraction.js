import React from 'react';      // -*- js-jsx -*-
import { StyleSheet, KeyboardAvoidingView, Text, TextInput, Button, View } from 'react-native';
import _ from 'lodash';

export default class BasicInteractionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState = {clickCount: 0, userName: ""}
  }

  incrementCounter() {
    this.setState(previous => {
      return {...previous, clickCount: previous.clickCount + 1}
    });
  }

  setName(name) {
    this.setState(previous => {
      return {...previous, userName: name}
    })
  }

  resetAll() {
    this.setState(previous => {
      return this.initialState
    });
  }

  render() {
    const plural = this.state.clickCount == 1? "" : "s"
    const trimmedName = this.state.userName.trim() // Remove leading/trailing spaces
    const name = trimmedName? trimmedName : "world"
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView keyboardVerticalOffset={50} behavior="padding">
          <TextInput maxLength={24} placeholder="Your name"
                     style={{width: "100%", height: 40}}
                     value={this.state.userName}
                     onChangeText={text => this.setName(text)}/>

          <Text style={{marginTop: 20, marginBottom: 20}}>
            Hello, {name}. You pressed {this.state.clickCount} time{plural}.
          </Text>

          <Button title="Press me" color="#841584"
                  onPress={() => this.incrementCounter()} />

            <View style={{height: 20}}/>

            <Button title="Reset" color="#848415"
                    disabled={_.isEqual(this.state, this.initialState)}
                    onPress={() => this.resetAll()} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
