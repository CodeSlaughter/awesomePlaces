import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

class InputContainer extends Component {
  render() {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
          style={styles.placeInput}
          placeholder='An awesome place'
          value={this.props.placeName}
          onChangeText={this.props.placeNameChangeHandler}
        />
        <Button 
        onPress={this.props.placeSubmitHandler}
        style={styles.placeButton}
        title="Add"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    inputContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    placeInput : {
      width: "70%"
    },
    placeButton : {
      width: "30%"
    }
  });

export default InputContainer;