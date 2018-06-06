import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

class InputContainer extends Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = event => {
    this.setState({
      placeName: event
    });
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === "") {
      return
    }

    this.props.onPlaceAdded(this.state.placeName)

    this.setState({
        placeName: ''
    })
    
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button
          onPress={this.placeSubmitHandler}
          style={styles.placeButton}
          title="Add"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default InputContainer;
