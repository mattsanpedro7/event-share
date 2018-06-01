import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
// import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class EnterCode extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      showText: false
    };
  }

  render() {
    console.log(this.state.text);
    
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='Enter Code'
        />
        <Button
          onPress={this._onPressButton}
          title='Submit'
        />
        <Text style={styles.text}>
          {this.state.text}
        </Text>
        {/* <form>
          <label>
            Name:
            <input 
              type="text" 
              value={this.state.text} 
              // onChange={this.setState({text})} 
            />
          </label>
        </form> */}
      </View>
    )
  }
  
  _onPressButton() {
    console.log('hi');
    // this.setState({showText: true})
    // console.log(this.state.showText);
    
  }
  
}

const styles = StyleSheet.create({
  input: {
    height: 70,
    width: 300,
    fontSize: 20,
    textAlign: 'center',
    borderColor: 'black',
    backgroundColor: '#eee',
    borderWidth: 1
  },
  buttonContainer: {
    margin: 20
  },
  text: {
    padding: 10,
    fontSize: 25
  }
})