import React from 'react'
import { TextInput, StyleSheet, View, Text, KeyboardAvoidingView, ScrollView, Button } from 'react-native';
import Colors from '../../Constants/Colors';

import { LinearGradient } from 'expo-linear-gradient'

function AuthScreen() {
    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <View style={styles.Container} >
                <LinearGradient color={['#ffedff', '#ffe3ff']} style={styles.gradient}  >
                    <ScrollView>

                        <TextInput
                            placeholder="Email@example.com"
                            keyboardType="email-address"
                            required
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={() => { }}
                        />


                        <TextInput
                            placeholder="Password"
                            keyboardType="default"
                            secureTextEntry
                            required
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={() => { }}
                        />

                        <Button title="LogIn" color={Colors.dark} />
                        <Button title="SignIn" />
                    </ScrollView>
                </LinearGradient>
            </View>
        </KeyboardAvoidingView>
    )
};



const styles = StyleSheet.create({

    Container: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 5,
        elevation: 8,

    },
    inputs: {
        padding: 5,
        marginVertical: 10
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
export default AuthScreen