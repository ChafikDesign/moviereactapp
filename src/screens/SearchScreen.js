import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList, ActivityIndicator, ScrollView, Image} from "react-native";
import {Search} from "../components/Search";
import {ResultSearch} from "../components/ResultSearch";
import {FilmItem} from "../components/FilmItem";
import {searchMovie} from "../services/movie";

export default class SearchScreen extends React.Component {
    state = {
        searchText: '',
        filmsState: [],
        isLoading: false,
    }
    page;
    totalPages;

    constructor(props) {
        super(props);
        this.page = 0;
        this.totalPages = 0;
    }

    _searchFilms = () => {
        this.page = 0;
        this.totalPages = 0;
        this.setState({filmsState: []});

        this._loadFilms();
    }

    handleSearchText = (text) => {
        this.setState({searchText: text})
    }

    _loadFilms = () => {
        this.setState({isLoading: true})
        searchMovie(this.state.searchText, this.page + 1)
            .then(data => {
                this.page = data.page;
                this.totalPages = data.total_pages;
                this.setState({filmsState: [...this.state.filmsState, ...data.results], isLoading: false});
            })
    }

    _renderResult = () => {
        if (this.state.filmsState.length > 0) {
            return <View>
                <FlatList
                    data={this.state.filmsState}
                    renderItem={({item}) => <FilmItem film={item} goToDetail={() => this.props.navigation.navigate('Detail', {title: item.title, id: item.id})} />}
                    keyExtractor={(item, index) => String(index)}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            this._loadFilms();
                        }
                    }}
                />
            </View>
        }

        return <View style={styles.no_found_container}>
                        <Image style={{ width: 120, height: 100 }}  source={{uri:'https://static.vecteezy.com/system/resources/previews/001/187/513/original/heart-emoji-sad-png.png'}} ></Image>
            <Text style={styles.text_no_result}>Aucun recherche effectuée.</Text></View>
    }

    render() {
        const {searchText} = this.state;
        return (
            <SafeAreaView style={styles.main_container}>
                <ScrollView>
                <Search handleSearch={this.handleSearchText} handleClickButton={this._searchFilms}/>
                {this.state.searchText !== '' ? <ResultSearch textSearched={searchText}/> : null}
                    {this._renderResult()}
                { this.state.isLoading ?
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' color={'#000'} />
                    </View>
                    : null
                }
</ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    result_container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    text_no_result: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B5A90F'
    },
    no_found_container: {
        paddingTop: 100,
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loading_container: {
    bottom: 300
    }
})
