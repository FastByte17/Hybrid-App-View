import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Plants from './plants'

export default class plantView extends Component {
    constructor(props) {

        super(props);
        this.state = {
            plants: [],
            plantsDisplayed: [],
            text: ''
        }
    }

    setPlantsDisplayed(value) {
        console.log(value)
        this.setState({ plantsDisplayed: value })
    }

    setText(value) {
        this.setState({ text:value })
        this.setPlantsDisplayed(this.state.plants.filter(i => i.plantInfo.name == this.state.text || i.plantInfo.location == this.state.text || i.plant.price == this.state.text || i.seller.name == this.state.text))
        if (this.state.text == '' || this.state.text == null) {
            this.setPlantsDisplayed(this.state.plants)
        }
    }

    getPlants() {
        console.log('getting plants');
        fetch('https://apigraded.herokuapp.com/plants', {
            method: 'GET',
            mode: 'cors'
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

        let dp  = this.state.plantsDisplayed
        console.log(this.state.plants);
        return (
            <View style={{ justifyContent: "center", flex: 1, alignItems: 'center', backgroundColor: "#687578" }}>
                 <View style={styles.plantBox}>

                    <Text style={styles.header}>Select a plant</Text>
                    <Button title="Reload" color="#3300F0" onPress={() => this.getPlants()} />
                    
                    
                    <ScrollView>
                        
                         {dp.map(
                             (i )=> 
                             {
                                 console.log(i);
                            return <Plants plant={i} key={this.state.plantsDisplayed.indexOf(i)}/>
                            }
                             )
                        } 
                        
                    </ScrollView>

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
        backgroundColor: '#c29827',
        flex: 1,
        paddingTop: 18
    },
    plantBox: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#687578',
        width: 300
    },
    textbox: {
        borderWidth: 1,
        height: 40,
        width: '80%',
        backgroundColor: '#c29827',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 20
    },
});
