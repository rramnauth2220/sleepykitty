import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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

/* set up text to print, each item in array is new line --- where? 
var txt = new Array(
	"Soft kitty", "warm kitty", "little ball of fur..."
);

function typewriter(){
	var speed = 100; 					// time delay of print out
	var i = 0; 							// start printing array at this position
	var arrlen = txt[0].length;  		// the length of the text array
	var iscroll = 20; 					// start scrolling up at this many lines
	 
	var pos = 0; 						// initialize text position
	var contnts = ''; 					// initialize contents variable
	var iRow; 							// initialize current row
	contnts =  ' ';
	iRow = Math.max(0, i-iscroll);
	var destination = document.getElementById("typedtext");		//Gahhh! Translate this to call onload text object
 
	while ( iRow < i ) {
		contnts += txt[iRow++] + '<br />';
	}
	destination.innerHTML = contnts + txt[i].substring(0, pos) + "_";
	if ( pos++ == arrlen ) {
		pos = 0;
		i++;
	if ( i != txt.length ) {
		arrlen = txt[i].length;
		setTimeout("typewriter()", 500);
		}
	} 
	else {
		setTimeout("typewriter()", speed);
	}
} */