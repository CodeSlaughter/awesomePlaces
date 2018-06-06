import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import List from './src/components/List/List';
import InputContainer from './src/components/InputContainer/InputContainer'

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
        <InputContainer 
        placeName={this.state.placeName}
        placeNameChangeHandler={this.placeNameChangeHandler} placeSubmitHandler={this.placeSubmitHandler}/>
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
  }
});
