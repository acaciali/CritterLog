import { FlatList } from "react-native";
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View, SafeAreaView, Pressable, Platform, Image, TouchableHighlight} from 'react-native';
import styles from './styles/AvailableNowStyles'

const SeaCreatures = props => {

    const [seaCreatures, setSeaCreatures] = useState([]);

    const getSeaCreaturesFromAPI = async () => {
      const response = await fetch('https://api.nookipedia.com/nh/sea', {
        method: 'GET',
        headers: {
          "X-API-KEY": "8fa4f4f6-0363-423d-9a0f-7603a7d5c3e5"
        },
        
      }).then((response) => response.json())
      .then((json) => setSeaCreatures(json))
      .catch((error) => console.error(error));
  
      console.log("finished json");
    };

    useEffect(() => {
        getSeaCreaturesFromAPI();
      }, []);
    
    return(
        <View style={styles.container}>
          <SafeAreaView style={styles.creatureListHeader}>
              <Text style={styles.bodyText}>Creature</Text>
              <Text style={styles.bodyText}>Shadow</Text>
            </SafeAreaView>
            <FlatList
              style={styles.flatList}
              data={seaCreatures}
              keyExtractor={({name}) => name.toString()}
              renderItem={({item}) => 
              <View style={styles.row}>
                <View style={styles.fish}>
                <Image 
                style={styles.fishIcon} 
                source={{uri: item.image_url}}></Image>
                {/* <Text style={styles.fishName}>{item.name}</Text> */}

                </View>

                <Text style={styles.fishData}>{item.shadow_size}</Text>
                <Text style={styles.border}>------------------------------------</Text>
               
              </View>
              
              }/>
        </View>
    );
  
};

export default SeaCreatures; 