/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', redirectToResults: false };
  }

  componentDidMount() {
    console.log('component mounted');
  }

  handleChange = text => {
    this.setState({ text });
  };

  handlePress = evt => {
    evt.preventDefault();
    console.log('handling press');
    this.setState({
      redirectToResults: true,
    });
  };

  render() {
    if (this.state.redirectToResults) {
      return (
        <View>
          <Text>It worked</Text>
          <Text>{this.state.text}</Text>
        </View>
      );
    }

    return (
      <View style={styles.view}>
        <TextInput
          style={styles.textInput}
          placeholder="Type in a [City, State] OR [ZIPCODE]"
          onChangeText={this.handleChange}
          value={this.state.text}
        />
        <TouchableHighlight onPress={this.handlePress} style={styles.button}>
          <Text>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  textInput: {
    height: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 10,
    fontSize: 42,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default SearchScreen;
