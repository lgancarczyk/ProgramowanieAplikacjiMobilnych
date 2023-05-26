import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { navigationRef } from './src/RootNavigation';
import MyTabs from './src/components/MyTabs';
import HeaderComponent from './src/components/HeaderComponent';
import DetailsScreen from './src/screens/DetailsScreen'
import { COLORS } from './src/resources/colors';

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
      'OpenSans': require('./src/resources/fonts/OpenSans-Regular.ttf'),
      'ComicSans': require('./src/resources/fonts/ComicSans.ttf')
    })

  if(!fontsLoaded){
    return <AppLoading />;
  }
  else{
    return (
      <SafeAreaView style={{ flex:1, backgroundColor: COLORS.Blue }}>
        <Index />
      </SafeAreaView>
    );
  }
}

function Index(){
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./src/resources/fonts/OpenSans-Regular.ttf'),
    'ComicSans': require('./src/resources/fonts/ComicSans.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading />;
  }
  else{
    return (
      <NavigationContainer ref={navigationRef}>
        <HeaderComponent headerDisplay='NEWS ALLERT'/>
          <Stack.Navigator>
            <Stack.Screen name="HomePage" component={MyTabs} options={{headerShown: false}} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainer:{
      backgroundColor: COLORS.ProcessCyan,
  },
  icon:{
    height: 40,
    width: 40
  }
});