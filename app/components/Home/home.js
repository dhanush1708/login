import React, { useState } from 'react';
import { View, Alert, TouchableOpacity, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import styles from './styles.js';


import Dashboard from '../Dashboard/dashboard.js'
import SignUp from '../SignUp/SignUp.js'


const Home = ({ navigation }) => {
    //declaring state variables
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    //when the login button is pressed
    const check_login = () => {

        let user_details = {
            username: Username,
            password: Password,
        }

        // if (Username == 'admin' && Password == 'admin') {
        //     navigation.navigate("Dashboard")
        // }
        {//fetch
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(user_details)
            })
                .then(res => { return res.text() })
                .then(res => {
                    switch (res) {
                        case "1":
                            console.log("Logging in.....");
                            navigation.navigate("Dashboard", { username: Username });
                            break;
                        case "0":
                            Alert.alert('Error', 'Check your credentials', [{ text: "Try again" }]);
                            break;
                        default:
                            Alert.alert('Error', "Unable to login, contact the admin", [{ text: "Okay" }])
                            break;
                    }
                });
        }
    };

    const check_signup = () => {
        navigation.navigate("SignUp")
    }

    const button_test = () => {
        console.warn("pressed")
    }


    return (
        <View style={styles.container}>
            <Image style={styles.loginLogo} source={require('./icon.png')} />
            <Text style={styles.welcomeText}>Member Login</Text>
            < View style={styles.form} >
                <View style={styles.formField}>
                    <TextInput
                        style={styles.input}
                        placeholder={"abcdef"}
                        onChangeText={setUsername}
                        label={"Username"}
                    />
                </View>
                <View style={[styles.formField, { paddingBottom: 20 }]}>
                    <TextInput
                        style={styles.input}
                        placeholder={"*****"}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        label={"Password"}
                    />
                </View>


                <View style={styles.unnecessary}>
                    <Button style={styles.buttonLogin} onPress={check_login} color="black">
                        Login
                    </Button>
                    <Button style={styles.buttonSignup} onPress={check_signup} color="black">
                        Sign Up
                    </Button>
                </View>
            </View>
        </View>

    )
}

export default Home;