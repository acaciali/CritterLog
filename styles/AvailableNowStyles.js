import { StyleSheet } from "react-native";
import {
    useFonts,
    Cutive_400Regular,
  } from '@expo-google-fonts/cutive'
  

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 50
    },
    flatList: {
        height: 300,
        backgroundColor: '#f9ecc2',
        flexGrow: 0
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    bugRow: {
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexShrink: 1,
        flexWrap: 'wrap'
    },
    fish: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 100
    },
    bug: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 60
    },
    fishIcon: {
        height: 50,
        width: 50,
    },
    fishName: {
        fontFamily: 'Cutive_400Regular',
        fontSize: 14,
        paddingTop: 2
    },
    fishData: {
        fontSize: 14,
        fontFamily: 'Cutive_400Regular',
        paddingTop: 3,
        paddingLeft: 10,
    },
    bugData: {
        fontSize: 14,
        fontFamily: 'Cutive_400Regular',
        paddingTop: 3,
        paddingLeft: 10,
        flexShrink: 1
    },
    border: {
        fontFamily: 'Cutive_400Regular',
        flexWrap: 'nowrap',
        color: '#8d7b67'
    }, 
    creatureListHeader: {
        backgroundColor: '#eee0b2',
        justifyContent: 'space-evenly',
        flexDirection: 'row', 
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    
    bodyText: {
        fontSize: 20,
        paddingTop: 20,
        paddingRight: 20,
        fontFamily: 'Cutive_400Regular', 
      },
    
});

export default styles;