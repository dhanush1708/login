import React, { useState } from 'react'
import { View, Alert, Image } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import styles from './styles.js'
import validateUsername from "./validateUsername.js"
import validatePassword from './validatePassword.js'


const SignUp = ({ navigation }) => {
    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [Uerror, setUerror] = useState("");
    const [Perror, setPerror] = useState("");
    const goBacktoHomeScreen = () => {
        navigation.navigate('Home');
        setSignUpPassword("");
        setSignUpUsername("");
    }
    const signMeUp = () => {
        let userDetails = {
            username: signUpUsername,
            password: signUpPassword,
        }
        let blankFlag = false;
        if (userDetails.username != "" && userDetails.password != "") {
            blankFlag = true;
        }
        if (!Uerror && !Perror && blankFlag) {//fetch
            fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            })
                .then(res => { return res.text() })
                .then(res => {
                    switch (res) {
                        case "0":
                            Alert.alert("Error", "Username already exists, use a different one", [{ text: "Okay" }])
                            break;
                        case "1":
                            Alert.alert("Success!", "Account succesfully created", [{ text: "Okay" }]);
                            navigation.navigate("Home")
                            break;
                        default:
                            Alert.alert("Error", "Bad error,contact your admin", [{ text: "Okay" }])
                            break;
                    }
                })
        }

    }

    const onChangeUsername = (username) => {
        setSignUpUsername(username);
        setUerror(validateUsername(username));
    }
    const onChangePassword = (password) => {
        setSignUpPassword(password);
        setPerror(validatePassword(password));
    }
    return (
        <View >
            <Text style={styles.welcomeText}>Sign Up</Text>
            <View style={{ paddingTop: 100 }}>
                <TextInput onChangeText={onChangeUsername} mode='outlined' label="Username" error={Uerror} value={signUpUsername} />
                <Text style={{ color: "red" }}>{Uerror}</Text>
                <TextInput secureTextEntry={true} onChangeText={onChangePassword} mode='outlined' label="Password" error={Perror} value={signUpPassword} />
                <Text style={{ color: "red" }}>{Perror}</Text>
            </View>
            <View>
                <Button mode='outlined' color={"black"} onPress={signMeUp} style={styles.buttonSignup}>
                    Sign me Up
            </Button>

                <Button mode="outlined" color={"black"} onPress={goBacktoHomeScreen} style={styles.buttonLogin} >
                    Go back to login
            </Button>
            </View>

        </View >

    )
}

export default SignUp
