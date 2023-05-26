import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback, ImageBackground } from "react-native";
import * as RootNavigation from '../RootNavigation';
import { COLORS } from '../resources/colors';

export default function({data}){


    const gotoTestStackScreen = () => {
		//props.navigation.navigate('Details');
        console.log(data);
        RootNavigation.navigate('Details', data);
	};

    return(
        <TouchableWithoutFeedback
            // onPress={() => data.navigate('Details', {url: data.url})} >
            onPress={gotoTestStackScreen} >


            <View style={styles.listings}>
                <ImageBackground source={{uri: data.urlToImage}} resizeMode="cover" style={styles.thumbnail}>
                    <View style={styles.thumbnailContainer}>
                        <Text style={styles.title}>{data.title.shorten(60)}</Text>
                        <Text style={styles.description}>{data.description.shorten(100)}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    listings:{
        height:180,
        width: '100%',
        borderBottomColor: COLORS.Black,
        borderBottomWidth: 1,
        marginBottom: 10,
        backgroundColor: COLORS.Blue
    },
    title:{
        fontSize:20,
        fontWeight: '600',
        color: COLORS.White,
        textShadowRadius:15,
        textShadowColor: COLORS.Black,
    },
    description:{
        fontSize:15,
        color: COLORS.White,
        textShadowRadius:15,
        textShadowColor: COLORS.Black
    },
    thumbnail:{
        width: '100%',
        height: '100%'
    },
    thumbnailContainer:{
        padding: 3,
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between'
    }
})
