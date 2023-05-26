import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableWithoutFeedback, ImageBackground, RefreshControl } from "react-native";
import NewsPreviewComponent from "../components/NewsPreviewComponent";
import { COLORS } from "../resources/colors";
import '../extensions/stringExtensions';

export default function AllertsScreen(props){
    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);  
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=warning&apiKey=8881d6d599814b07a4eb9805e477fee3')
            .then((response) => response.json())
            .then((json) => setData(json.articles))
            .catch((error) => console.error(error))
            .finally(() => finishLoading(false));
    }, []);

    return(
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator />: (
                <FlatList
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    data={newsData}
                    renderItem={({item}) => (<NewsPreviewComponent data={item}/>)} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
    }
})


