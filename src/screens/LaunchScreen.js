import React from 'react';
import {Image, View, StyleSheet, Button} from "react-native";

export const LaunchScreen = (props) => {
    const {navigation} = props;
    const handlePressButton = (type) => {
        type === 'search' ?
            navigation.navigate('Recherche', {screen: 'Search'}) :
            navigation.navigate('Latest')
    }
    return (
        <View style={styles.main_container}>
            <Image style={styles.immagine} source={{uri:'http://s3.amazonaws.com/wboc-digital/production/sites/wboc/wp-content/uploads/2016/07/05171206/Movie-Club-logo.png'}}></Image>
            <Button color="#B00020" onPress={() => handlePressButton('search')} title="Recherche..." />

        </View>

    )
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: "#f4f4f4",
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-around',
        justifyItems: 'center'
    },
    immagine: {
        width: 170,
        height: 170,
        left: 50,
        borderColor: '#B00020',
        borderWidth: 10,
        borderRadius: 100

    }

})
