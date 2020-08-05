import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles.js'

const Dashboard = ({ route, navigation }) => {
    const { username } = route.params;
    return (
        <View>
            <Text style={styles.welcomeText}>Welcome {username}</Text>
        </View>
    )
}

export default Dashboard
