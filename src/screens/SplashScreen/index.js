import React,{useEffect} from 'react'
import {View,StyleSheet,StatusBar} from 'react-native'
import {LogBox} from "react-native";

import * as Lottie  from 'lottie-react-native'

export function SplashScreen({navigation}){

  

    LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
    ])

     useEffect(()=> {
       setTimeout(()=> {
           navigation.navigate('Routes')
       },3000)

     },[])


  return (
    <View style={styles.Container}>
      <StatusBar barStyle='dark-content' translucent backgroundColor='#E5E5E5'/>
        <Lottie.default
          source={require('../../LottieFilles/Task-Animation.json')}
          autoPlay
          loop
          style={{
            width: '70%',
          }}
        />

    </View>
  );
}

const styles =  StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E5E5E5'
    }
})