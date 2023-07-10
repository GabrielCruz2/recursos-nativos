import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Battery from "expo-battery";



export default function Header({ title }) {


  const [nivelBateria, setNivelBateria] = useState();

  async function atualizarTudo() {
    bateria();
  }

  function corbat(){
    if( nivelBateria < 5 ){
      return 'purple';
    } else if( nivelBateria < 30 ){
      return 'orange';
    } else if( nivelBateria < 60 ){
      return'yellow';
    } else {
      return 'red';
    };
  };

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(Math.round(nivel * 100));
  }

  useEffect(() => {
    bateria()
    corbat()
  }, [nivelBateria])

  return (

    <View style={{backgroundColor: corbat()}}>

        <Text style={styles.headerTextStyle}>

            {title}

        </Text>

    </View>

);




}







const styles = StyleSheet.create({
  header: {
      paddingTop: 30,
      paddingBottom: 5,
      paddingHorizontal: 5,
  },
  headerTextStyle: {
      marginTop: 10,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 35,
      textAlign: 'center'
  },
});