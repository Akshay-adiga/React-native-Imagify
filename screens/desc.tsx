import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../components/card';
import { colors } from '../utils/colors';

function Description(props: any) {
    const imgData = props.route.params.SelectedImg;
    return (
        <LinearGradient colors={colors.gradient} style={styles.screen}>
            <Card style={{ ...styles.imgCard, backgroundColor: imgData.color }}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: imgData.url }} />
                </View>
            </Card>
            <View style={styles.details}>
                <Text style={{ fontSize: 18, fontWeight: '500', width: '100%', textAlign: 'center' }}>{imgData.description ? imgData.description : '-'}</Text>
                <View style={styles.name}>
                    <MaterialIcons name="copyright" size={20} color={colors.black} />
                    <Text style={{ marginLeft: 5, fontSize: 16 }}>{imgData.owner ? imgData.owner : '-'}</Text>
                </View>
            </View>
            <View style={styles.btn}>
                <Button title="Go Home" color={colors.secondary} onPress={() => props.navigation.navigate("Welcome")} />
            </View>
        </LinearGradient>
    )

}

Description.navigationOptions = {
    headerTitle: 'Details',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: colors.darkAccent
    },
    text: {

    },
    btn: {
        width: 150,
        borderRadius: 15,
        overflow: "hidden"
    },
    imgCard: {
        backgroundColor: colors.accent,
        height: 400,
        width: 360,
        margin: 10,
        overflow: "hidden"

    },
    imageContainer: {
        height: "100%",
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    details: {
        width: "90%",
        padding: 12,
        justifyContent: "center",
        alignItems: 'center',
    },
    name: {
        marginTop: 2,
        flexDirection: 'row'
    }
})

export default Description;


