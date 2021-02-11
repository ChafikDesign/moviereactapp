import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
const DeviceWidth = Dimensions.get('window').width

export const GenreItem = (props) => {
    const {film, goToDetail, screenName} = props;
    return(
        <View style={styles.lista}>

        <View style={styles.pulsante}><TouchableOpacity onPress={goToDetail}>
         <Text style={styles.testi}>{film.name}</Text>
   
         </TouchableOpacity>
         </View>
         </View>
    )
}

const styles = StyleSheet.create({
    lista: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      },

    main_container: {
        backgroundColor: "#f4f4f4",
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-around',
    },

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
