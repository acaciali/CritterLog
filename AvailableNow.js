import { FlatList } from "react-native";
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View, SafeAreaView, Pressable, Platform, Image, TouchableHighlight} from 'react-native';


const Fish = props => {

    const [fish, setFish] = useState([]);

    const getFishFromAPI = async () => {
      const response = await fetch('https://api.nookipedia.com/nh/fish', {
        method: 'GET',
        headers: {
          "X-API-KEY": "8fa4f4f6-0363-423d-9a0f-7603a7d5c3e5"
        },
        
      }).then((response) => response.json())
      .then((json) => setFish(json))
      .catch((error) => console.error(error));
  
      console.log(hemisphere);
      console.log(month);
      //const theJson = await response.json();
      
      //const jsonString = JSON.stringify(theJson);
      //console.log(jsonString);
      console.log("finished json");
      //const fishArr = JSON.parse(jsonString);
      //console.log(fishArr);
      //console.log(fishArr[0].name);
      // console.log(date);
      let hour = date.toString().substring(16,18);
      console.log(hour);
      //this.setState({allFish: fishArr})  
      //console.log(this.state.allFish)
      console.log(fish[0]);
    };

    useEffect(() => {
        getFishFromAPI();
      }, []);
    
    return(
        <View style={{padding: 20}}>
            <FlatList
              data={fish}
              keyExtractor={({name}) => name.toString()}
              renderItem={({item}) => 
              <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection: 'column'}}>
                <Image 
                style={{height: 50, width: 50}} 
                source={{uri: item.image_url}}></Image>
                <Text>{item.name}</Text>

                </View>
                <Text>{item.location}</Text>
                <Text>{item.shadow_size}</Text>
               
              </View>
              
              }/>
        </View>
    );
  
};

export default Fish; 