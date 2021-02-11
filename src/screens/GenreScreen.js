import React, {useState, useEffect} from 'react';
import {View, Dimensions, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image, Text, FlatList} from "react-native";
import {getGenre} from "../services/movie";
import {GenreItem} from "../components/GenreItem";
const DeviceWidth = Dimensions.get('window').width

export const GenreScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [films, setFilms] = useState([])
    

    useEffect(() => {
        setIsLoading(true);
        getGenre().then(data => {
            setIsLoading(false);
            setFilms(data.genres);

        })
    }, [])

    
 return (
        <SafeAreaView style={styles.main_container}>
         <ScrollView>        
                        <Image style={styles.immagine} source={{uri:'http://s3.amazonaws.com/wboc-digital/production/sites/wboc/wp-content/uploads/2016/07/05171206/Movie-Club-logo.png'}}></Image>              
            <FlatList
             numColumns={2}
                    data={films}
                    renderItem={({item, index}) => <GenreItem film={item} index={index} goToDetail={() => props.navigation.navigate( 'Genre' , {title: item.title, id: item.id})} />}
                    keyExtractor={item => item.id.toString()}
                />

      
      
      </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    lista: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
      },

    main_container: {
        backgroundColor: "#f4f4f4",
        flex: 1,
        paddingHorizontal: 50,
        justifyContent:'space-between'    },

    immagine: {
        width: 170,
        height: 170,
        alignSelf: 'center',
        borderColor: '#B00020',
        borderWidth: 10,
        borderRadius: 100,
        marginTop: 40,
        marginBottom: 20
    },

    pulsante: { 
      flex: 0.5,
        justifyContent: 'center',
        textAlign: 'center',
        width: DeviceWidth*0.4, 
        height: DeviceWidth*0.2, 
        marginBottom:3, 
        marginTop: 10 ,
        marginLeft: 10, 
        backgroundColor: '#ffffff',
        shadowColor: "#B00020",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.22,
        
        elevation: 3
    },
    testi: {
     color: '#B00020',
     fontWeight: 'bold',
     fontSize: 17,
     }

})
