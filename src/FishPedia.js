import { FlatList } from "react-native";
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View, SafeAreaView, Pressable, Platform, Image, TouchableHighlight} from 'react-native';
import styles from '../styles/CritterPediaStyles'
import { ScrollView } from "react-native-gesture-handler";

const FishPedia = props => {
    const [fish, setFish] = useState([]);
    const [col1, setCol1] = useState([]); 
    const [col2, setCol2] = useState([]); 
    const [col3, setCol3] = useState([]); 
    const [col4, setCol4] = useState([]); 
    const [col5, setCol5] = useState([]); 
    const [col6, setCol6] = useState([]); 
    const [col7, setCol7] = useState([]); 
    const [col8, setCol8] = useState([]); 
    const [col9, setCol9] = useState([]); 
    const [col10, setCol10] = useState([]); 
    const [col11, setCol11] = useState([]); 
    const [col12, setCol12] = useState([]); 
    const [col13, setCol13] = useState([]); 
    const [col14, setCol14] = useState([]); 
    const [col15, setCol15] = useState([]); 
    const [col16, setCol16] = useState([]); 
    const [isPressed, setIsPressed] = useState([]); 

    const onPress = (item, index) => {
        let bug = col1[item]
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

    const onPress9 = (item, index) => {
        let bug = col9[item]
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

    const onPress10 = (item, index) => {
        let bug = col10[item]
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

    const onPress11 = (item, index) => {
        let bug = col11[item]
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

    const onPress12 = (item, index) => {
        let bug = col12[item]
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

    const onPress13 = (item, index) => {
        let bug = col13[item]
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

    const onPress14 = (item, index) => {
        let bug = col14[item]
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

    const onPress15 = (item, index) => {
        let bug = col15[item]
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

    const onPress16 = (item, index) => {
        let bug = col16[item]
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



    const getFishFromAPI = async () => {
        const response = await fetch('https://api.nookipedia.com/nh/fish', {
          method: 'GET',
          headers: {
            "X-API-KEY": "8fa4f4f6-0363-423d-9a0f-7603a7d5c3e5"
          },
          
        }).then((response) => response.json())
        .then((json) => getFishCols(json))
        .catch((error) => console.error(error));
    };

    function getFishCols(jsonObj) {
        setFish(jsonObj); 
        let allFish = jsonObj;
        let col1st = [];
        let col2nd = [];
        let col3rd = [];
        let col4th = [];
        let col5th = [];
        let col6th = [];
        let col7th = [];
        let col8th = [];
        let col9th = [];
        let col10th = [];
        let col11th = [];
        let col12th = [];
        let col13th = [];
        let col14th = [];
        let col15th = [];
        let col16th = [];

        col1st.push(allFish[7], allFish[49], allFish[20], allFish[22], allFish[13]);
        col2nd.push(allFish[38], allFish[31], allFish[53], allFish[56], allFish[36]);
        col3rd.push(allFish[19], allFish[67], allFish[66], allFish[74], allFish[26]); 
        col4th.push(allFish[25], allFish[39], allFish[14], allFish[28], allFish[11]); 
        col5th.push(allFish[78], allFish[8], allFish[75], allFish[50], allFish[52]); 
        col6th.push(allFish[73], allFish[16], allFish[15], allFish[30], allFish[69]); 
        col7th.push(allFish[61], allFish[37], allFish[41], allFish[33], allFish[45]); 
        col8th.push(allFish[1], allFish[6], allFish[44], allFish[55], allFish[51]); 
        col9th.push(allFish[3], allFish[23], allFish[27], allFish[2], allFish[60]); 
        col10th.push(allFish[70], allFish[64], allFish[65], allFish[17], allFish[72]); 
        col11th.push(allFish[12], allFish[43], allFish[79], allFish[9], allFish[54]); 
        col12th.push(allFish[0], allFish[35], allFish[4], allFish[63], allFish[58]); 
        col13th.push(allFish[21], allFish[48], allFish[68], allFish[42], allFish[59]); 
        col14th.push(allFish[76], allFish[10], allFish[29], allFish[40], allFish[47]); 
        col15th.push(allFish[57], allFish[62], allFish[34], allFish[32], allFish[77]); 
        col16th.push(allFish[71], allFish[24], allFish[46], allFish[5], allFish[18]); 

        setCol1(col1st); 
        setCol2(col2nd); 
        setCol3(col3rd);
        setCol4(col4th);
        setCol5(col5th);
        setCol6(col6th);
        setCol7(col7th);
        setCol8(col8th);
        setCol9(col9th);
        setCol10(col10th);
        setCol11(col11th);
        setCol12(col12th);
        setCol13(col13th);
        setCol14(col14th);
        setCol15(col15th);
        setCol16(col16th);


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

    function creatureStyle9(index) {
        let bug = col9[index]
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

    function creatureStyle10(index) {
        let bug = col10[index]
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

    function creatureStyle11(index) {
        let bug = col11[index]
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

    function creatureStyle12(index) {
        let bug = col12[index]
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

    function creatureStyle13(index) {
        let bug = col13[index]
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

    function creatureStyle14(index) {
        let bug = col14[index]
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

    function creatureStyle15(index) {
        let bug = col15[index]
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
    function creatureStyle16(index) {
        let bug = col16[index]
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
        getFishFromAPI();
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
              <FlatList
              scrollEnabled={false}
              data={col9}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress9.bind(item, index)}>
                    <Image
                    style={creatureStyle9(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col10}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress10.bind(item, index)}>
                    <Image
                    style={creatureStyle10(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col11}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress11.bind(item, index)}>
                    <Image
                    style={creatureStyle11(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col12}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress12.bind(item, index)}>
                    <Image
                    style={creatureStyle12(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col13}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress13.bind(item, index)}>
                    <Image
                    style={creatureStyle13(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col14}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress14.bind(item, index)}>
                    <Image
                    style={creatureStyle14(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col15}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress15.bind(item, index)}>
                    <Image
                    style={creatureStyle15(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              scrollEnabled={false}
              data={col16}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress16.bind(item, index)}>
                    <Image
                    style={creatureStyle16(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              </ScrollView>
        </View>
    );
};
export default FishPedia; 