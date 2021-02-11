import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView, ActivityIndicator} from "react-native";
import {getMovieByGenre} from "../services/movie";
import {FilmItem} from "../components/FilmItem";

export const GenreMovieScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [films, setFilms] = useState([])
    const {route} = props

    useEffect(() => {
        setIsLoading(true);
        if (route && route.params && route.params.id) {
             getMovieByGenre(route.params.id)
             .then(data => {
            setIsLoading(false);
            setFilms(data.results);
            console.log(data.results)

        })
        }}, [])
    
    return (
        <SafeAreaView style={styles.main_container}>
            <View>

                <FlatList
                    data={films}
                    renderItem={({item, index}) => <FilmItem
                        film={item}
                        index={index}
                        goToDetail={() => props.navigation.navigate('Detail', {title: item.title, id: item.id})}
                        screenName={props.route.name}
                    />}
                    keyExtractor={item => item.id.toString()}
                />
                { isLoading ?
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' color={'#000'} />
                    </View>
                    : null
                }
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    loading_container: {
        bottom: 300
    }
})

export default GenreMovieScreen;