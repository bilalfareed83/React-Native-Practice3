import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    text: '',
    todos: [],
  };

  add = () => {
    const margedArray = [...this.state.todos, this.state.text];
    this.setState({ todos: margedArray, text: '' });
  };

  del = () => {};

  render() {
    console.log(this.state.todos);
    return (
      <View style={styles.container}>
        <Text>Todos App</Text>
        <TextInput
          placeholder="Add Todos"
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
        />
        <Button title="Add todo" onPress={this.add} />

        {this.state.todos.map((el, i) => {
          return (
            <Text
              key={i}
              onPress={() => {
                this.state.todos.splice(i, 1);
                this.setState({ todos: this.state.todos });
              }}
            >
              {el}
            </Text>
          );
        })}
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
