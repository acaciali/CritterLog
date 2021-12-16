import { FlatList, TouchableOpacity } from "react-native";
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View, SafeAreaView, Pressable, Platform, Image, TouchableHighlight} from 'react-native';
import styles from '../styles/CritterPediaStyles'
import { ScrollView } from "react-native-gesture-handler";

const BugPedia = props => {
    const [bugs, setBugs] = useState([]);
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


    const getBugsFromAPI = async () => {
        const response = await fetch('https://api.nookipedia.com/nh/bugs', {
          method: 'GET',
          headers: {
            "X-API-KEY": "8fa4f4f6-0363-423d-9a0f-7603a7d5c3e5"
          },
          
        }).then((response) => response.json())
        .then((json) => getBugCols(json))
        .catch((error) => console.error(error));
    };

    function getBugCols(jsonObj) {
        setBugs(jsonObj); 
        let allBugs = jsonObj;
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

        col1st.push(allBugs[12], allBugs[79], allBugs[72], allBugs[54], allBugs[11]);
        col2nd.push(allBugs[53], allBugs[33], allBugs[49], allBugs[21], allBugs[0]);
        col3rd.push(allBugs[59], allBugs[57], allBugs[51], allBugs[2], allBugs[43]); 
        col4th.push(allBugs[42], allBugs[46], allBugs[61], allBugs[32], allBugs[13]); 
        col5th.push(allBugs[5], allBugs[45], allBugs[52], allBugs[35], allBugs[77]); 
        col6th.push(allBugs[7], allBugs[62], allBugs[26], allBugs[74], allBugs[22]); 
        col7th.push(allBugs[9], allBugs[60], allBugs[16], allBugs[4], allBugs[15]); 
        col8th.push(allBugs[23], allBugs[48], allBugs[56], allBugs[17], allBugs[28]); 
        col9th.push(allBugs[69], allBugs[44], allBugs[41], allBugs[71], allBugs[40]); 
        col10th.push(allBugs[73], allBugs[10], allBugs[63], allBugs[6], allBugs[19]); 
        col11th.push(allBugs[20], allBugs[65], allBugs[18], allBugs[31], allBugs[64]); 
        col12th.push(allBugs[47], allBugs[27], allBugs[58], allBugs[14], allBugs[30]); 
        col13th.push(allBugs[29], allBugs[37], allBugs[36], allBugs[38], allBugs[39]); 
        col14th.push(allBugs[76], allBugs[75], allBugs[3], allBugs[1], allBugs[34]); 
        col15th.push(allBugs[78], allBugs[25], allBugs[50], allBugs[24], allBugs[67]); 
        col16th.push(allBugs[55], allBugs[8], allBugs[68], allBugs[70], allBugs[66]); 

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
        getBugsFromAPI();
    }, [])

    return(
        <View style={styles.container}>
            <ScrollView
              horizontal={true}
              alwaysBounceHorizontal={false}>
            
            <FlatList
              extraData={isPressed}
              scrollEnabled={false}
              data={col1}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) =>
                <TouchableHighlight
                underlayColor='none'
                onPress={onPress.bind(item, index)}
                >
                    <Image
                    style={creatureStyle(index)}
                    source={{uri: item.image_url}}></Image>
                </TouchableHighlight>}
              >

              </FlatList>
              <FlatList
              extraData={isPressed}
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
export default BugPedia; 