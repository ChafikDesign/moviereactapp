import React, {useState} from 'react';
import {Button, View, TextInput, StyleSheet, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const Search = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const onChangeText = (text) => {
        setIsDisabled(text === '')
        props.handleSearch(text);
    }

    return (

        <View>       
            <Image style={styles.immagine} source={{uri:'http://s3.amazonaws.com/wboc-digital/production/sites/wboc/wp-content/uploads/2016/07/05171206/Movie-Club-logo.png'}}></Image>
        <View style={styles.main_container}>
            
            <View style={styles.input_container}>
            <Ionicons name="search" size={32} color="#B00020" />
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    placeholderTextColor={'#B00020'}
                    onChangeText={onChangeText}
                />
            </View>

            <View  style={styles.button} >
            <Button color="#B5A90F"  disabled={isDisabled} title='Rechercher'  onPress={() => props.handleClickButton()}/>
            </View>
        </View>
        </View>

    )
}

const styles = StyleSheet.create({
    main_container: {
        padding: 30,
        backgroundColor: '#B00020',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    input_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    
    picto: {
        width: 25,
        height: 25
    },
    textinput: {
        height: 50,
        paddingLeft: 10,
        color: '#B00020'

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

    button: {
        left: '50%',
        width: '50%'
    }
})
