import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../components/Colors';

const Login = () => {
    useEffect(() => {
        console.log("Login screen loaded");
    }, []);

    const [anyError, setAnyError] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const submitFunction = () => {
        if (userEmail === '' || userPassword === '') {
            setAnyError(true);
            return;
        }
        setAnyError(false);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
                <View style={styles.container}>
                    <View style={styles.ImageView}>
                        {anyError ?
                            (<Image source={require('../media/Loginlogo2.png')} />) :
                            (<Image source={require('../media/loginlogo1.png')} />)
                        }
                    </View>
                    <Text style={styles.LoginText}>Login Details</Text>
                    <View style={[styles.InputView, anyError && userEmail === '' && styles.errorBorder]}>
                        <TextInput
                            style={styles.InputText}
                            placeholder='Username, email & phone number'
                            placeholderTextColor="black"
                            onChangeText={(text) => setUserEmail(text)}
                            value={userEmail}
                        />
                    </View>
                    {anyError && <Text style={styles.errorText}>Please Enter Valid Email</Text>}
                    <View style={[styles.InputView, anyError && userPassword === '' && styles.errorBorder]}>
                        <TextInput
                            style={styles.InputText}
                            placeholder='Password'
                            placeholderTextColor="black"
                            secureTextEntry
                            onChangeText={(text) => setUserPassword(text)}
                            value={userPassword}
                        />
                    </View>
                    {anyError && <Text style={styles.errorText}>Please Enter Valid Password</Text>}
                    <Text style={styles.ForgetText}>Forgot Password?</Text>

                    <TouchableOpacity onPress={submitFunction} style={[styles.LoginButtonView,anyError && {opacity:0.7}]}>
                        <Text style={styles.LoginButtonText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.SignupWithView}>
                        <Image source={require('../media/angle1.png')} />
                        <Text style={styles.SignUpwithText}>Or Sign up With</Text>
                        <Image source={require('../media/angle2.png')} />
                    </View>

                    <View style={styles.SocialIconsView}>
                        <View style={styles.IconWrapper}>
                            <Image source={require('../media/google.png')} />
                        </View>
                        <View style={[styles.IconWrapper, { marginHorizontal: 10 }]}>
                            <Image source={require('../media/facbook.png')} />
                        </View>
                        <View style={styles.IconWrapper}>
                            <Image source={require('../media/apple.png')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Image style={styles.FooterImage} source={require('../media/Vector.png')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    ImageView: {
        alignItems: "center",
        marginTop: 50,
    },
    LoginText: {
        color: "#000000",
        fontSize: 24,
        fontWeight: "500",
        marginVertical: 20,
    },
    InputView: {
        backgroundColor: "white",
        borderColor: "#887E7E",
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        justifyContent: "center",
        marginBottom: 10,
    },
    InputText: {
        paddingLeft: 8,
    },
    ForgetText: {
        fontSize: 15,
        textAlign: "right",
    },
    LoginButtonView: {
        backgroundColor: Colors.PrimaryColor,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 25,
    },
    LoginButtonText: {
        color: "white",
        fontSize: 23,
        fontWeight: "500",
        textAlign: "center",
    },
    SignupWithView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    SignUpwithText: {
        fontSize: 13,
        color: "#555252",
        paddingHorizontal: 10,
    },
    SocialIconsView: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 25,
    },
    IconWrapper: {
        backgroundColor: "#ECE9EC",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 200,
    },
    FooterImage: {
        position: "absolute",
        width: "100%",
        bottom: 0,
    },
    errorBorder: {
        borderColor: 'red',
    },
    errorText:{
        color:"red",
        marginTop:-10,
    }
});

export default Login;
