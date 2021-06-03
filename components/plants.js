import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


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

                        <Text style={{fontWeight: 'bold'}}>{this.props.plant.plantInfo.name}</Text>
                        <Text>Location: {this.props.plant.plantInfo.location}</Text>
                        <Text>Price: {this.props.plant.plantInfo.price}</Text>
                        <Text>Availability: {this.props.plant.plantInfo.availability}</Text>
                        <Text>Seller: {this.props.plant.seller.name}</Text>
                        <Text>Contact: {this.props.plant.seller.phone}</Text>
                        
                        

                    </View>
                </View>
            </>)
        }
    }

    setPlantState(value) {
        this.setState({ plantState: value })
    }

        
    render() {
        return (
            <View  >
                {
                    this.state.output
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    singleplant: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#c29827',
        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid',
        width: 300
    },
    plantimg: {
        width: 90,
        height: 90,
        marginRight: 20,
        borderStyle: 'solid',
        borderRadius: 10
    }
});