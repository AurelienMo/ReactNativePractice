import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceInput from './src/views/components/PlaceInput/PlaceInput';
import PlaceList from './src/views/components/PlaceList/PlaceList';

type Props = {};
export default class App extends Component<Props> {
    state = {
        places: []
    };

    placeAddedHandler = placeName => {
        this.setState(prevState => {
            return {
                places: prevState.places.concat(placeName)
            };
        })
    };

    placeDeletedHandler = index => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter((place, i) => {
                    return i !== index;
                })
            };
        });
    };
  render() {
    return (
      <View style={styles.container}>
          <PlaceInput onPlaceAdded={this.placeAddedHandler} />
          <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
