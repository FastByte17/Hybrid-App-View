import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
//import { ScrollView } from 'react-native-gesture-handler'
//import Plant from './plant'

export default class plantView extends Component {
    constructor(props) {

        super(props);
        this.state = {
            plants: [],
            plantsDisplayed: [],
            text: ''
        }
    }

    setPlantsDisplayed(value){
        this.setState({PlantsDisplayed: value})
    }

    setText(value){
        this.setState({text: value})
        this.setPlantsDisplayed(this.state.plants.filter(i => i.plant_info.name == this.state.text || i.plant_info_location == this.state.text || i.plant.price == this.state.textbar))
        if (this.state.text == '' || this.state.text == null){
            this.setPlantsDisplayed(this.state.plants)
        }
    }

    getPlants() {
        console.log('getting plants');
        fetch('https://apigraded.herokuapp.com/plants', {
            method: 'GET',
        })
            .then(response => {
                if (response.ok == false) {
                    throw new Error("HTTP Code " + response.status + JSON.stringify(response.json()));
                }
                return response.json();
            })
            .then(json => {
                console.log("plants were retrieved")
                console.log('json received');
                console.log(json);

                this.setState({ plants: json })
                this.setPlantsDisplayed(this.state.plants)
            })
            .catch(error => {
                console.log("Error:")
                console.log(error.message)
            });

    }

    componentDidMount() {
        this.getPlants()
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#E3620B"}}>
                <View style={styles.plantBox}>
                    
                    <Text style={styles.header}>Select a plant</Text>
                    <Button title="Reload" color="#3300F0" onPress={() => this.getPlants()} />
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
      fontSize: 18,
      marginTop: 20,
      marginBottom: 10,
      color: 'black'
    },
    root: {
      flexDirection: 'column',
      backgroundColor: 'white',
      flex: 1,
      paddingTop: 18
    },
    itemBox: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 20,
      marginBottom: 20,
      alignItems: 'center',
      backgroundColor: '#CAF0F8',
      width: 300
    },
    textbox: {
      borderWidth: 1,
      height: 40,
      width: '80%',
      backgroundColor: 'white',
      textAlign: 'center',
      fontSize: 18,
      marginTop: 5,
      marginBottom: 20
  },
  });
