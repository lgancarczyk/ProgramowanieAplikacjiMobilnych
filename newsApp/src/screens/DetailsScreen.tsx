import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView, Linking } from "react-native";
import { COLORS } from "../resources/colors";
import '../extensions/stringExtensions';
import hearth from '../resources/images/hearth.png'
import { display } from "../types/display.type";
import { addNews, ifNewsExistInStorage, removeNews } from "../helpers/AsyncStorageHelper";

export default function DetailsScreen(props){

    const [showVisibility, setVisibility] = useState(true);
    const data = props.route.params;

    name()
    async function name() {
        setVisibility(await ifNewsExistInStorage(data))
    }

    const openArticle = () => {
        Linking.openURL(data.url);
	};

    const hearthClick = () => {
        if(showVisibility == true){
            removeNews(data);
            setVisibility(false);
        }
        else{
            addNews(data);
            setVisibility(true);
        }
    };

	return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Pressable style={styles.hearthButton} onPress={hearthClick}>
                        {showVisibility &&<View style={styles.backgroundOfHearth}></View>}
                        <Image style={styles.hearthImage} source={hearth}/>
                    </Pressable>
                </View>
                <Text style={styles.date}>{data.publishedAt}</Text>
                <Image style={styles.image} source={{uri: data.urlToImage}} />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Source: </Text>
                    <Text style={styles.infoContent}>{data.source.name}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Author: </Text>
                    <Text style={styles.infoContent}>{data.author}</Text>
                </View>
                <Text style={styles.description}>{data.description}</Text>
                <Pressable style={styles.button} onPress={openArticle}>
                    <Text style={styles.buttonText}>Go To Page</Text>
                </Pressable>
            </View>
        </ScrollView>
	);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
        width: '100%',
        padding: 10,
    },
    titleContainer:{
        flexDirection:"row"
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        width:'80%'
    },
    hearthButton:{
    },
    hearthImage:{
        height: 70,
        width: 70,
        borderRadius:90,
    },
    backgroundOfHearth:{
        position:'absolute',
        backgroundColor: COLORS.Blue, 
        height:40, 
        width:40,
        borderRadius:90,
        alignSelf:'center',
        marginTop:20,
        display:'flex'
    },
    date:{
        marginTop:30,
        textAlign: 'right'
    },
    image:{
        width:'100%',
        height: 200,
        marginBottom: 20
    },
    description:{
        marginTop: 10,
        fontSize: 18,
        textAlign: 'justify'
    },
    infoContainer:{
        flexDirection:'row',
        marginTop:10
    },
    infoTitle:{
        fontSize:15,
        fontWeight:'bold'
    },
    infoContent:{
        fontSize:15
    },
    button:{
        backgroundColor:COLORS.Blue,
        width:'70%',
        height: 50,
        alignItems:'center',
        alignSelf:"center",
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText:{
        fontSize: 25,
        fontWeight: '500'
    }
})

