import React, {useLayoutEffect, useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking} from "react-native";
import {getLatest, getMovie, getTrailer} from "../services/movie";

export const DetailScreen = (props) => {
    const {route, navigation} = props;
    const [movie, setMovie] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route && route.params && route.params.title ? route.params.title : 'Dernier film sortit'
        })
    })
    useEffect(() => {
        if (route && route.params && route.params.id) {
            getMovie(route.params.id)
                .then(setMovie)
        } else {
            getLatest()
                .then(setMovie)
        }
    }, [])

    function handlePress() {
        if (movie) {
            Linking.canOpenURL(movie.homepage).then((supported) => {
                if (supported) {
                    Linking.openURL(movie.homepage);
                } else {
                    console.log("Don't know how to open URI: " + movie.homepage);
                }
            });
        }
    }

    if (!movie) {
        return null;
    }

    return (
        <View style={styles.page}>
            <ScrollView>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
                    style={styles.imageBg}
                />
                <View style={styles.movie}>
                    <View style={styles.header}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
                            style={styles.image}
                        />
                        <View style={styles.headerInfo}>
                            <Image source={require('../../assets/images/button_play.png')} style={styles.imagePlay} />
                            <View style={styles.infoarea}>
                            {movie.title !== '' && <Text style={styles.title}>{movie.title}</Text>}
                            {movie.production_companies.length > 0 && <Text style={styles.director}>{movie.production_companies[0].name}</Text>}
                            {movie.runtime !== '' && <Text style={{color: '#B00020'}}>{movie.runtime} Min</Text>}
                            </View>
                        </View>
                    </View>
                    <Text style={styles.overviewTitle}>Synopsis</Text>
                    {movie.overview !== '' && <Text style={styles.overview}>{movie.overview}</Text>}
                </View>
            </ScrollView>
            {movie.homepage !== '' && (
                <View style={styles.footer}>
                    <Button color="#fc6e58" onPress={handlePress} title="WATCH TRAILER" />
                </View>
            )}
        </View>

    )
}

const styles = StyleSheet.create({
    infoarea:  {
    backgroundColor: 'white',
    padding: 10,         
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
},
    title: {
        color: '#B5A90F',
    },
    page: {
        backgroundColor: "#f4f4f4",
        flex: 1,
    },
    imageBg: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        height: 350,
        resizeMode: 'cover',
        width: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 36,
    },
    headerInfo: {
        color: '#B5A90F',
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    image: {
        borderColor: "#ffffff",
        borderRadius: 15,
        borderWidth: 4,
        height: 134,
        marginRight: 15,
        width: 84,
    },
    imagePlay: {
        alignSelf: "flex-end",
        height: 58,
        width: 58,
    },
    director: {
        color: '#B5A90F',
        fontSize: 13,
        fontWeight: "100",
        marginBottom: 10,
    },
    movie: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 120,
        paddingLeft: 18,
        paddingRight: 18,
        top: -35,
        zIndex: 1,
    },
    averageNote: {
        fontWeight: 'bold'
    },
    good_film: {
        color: 'green'
    },
    bad_film: {
        color: 'red',
    },
    overview: {
        color: '#B5A90F',
        lineHeight: 24,
    },
    overviewTitle: {
        color: '#B5A90F',
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
    },
    footer: {
        backgroundColor: "#f4f4f4",
        bottom: 0,
        left: 0,
        paddingBottom: 12,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 12,
        position: "absolute",
        right: 0,
        zIndex: 2
    },
})
