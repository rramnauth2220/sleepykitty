// -*- js-jsx -*-
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import BlinkText from './BlinkText';

export default class DefaultImage extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Image source={require('./imgs/cattrans.png')}/>
        <Text> Soft kitty, warm kitty, little ball of fur <Text/>
		<Text> Happy kitty, sleepy kitty, <Text/>
		<BlinkText text='purr ...'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
