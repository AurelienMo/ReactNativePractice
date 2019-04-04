import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import ListItem from './src/views/components/ListItem/ListItem';

type Props = {};
export default class App extends Component<Props> {
    state = {
        placeName: '',
        places: []
    };

    placeNameChangedHandler = val => {
        this.setState(
            {
                placeName: val,
            }
        )
    };
    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }

        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            }
        })
    };
  render() {
    const placesOutput = this.state.places.map((place, i) => (
        <ListItem key={i} placeName={place}/>
    ));
    return (
      <View style={styles.container}>
          <View style={styles.inputContainer}>
              <TextInput
                  placeholder="An awesome place"
                  value={this.state.placeName}
                  onChangeText={this.placeNameChangedHandler}
                  style={styles.placeInput}
              />
              <Button
                  style={styles.placeButton}
                  title="Add"
                  onPress={this.placeSubmitHandler}
              />
          </View>
          <View>
              {placesOutput}
          </View>
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
  },
  inputContainer: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  placeInput: {
      width: "70%"
  },
  placeButton: {
      width: "30%"
  }
});
