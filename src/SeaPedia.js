import { FlatList } from "react-native";
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View, SafeAreaView, Pressable, Platform, Image, TouchableHighlight} from 'react-native';
import styles from '../styles/CritterPediaStyles'
import { ScrollView } from "react-native-gesture-handler";

const SeaPedia = props => {
    const [seaCreatures, setSea] = useState([]);
    const [col1, setCol1] = useState([]); 
    const [col2, setCol2] = useState([]); 
    const [col3, setCol3] = useState([]); 
    const [col4, setCol4] = useState([]); 
    const [col5, setCol5] = useState([]); 
    const [col6, setCol6] = useState([]); 
    const [col7, setCol7] = useState([]); 
    const [col8, setCol8] = useState([]); 
    const [isPressed, setIsPressed] = useState([]); 


    const onPress = (item, index) => {
        let sea = col1[item]
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === sea.name)
        if(typeof found === 'undefined') {
            pressed.push(sea)
        }
        else {
            const indexRemove = pressed.findIndex(el => el.name === sea.name);
             console.log("INDEX REMOVE: " + indexRemove)
            if (indexRemove > -1) {
                pressed.splice(index, 1)
            }
        }
        setIsPressed(pressed);
    }

    const onPress2 = (item, index) => {
        let bug = col2[item]
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if(typeof found === 'undefined') {
            pressed.push(bug)
        }
        else {
            const indexRemove = pressed.findIndex(el => el.name === bug.name);
             console.log("INDEX REMOVE: " + indexRemove)
            if (indexRemove > -1) {
                pressed.splice(index, 1)
            }
        }
        setIsPressed(pressed);
    }

    const onPress3 = (item, index) => {
        let bug = col3[item]
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if(typeof found === 'undefined') {
            pressed.push(bug)
        }
        else {
            const indexRemove = pressed.findIndex(el => el.name === bug.name);
             console.log("INDEX REMOVE: " + indexRemove)
            if (indexRemove > -1) {
                pressed.splice(index, 1)
            }
        }
        setIsPressed(pressed);
    }

    const onPress4 = (item, index) => {
        let bug = col4[item]
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if(typeof found === 'undefined') {
            pressed.push(bug)
        }
        else {
            const indexRemove = pressed.findIndex(el => el.name === bug.name);
             console.log("INDEX REMOVE: " + indexRemove)
            if (indexRemove > -1) {
                pressed.splice(index, 1)
            }
        }
        setIsPressed(pressed);
    }

    const onPress5 = (item, index) => {
        let bug = col5[item]
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if(typeof found === 'undefined') {
            pressed.push(bug)
        }
        else {
            const indexRemove = pressed.findIndex(el => el.name === bug.name);
             console.log("INDEX REMOVE: " + indexRemove)
            if (indexRemove > -1) {
                pressed.splice(index, 1)
            }
        }
        setIsPressed(pressed);
    }

    const onPress6 = (item, index) => {
        let bug = col6[item]
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if(typeof found === 'undefined') {
            pressed.push(bug)
        }
        else {
            const indexRemove = pressed.findIndex(el => el.name === bug.name);
             console.log("INDEX REMOVE: " + indexRemove)
            if (indexRemove > -1) {
                pressed.splice(index, 1)
            }
        }
        setIsPressed(pressed);
    }

    const onPress7 = (item, index) => {
        let bug = col7[item]
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if(typeof found === 'undefined') {
            pressed.push(bug)
        }
        else {
            const indexRemove = pressed.findIndex(el => el.name === bug.name);
             console.log("INDEX REMOVE: " + indexRemove)
            if (indexRemove > -1) {
                pressed.splice(index, 1)
            }
        }
        setIsPressed(pressed);
    }

    const onPress8 = (item, index) => {
        let bug = col8[item]
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if(typeof found === 'undefined') {
            pressed.push(bug)
        }
        else {
            const indexRemove = pressed.findIndex(el => el.name === bug.name);
             console.log("INDEX REMOVE: " + indexRemove)
            if (indexRemove > -1) {
                pressed.splice(index, 1)
            }
        }
        setIsPressed(pressed);
    }


    const getSeaCreaturesFromAPI = async () => {
        const response = await fetch('https://api.nookipedia.com/nh/sea', {
          method: 'GET',
          headers: {
            "X-API-KEY": "8fa4f4f6-0363-423d-9a0f-7603a7d5c3e5"
          },
          
        }).then((response) => response.json())
        .then((json) => getSeaCols(json))
        .catch((error) => console.error(error));
    };

    function getSeaCols(jsonObj) {
        setSea(jsonObj); 
        let allSea = jsonObj;
        let col1st = [];
        let col2nd = [];
        let col3rd = [];
        let col4th = [];
        let col5th = [];
        let col6th = [];
        let col7th = [];
        let col8th = [];

        col1st.push(allSea[27], allSea[21], allSea[20], allSea[22], allSea[25]);
        col2nd.push(allSea[26], allSea[28], allSea[19], allSea[12], allSea[24]);
        col3rd.push(allSea[16], allSea[13], allSea[15], allSea[18], allSea[39]); 
        col4th.push(allSea[35], allSea[0], allSea[8], allSea[2], allSea[14]); 
        col5th.push(allSea[36], allSea[37], allSea[4], allSea[6], allSea[3]); 
        col6th.push(allSea[29], allSea[17], allSea[1], allSea[30], allSea[34]); 
        col7th.push(allSea[33], allSea[11], allSea[31], allSea[10], allSea[7]); 
        col8th.push(allSea[9], allSea[23], allSea[32], allSea[5], allSea[38]); 

        setCol1(col1st); 
        setCol2(col2nd); 
        setCol3(col3rd);
        setCol4(col4th);
        setCol5(col5th);
        setCol6(col6th);
        setCol7(col7th);
        setCol8(col8th);


    }

    function creatureStyle(index) {
        let bug = col1[index]
        console.log("INDEX Style: " + index);
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if (typeof found === 'undefined') {
            return styles.creature
        }
        else {
            return styles.creaturePressed
        }
    }

    function creatureStyle2(index) {
        let bug = col2[index]
        console.log("INDEX Style: " + index);
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if (typeof found === 'undefined') {
            return styles.creature
        }
        else {
            return styles.creaturePressed
        }
    }

    function creatureStyle3(index) {
        let bug = col3[index]
        console.log("INDEX Style: " + index);
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if (typeof found === 'undefined') {
            return styles.creature
        }
        else {
            return styles.creaturePressed
        }
    }

    function creatureStyle4(index) {
        let bug = col4[index]
        console.log("INDEX Style: " + index);
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if (typeof found === 'undefined') {
            return styles.creature
        }
        else {
            return styles.creaturePressed
        }
    }

    function creatureStyle5(index) {
        let bug = col5[index]
        console.log("INDEX Style: " + index);
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if (typeof found === 'undefined') {
            return styles.creature
        }
        else {
            return styles.creaturePressed
        }
    }

    function creatureStyle6(index) {
        let bug = col6[index]
        console.log("INDEX Style: " + index);
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if (typeof found === 'undefined') {
            return styles.creature
        }
        else {
            return styles.creaturePressed
        }
    }

    function creatureStyle7(index) {
        let bug = col7[index]
        console.log("INDEX Style: " + index);
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if (typeof found === 'undefined') {
            return styles.creature
        }
        else {
            return styles.creaturePressed
        }
    }

    function creatureStyle8(index) {
        let bug = col8[index]
        console.log("INDEX Style: " + index);
        let pressed = [...isPressed];
        const found = pressed.find(el => el.name === bug.name)
        if (typeof found === 'undefined') {
            return styles.creature
        }
        else {
            return styles.creaturePressed
        }
    }

    useEffect(() => {
        getSeaCreaturesFromAPI();
    }, [])

    return(
        <View style={styles.container}>
            <ScrollView
              horizontal={true}
              alwaysBounceHorizontal={false}>
            
            <FlatList
              scrollEnabled={false}
              data={col1}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress.bind(item, index)}>
                    <Image
                    style={creatureStyle(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col2}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress2.bind(item, index)}>
                    <Image
                    style={creatureStyle2(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col3}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress3.bind(item, index)}>
                    <Image
                    style={creatureStyle3(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col4}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress4.bind(item, index)}>
                    <Image
                    style={creatureStyle4(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col5}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress5.bind(item, index)}>
                    <Image
                    style={creatureStyle5(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col6}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress6.bind(item, index)}>
                    <Image
                    style={creatureStyle6(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col7}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress7.bind(item, index)}>
                    <Image
                    style={creatureStyle7(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col8}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress8.bind(item, index)}>
                    <Image
                    style={creatureStyle8(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              </ScrollView>
        </View>
    );
};
export default SeaPedia; 