import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EnterCodeForm from './components/enterCodeForm';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <EnterCodeForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
