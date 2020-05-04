import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { getData } from '../store/actions/rootAction';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../utils/colors';

function Welcome(props: any) {
    const [name, setName] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const dispatch = useDispatch();
    const submitCustomName = async (random: boolean = false): Promise<any> => {
        if (random) {
            await dispatch(getData('random'));
            props.navigation.navigate('Details', {
                HeaderText: 'random'
            });
            return;
        }
        if (name) {
            if (name.length >= 3) {
                setisLoading(true)
                try {
                    await dispatch(getData(name));
                    setName('')
                    props.navigation.navigate('Details', {
                        HeaderText: name
                    });
                } catch (error) {
                    Alert.alert('Oops!', error.message);
                }
                setisLoading(false)
            }
            else {
                Alert.alert('Oops!', 'keyword must be atleast of 3 character! Please try again!');
            }
            return;
        }
        Alert.alert('Oops!', 'Seems like you have not entered a valid keyword! Please try again!')

    }
    return (
        <LinearGradient colors={colors.gradient} style={styles.screen} testID="welcome-wrapper">
            {isLoading ? <ActivityIndicator size="large" color='grey' /> :
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Hi! Please enter a keyword to search!
                    </Text>
                    <TextInput value={name} onChangeText={(e) => setName(e)} style={styles.input}></TextInput>
                    <View style={styles.btnContainer}>
                        <View style={styles.btn}>
                            <Button title="Submit" color={colors.primary} onPress={() => submitCustomName()} />

                        </View>
                        <View style={styles.btn}>
                            <Button title="Random" color={colors.secondary} onPress={() => submitCustomName(true)} />
                        </View>
                    </View>
                </View>}
        </LinearGradient>
    )

}

Welcome.navigationOptions = {
    headerTitle: 'Home',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.darkAccent
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
        width: "100%",
        color: colors.white,
        fontSize: 18
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        width: 200,
        color:colors.white,
        textAlign: 'center'

    },
    btnContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: "center",
        width: '100%'
    },
    btn: {
        width: 100,
        borderRadius: 15,
        overflow: "hidden",
        marginHorizontal: 10
    }
})

export default Welcome;


