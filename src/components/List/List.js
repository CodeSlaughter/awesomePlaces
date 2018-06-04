import React from 'react';
import ListItem from '../ListItem/ListItem'
import { View, StyleSheet } from 'react-native';

 const List = (props) => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place} />
      ) 
    )
  return (
    <View style={styles.listContainer}>
        {placesOutput}
    </View>
  )
}

const styles = StyleSheet.create({
    listContainer :{
      width: "100%"
    }
  });

export default List;