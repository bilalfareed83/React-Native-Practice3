import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Dispaly = (props) => {
  if (props.data === false) {
    return <Text style={styles.text}>Thora Wait ker le bhai</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{props.data.percentage}</Text>
        <Text style={styles.text}>{props.data.result}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Dispaly;
