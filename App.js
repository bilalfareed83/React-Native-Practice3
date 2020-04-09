import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    text: 'Loading...',
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res);
      this.setState({ text: res.data[0].name });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Text>React Native Practice</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
