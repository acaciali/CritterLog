import { FlatList } from "react-native";
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View, SafeAreaView, Pressable, Platform, Image, TouchableHighlight} from 'react-native';
import styles from './styles/AvailableNowStyles'

const Bugs = props => {

    const [bugs, setBugs] = useState([]);

    const getBugsFromAPI = async () => {
      const response = await fetch('https://api.nookipedia.com/nh/bugs', {
        method: 'GET',
        headers: {
          "X-API-KEY": "8fa4f4f6-0363-423d-9a0f-7603a7d5c3e5"
        },
        
      }).then((response) => response.json())
      .then((json) => updateBugJson(json))
      .catch((error) => console.error(error));
      console.log("finished json bugs");
    };

    function updateBugJson(jsonObj) {
 
        let updateBugs = jsonObj; 
        let index = updateBugs.findIndex(el => el.name === 'Ant')
        updateBugs[index] = {...updateBugs[index], location: 'On rotten food'};
        index = updateBugs.findIndex(el => el.name === 'Bagworm')
        updateBugs[index] = {...updateBugs[index], location: 'Shaking trees'};
        index = updateBugs.findIndex(el => el.name === 'Brown Cicada')
        updateBugs[index] = {...updateBugs[index], location: 'On trees'};
        index = updateBugs.findIndex(el => el.name === 'Cicada Shell')
        updateBugs[index] = {...updateBugs[index], location: 'On trees'};
        index = updateBugs.findIndex(el => el.name === 'Diving Beetle')
        updateBugs[index] = {...updateBugs[index], location: 'Rivers and ponds'};
        index = updateBugs.findIndex(el => el.name === 'Evening Cicada')
        updateBugs[index] = {...updateBugs[index], location: 'On trees'};
        index = updateBugs.findIndex(el => el.name === 'Fly')
        updateBugs[index] = {...updateBugs[index], location: 'On trash items'};
        index = updateBugs.findIndex(el => el.name === 'Giant Cicada')
        updateBugs[index] = {...updateBugs[index], location: 'On trees'};
        index = updateBugs.findIndex(el => el.name === 'Giant Water Bug')
        updateBugs[index] = {...updateBugs[index], location: 'Rivers and ponds'};
        index = updateBugs.findIndex(el => el.name === 'Hermit Crab')
        updateBugs[index] = {...updateBugs[index], location: 'Disguised as shells'};
        index = updateBugs.findIndex(el => el.name === 'Moth')
        updateBugs[index] = {...updateBugs[index], location: 'Flying by light'};
        index = updateBugs.findIndex(el => el.name === 'Peacock Butterfly')
        updateBugs[index] = {...updateBugs[index], location: 'Near dark flowers'};
        index = updateBugs.findIndex(el => el.name === 'Pondskater')
        updateBugs[index] = {...updateBugs[index], location: 'Rivers and ponds'};
        index = updateBugs.findIndex(el => el.name === 'Robust Cicada')
        updateBugs[index] = {...updateBugs[index], location: 'On trees'};
        index = updateBugs.findIndex(el => el.name === 'Snail')
        updateBugs[index] = {...updateBugs[index], location: 'Rocks and bushes'};
        index = updateBugs.findIndex(el => el.name === 'Walker Cicada')
        updateBugs[index] = {...updateBugs[index], location: 'On trees'};
        index = updateBugs.findIndex(el => el.name === 'Walking Leaf')
        updateBugs[index] = {...updateBugs[index], location: 'On ground'};

        setBugs(updateBugs); 
    }

    

    useEffect(() => {
        getBugsFromAPI();
      }, []);
    
    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.creatureListHeader}>
              <Text style={styles.bodyText}>Bug</Text>
              <Text style={styles.bodyText}>Location</Text>
            </SafeAreaView>
            <FlatList
              style={styles.flatList}
              data={bugs}
              keyExtractor={({name}) => name.toString()}
              renderItem={({item}) => 
              <View style={styles.bugRow}>
                <View style={styles.bug}>
                <Image 
                style={styles.fishIcon} 
                source={{uri: item.image_url}}></Image>

                </View>
                <Text style={styles.bugData}>{item.location}     </Text>
                <Text style={styles.border}>------------------------------------</Text>
               
              </View>
              
              }/>
        </View>
    );
  
};

export default Bugs;