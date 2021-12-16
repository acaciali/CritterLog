import { FlatList } from "react-native";
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View, SafeAreaView, Pressable, Platform, Image, TouchableHighlight} from 'react-native';
import styles from './styles/AvailableNowStyles'

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
  
      console.log("finished json");
    };

    useEffect(() => {
        getFishFromAPI();
      }, []);
    
    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.creatureListHeader}>
              <Text style={styles.bodyText}>Fish</Text>
              <Text style={styles.bodyText}>Location</Text>
            </SafeAreaView>
            <FlatList
              style={styles.flatList}
              data={fish}
              keyExtractor={({name}) => name.toString()}
              renderItem={({item}) => 
              <View style={styles.row}>
                <View style={styles.fish}>
                <Image 
                style={styles.fishIcon} 
                source={{uri: item.image_url}}></Image>
                {/* <Text style={styles.fishName}>{item.name}</Text> */}

                </View>

                <Text style={styles.fishData}>{item.location}     </Text>
                {/* <Text style={styles.fishData}>{item.shadow_size}</Text> */}
                <Text style={styles.border}>------------------------------------</Text>
               
              </View>
              
              }/>
        </View>
    );
  
};

export default Fish; 