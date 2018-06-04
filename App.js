import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import List from './src/components/List/List';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangeHandler = (event) => {
    this.setState({
      placeName: event
    })
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === "") {
      return
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ""
      };
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            placeholder='An awesome place'
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button 
          onPress={this.placeSubmitHandler}
          style={styles.placeButton}
          title="Add"/>
        </View>
        <List places={this.state.places}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
