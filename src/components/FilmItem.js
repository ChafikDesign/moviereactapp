import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
const DeviceWidth = Dimensions.get('window').width

export const FilmItem = (props) => {
    const {film, goToDetail, screenName} = props;
    return(
        <TouchableOpacity style={styles.main_container} onPress={goToDetail}>
            <View style={styles.main_information_container}>
                <Image source={{uri: `https://image.tmdb.org/t/p/original${film.poster_path}`}} style={styles.image} />
                <View style={styles.content_container}>
                    <View>
                        <Text style={styles.title_text}>{film.title}</Text>
                    </View>
                    <View>
                        <Text style={{color: '#B5A90F'}} >{film.release_date}</Text>
                    </View>
                </View>
                <View style={{top: 50, left: 10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: "#B00020"}}>{film.vote_average}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#f4f4f4',
        width: DeviceWidth*0.95, 
        height: DeviceWidth*0.4, 
        marginBottom:3, 
        marginTop: 10 ,
        marginLeft: 10, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#B00020",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
    },
    content_container: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
    },
    main_information_container: {
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 120,
        margin: 5,
    },
    title_text: {
        color: '#B5A90F',
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    picto: {
        width: 30,
        height: 30,
    }
})
