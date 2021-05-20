import React, { Component, useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet } from 'react-native'
import { Base64 } from 'js-base64'



export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:'',
            password:''
        }
    }
    setUserId(value){
        this.setState({userId : value})
    }
    setPassword(value){
        this.setState({password : value})
    }
    
    /*componentDidMount(){
        console.log(this.props)
    }*/
    

    loginPress() {
        fetch('', {
            method: 'GET',
            headers: {
                "Authorization": "Basic " + Base64.encode(this.state.userName + ":" + this.state.password)
            }
        })

        
            .then(response => {
                if (response.ok == false) {
                    throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
                }
                return response.json();
            })
            .then(json => {
                console.log("Logged in successfully")
                console.log("Received following JSON");
                console.log(json);

                this.props.onLoginReceiveJWT(json.token);
            })
            .catch(error => {
                alert('Invalid Credentials')
                console.log("Error message:")
                console.log(error.message)
            });
    }


    render() {
        return (
            <View style={styles.mainBox}>
                <Text style={styles.header}>Login</Text>
                <Text style={styles.text}>Username</Text>
                <TextInput
                    style={styles.textbox}
                    value={this.state.userName}
                    placeholder="your username"
                    onChangeText={value => this.setUserName(value)}
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.textbox}
                    value={this.state.password}
                    placeholder="password"
                    onChangeText={value => this.setPassword( value)}
                />
                <TouchableHighlight onPress={() => this.loginPress(this.props)}>
                    <View style={styles.primaryButton}>
                        <Text style={{ color: 'white', fontSize: 20}}>Login</Text>
                    </View>
                </TouchableHighlight>
                <Text style={styles.text}>or</Text>
                <Button 
                    title="Register" 
                    color="#0077B6" 
                    onPress={() => this.props.navigation.navigate('Register')} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        marginBottom: 20,
        color: 'black'
    },
    mainBox: {
        backgroundColor: '#039200',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'black'
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
    primaryButton: {
        backgroundColor: '#00B4D8',
        height: 60,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 20,
    },

});