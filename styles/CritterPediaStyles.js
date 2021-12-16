import { StyleSheet } from 'react-native';
import {
    useFonts,
    Cutive_400Regular,
  } from '@expo-google-fonts/cutive'

  const styles = StyleSheet.create({
    creature: {
        height: 50,
        width: 50,
        margin: 5
    },
    creaturePressed: {
        height: 50,
        width: 50,
        margin: 5,
        tintColor: '#938E71',
        opacity: 0.75
        
    },
    container: {
        marginLeft: 30, 
        marginRight: 30,
        paddingRight: 20,
        marginBottom: 80,
        backgroundColor: '#F9F1CA',
        borderWidth: 1,
        borderColor: '#8A7965',
        borderRadius: 15,
        height: 300
    }
  }); 
  
  export default styles; 