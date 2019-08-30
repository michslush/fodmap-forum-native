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
    const { redirectToResults } = this.state;

    if (redirectToResults) {
      // make call to reducer with thunk
    }
  }

  handleChange = text => {
    this.setState({ text });
  };

  handlePress = evt => {
    evt.preventDefault();
    this.setState({
      redirectToResults: true,
    });
  };

  render() {
    if (this.state.redirectToResults) {
      return (
        <View style={styles.view}>
          <Text style={styles.searchResultsText}>
            Will show restaurant results for search value:
          </Text>
          <Text>{this.state.text}</Text>
        </View>
      );
    }

    return (
      <View style={styles.view}>
        <Text style={styles.text}>Find restaurants by location</Text>
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
    padding: 20,
  },
  textInput: {
    height: 50,
  },
  text: {
    padding: 10,
    fontSize: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default SearchScreen;
