import React from 'react';
import { StyleSheet, View} from 'react-native';
import List from './src/components/List/List';
import InputContainer from './src/components/InputContainer/InputContainer'

export default class App extends React.Component {
  state = {
    places: []
  };

  placeAddedHandler = (placename) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placename)
      };
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <InputContainer onPlaceAdded={this.placeAddedHandler}/>
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
