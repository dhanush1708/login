import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loginLogo: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginTop: 20,
    },
    welcomeText: {
        fontFamily: 'normal',
        alignSelf: "center",
        fontSize: 40,
        marginTop: 20,
        color: "#5D5D5D",
    },

    form: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: 'yellow',
        marginTop: 30,
    },

    formField: {
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },

    input: {
        borderRadius: 12,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        backgroundColor: '#F0F6FD',
    },


    buttonLogin: {
        flex: 1,
        backgroundColor: "#6AF5AF",//'#09830E',
        borderRadius: 30,
        justifyContent: "center",
        // alignItems: "center",
        // width: 200,
        marginLeft: 70,
        marginRight: 70,
        marginBottom: 20,
        marginTop: 20,

    },
    buttonSignup: {
        flex: 1,
        backgroundColor: "#FF8E90", //'#B32121',
        borderRadius: 30,
        justifyContent: "center",
        // alignItems: "center",
        // width: 200,
        marginLeft: 70,
        marginRight: 70,
        marginBottom: 150,


    },

    buttonText: {
        fontSize: 20,
        color: 'black',
    },
    unnecessary: {
        flex: 1,
        // backgroundColor: 'pink',
    }


})