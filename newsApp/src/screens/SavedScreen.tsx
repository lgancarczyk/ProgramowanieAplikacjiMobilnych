import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableWithoutFeedback, ImageBackground, Button, Alert } from "react-native";
import NewsPreviewComponent from "../components/NewsPreviewComponent";
import { COLORS } from "../resources/colors";
import '../extensions/stringExtensions';
import { getData } from "../helpers/AsyncStorageHelper";
import empty from "../resources/images/empty.png"; 

export default function SavedScreen(props){

	const [dataLoading, finishLoading] = useState(true);
	const [noData, setNoData] = useState(true);
    const [newsData, setData] = useState([]);  

	React.useEffect(() => {
        const focusHandler = props.navigation.addListener('focus', () => {
            name()
        });
        return focusHandler;
    }, [props.navigation]);

    async function name() {
        const savedNews:any = await getData('news');
		if ((savedNews == null || undefined) || savedNews.length == 0) {
			setNoData(true);
		}
		else{
			setNoData(false);
		}
		setData(savedNews);
		finishLoading(false);
    }

    useEffect(() => {
		name()
    }, []);

    return(
        <View style={styles.container}>
			{noData &&
				<View style={styles.emptyContainer}>
					<Image style={styles.emptyImage} source={empty}/>
					<Text style={styles.emptyText}>Currently you have no saved news to display</Text>
				</View>
			}

            {dataLoading ? <ActivityIndicator />: (
                <FlatList
                    style={{width:'100%'}}
                    data={newsData}
                    renderItem={({item}) => (<NewsPreviewComponent data={item}/>)} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.White,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
		height:'100%'
    },
	emptyContainer:{
		alignItems:'center',
		justifyContent:'center',
		marginTop:100,
	},
	emptyText:{
		fontSize:20,
		fontWeight:'500'
	},
	emptyImage:{
		height:150,
		width:150
	}
})