import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Header from '../components/Header';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useState } from 'react';



export default function ScreenOrientations() {

  const [getBackgroundColor, setBackgroundColor] = useState('rgba(0, 0, 0, .5)');


  async function padrao() {
    await ScreenOrientation.lockAsync(
     ScreenOrientation.OrientationLock.DEFAULT
    )
    
  }

  async function down() {
    await ScreenOrientation.lockAsync(
     ScreenOrientation.OrientationLock.PORTRAIT_DOWN 
    );
    setBackgroundColor('rgba(0, 255, 0, .5)')
  }

  async function right() {
    await ScreenOrientation.lockAsync(
     ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    setBackgroundColor('rgba(0, 260, 0, .5)')
  }

  async function left() {
    await ScreenOrientation.lockAsync(
     ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    )
  }

  async function other() {
    await ScreenOrientation.lockAsync(
     ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    )
  }


  return (


    <View style={styles.container}>
      <Header />
      <ScrollView style={{backgroundColor: getBackgroundColor()}}/>
      <View style={styles.content}>
        <Text style={styles.contentTextStyle}>Orientação da tela</Text>
        <Button title="Padrão" onPress={padrao} />
        <Button title="down" onPress={down} />
        <Button title="Right" onPress={right} />
        <Button title="left" onPress={left} />
        <Button title="other" onPress={other} />

      </View>
    </View>
  )
};




export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#9BDEB8"

    },

});