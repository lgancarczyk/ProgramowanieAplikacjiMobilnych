import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import megaphone from "../resources/images/megaphone.png"; 
import { COLORS } from '../resources/colors';

export default function HeaderComponent(props: any){
    return(
        <View style={styles.header}>
            <Image source={megaphone} style={{width: 35, height:35}} />
            <View>
                <Text style={styles.text}>{props.headerDisplay}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        alignItems:'center',
        backgroundColor: COLORS.ProcessCyan,

    },
    text:{
        fontFamily: 'OpenSans',
        fontSize:30,
        fontWeight: '700',
        marginLeft:10
    }
});