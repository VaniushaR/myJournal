/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { RkButton, RkTheme } from 'react-native-ui-kitten';

RkTheme.setType('RkButton', 'dark', {
  container: {
    backgroundColor: 'gray',
    borderRadius: 10
  }
});

// The same because 'container' is default component:
RkTheme.setType('RkButton', 'journal-btn', {
  backgroundColor: 'black',
  borderRadius: 10
});

RkTheme.setType('RkButton', 'icon', {
  fontSize: 24,
  width: 46,
  borderRadius: 25,
  hitSlop: { top: 5, left: 5, bottom: 5, right: 5 }
});

//...

// RkTheme.setType('RkButton', 'faded', {
//   content: {
//     opacity: 0.6
//   }
// });
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>My Journal App</Text>
        <Text style={styles.instructions}>
          To get started Log In with Google
        </Text>
        <RkButton rkType="journal-btn">
          Sign In
          <Image
            style={{ width: 25, height: 25 }}
            source={{
              uri:
                'http://demographicwinter.org/wp-content/uploads/2018/02/filegoogle-g-logo-svg-wikimedia-commons-in-google-g-logo.png'
            }}
          />
        </RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
