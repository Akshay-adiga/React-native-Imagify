import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, Image, Button, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../components/card';
import { getData } from '../store/actions/rootAction';
import { colors } from '../utils/colors';


function Details(props: any) {
    const [pageSize, setpageSize] = useState(1)
    const [loading, setloading] = useState(false)
    const images = useSelector((state: any) => state.app.images);
    const name = props.route.params.HeaderText;
    const dispatch = useDispatch()
    const getImages = async () => {
        await dispatch(getData(name, pageSize, false));
        setloading(false)
    }
    useEffect(() => {
        if (pageSize > 1) {
            getImages()
        }
    }, [pageSize])
    if (images.length === 0) {
        return (
            <LinearGradient colors={colors.gradient} style={styles.screen}>
                <Text style={{color:colors.white, fontSize:16}}>Oops! Looks like your search has no results!</Text>
                <View style={styles.btn}>
                    <Button title="Go Back" color={colors.primary} onPress={() => props.navigation.goBack()} />
                </View>
            </LinearGradient>
        )
    }

    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <LinearGradient colors={colors.gradient} style={styles.screen}>
            <FlatList
                data={images}
                keyExtractor={(item: any) => item.key}
                renderItem={itemData => (
                    <Card style={styles.imgCard}>
                        <TouchableCmp onPress={() => {
                            props.navigation.navigate('Description', {
                                SelectedImg: itemData.item
                            });
                        }}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: itemData.item.url }} />
                            </View>
                        </TouchableCmp>
                    </Card>
                )}
                ListEmptyComponent={<Text>No Images found</Text>}
                onEndReached={() => {
                    setloading(true)
                    setpageSize(pageSize + 1)
                }}
                onEndReachedThreshold={0.5}
                numColumns={2}
            />
            {loading && <ActivityIndicator size="large" color={colors.black} />}
        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: colors.darkAccent
    },
    text: {
        padding: 20
    },
    imgCard: {
        height: 150,
        width: 150,
        margin: 10,
        overflow: "hidden"

    },
    btn: {
        width: 150,
        borderRadius:15,
        overflow:'hidden',
        marginTop: 15
    },
    imageContainer: {
        height: "100%",
        width: '100%',
        backgroundColor: colors.accent
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default Details;