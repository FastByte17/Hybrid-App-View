import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';


export default class plants extends Component {

    constructor(props) {

        super(props);
        this.state = {
            plantinit: 0,
            output: (<>
                <View style={styles.singleplant}>
                    <Image
                        style={styles.plantimg}
                        source={{ 
                            uri: 'https://res.cloudinary.com/djpjb7io8/image/upload/v1621478764/cactus.jpg',
                        }}
                        />

                    <View style={{ flex: 1, flexDirection: 'column' }}>

                        <Text>{this.props.plant.plantInfo.name}</Text>
                        <Text>Location: {this.props.plant.plantInfo.location}</Text>
                        <Text>Price: {this.props.plant.plantInfo.price}</Text>
                        
                        

                    </View>
                </View>
            </>)
        }
    }

    setPlantState(value) {
        this.setState({ plantState: value })
    }

    setOutput(value) {
        this.setState({ output: value })
    }

    Output() {

        if (this.state.plantState == 0) {
            this.setOutput(<>
            <View style={styles.singleplant}>
                <Image 
                    style={styles.plantimg}
                    source={{ 
                        uri: 'https://res.cloudinary.com/djpjb7io8/image/upload/v1621478764/cactus.jpg',
                     }}
                />
                <View style={{ flex: 1, flexDirection: 'column'}}>

                     <Text style={{ fontSize: 15, fontWeight: "bold"}}>About:</Text>
                     <Text>{this.props.plant.plantInfo.name}</Text>
                     <Text>Price: {this.props.plant.plantInfo.price}</Text>
                     <Text>Location: {this.props.plant.plantInfo.location}</Text>
                     <Text>Description: {this.props.plant.plantInfo.description}</Text>
                     <Text>Availability: {this.props.plant.plantInfo.availability}</Text>
                     <Text style={{ fontSize:15, fontWeight: "bold" }}>Seller:</Text>
                     <Text>Name: {this.props.plant.seller.name}</Text>
                     <Text>Phone: {this.props.plant.seller.phone}</Text>

                </View>
            </View>
           </> )
           this.setItemState(1)
        }

        else if (this.state.plantState == 1) {
            this.setOutput (<>
                <Views style={styles.singleplant}>
                    <Image
                        style={styles.plantimg}
                        source={{ 
                            uri: 'https://res.cloudinary.com/djpjb7io8/image/upload/v1621478764/cactus.jpg',
                        }}
                    />
                    <View style={{ flex: 1, flexDirection: 'column' }}>

                         <Text>{this.props.plant.plantInfo.name}</Text>
                        <Text>Price: {this.props.plant.plantInfo.price}</Text>
                        <Text>Location: {this.props.plant.planInfo.location}</Text>
                    
                    </View>
                </Views>
            </>)
            this.plantState(0)
        }

    }

    render() {
        return (
            <TouchableHighlight onPress={() => this.Output()} >
                {
                    this.state.output
                }
            </TouchableHighlight>
        )
    }

}

const styles = StyleSheet.create({
    singleplant: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'solid',

        width: 300
    },
    plantimg: {
        width: 40,
        height: 40,
        marginRight: 20
    }
});