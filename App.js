import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import axios from 'axios';
import Dispaly from './component/Display';

export default class App extends React.Component {
  state = {
    firstName: '',
    secondName: '',
    data: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love % Calculator"
            style={{ alignItems: 'center' }}
          />
        </Appbar.Header>

        <TextInput
          label="First Name (Male)"
          value={this.state.firstName}
          onChangeText={(text) => this.setState({ firstName: text })}
        />

        <TextInput
          label="Second Name (Femail)"
          value={this.state.secondName}
          onChangeText={(text) => this.setState({ secondName: text })}
        />

        <Button
          icon="heart"
          mode="contained"
          onPress={() => {
            console.log('submitit function working');
            axios
              .get(
                `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.firstName}&sname=${this.state.secondName}`,
                {
                  method: 'GET',
                  headers: {
                    'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
                    'x-rapidapi-key':
                      '213eb25352msh8b89e792a79e2e9p12ba5ajsneca49718c4f5',
                  },
                }
              )
              .then((response) => {
                this.setState({ data: response.data });
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          style={{ margin: 10 }}
        >
          Click me
        </Button>
        <Dispaly data={this.state.data} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#fff',
  },
});
