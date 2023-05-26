import * as React from 'react';
import { View, Image, Pressable } from 'react-native';
import hearth from "../resources/images/hearth.png"; 
import home from "../resources/images/home.png"; 
import alarm from "../resources/images/alarm.png"; 
import { COLORS } from '../resources/colors';

const TabBarButton = props =>{
    const {onPress, route, accessibilityState} = props;
    let focused = accessibilityState.selected;
    let icon;
    let size = focused? 50 : 40;
    switch(route.name){
        case 'Allerts':
            icon = <Image style={{width: size, height: size}} source={alarm} />;
            break;
        case 'Home':
            icon = <Image style={{width: size, height: size}} source={home} />;
            break;
        case 'Saved':
            icon = <Image style={{width: size, height: size}} source={hearth} />;
            break;
        default:
            break;
    }
    return(
        <Pressable {...props} onPress={onPress}>
            <View style={{ flex:1,justifyContent:'center', alignItems:'center', backgroundColor:COLORS.Blue, borderRadius:30, position:'absolute', width:90, padding:3}}>
                {icon}
            </View>
        </Pressable>
    )
}

export default TabBarButton;