import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView, ActivityIndicator, ScrollView, Image, Text} from "react-native";
import {getTrending} from "../services/movie";
import {FilmItem} from "../components/FilmItem";

export const TrendingScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [films, setFilms] = useState([])

    useEffect(() => {
        setIsLoading(true);
        getTrending().then(data => {
            setIsLoading(false);
            setFilms(data.results);

        })
    }, [])

    return (
        <SafeAreaView style={styles.main_container}>
                     <ScrollView>        
                
                     <View>       
            <Image style={styles.immagine} source={{uri:'http://s3.amazonaws.com/wboc-digital/production/sites/wboc/wp-content/uploads/2016/07/05171206/Movie-Club-logo.png'}}></Image>
        <View style={styles.main_container}>
            
            <View style={styles.titolo_container}>
           <Text style={styles.titolo}>TRENDING MOVIES</Text>
            </View>

        </View>
        </View>
            <View>

                <FlatList
                    data={films}
                    renderItem={({item}) => <FilmItem
                        film={item}
                        goToDetail={() => props.navigation.navigate('TrendingDetail' , {title: item.title, id: item.id})}
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
            </ScrollView>        

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
    },
           
    immagine: {
        width: 170,
        height: 170,
        left: 100,
        borderColor: '#B00020',
        borderWidth: 10,
        borderRadius: 100,
        marginTop: 40,
        marginBottom: 20
    },
  
    titolo_container: {
        padding: 30,
        backgroundColor: '#B00020',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    }, 
    titolo: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    }
})