import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, FlatList, View, SafeAreaView, Pressable, Platform, Image, TouchableHighlight} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Picker from '@gregfrench/react-native-wheel-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Row, Table} from 'react-native-table-component';
import TimeField from 'react-simple-timefield';
import Fish from '../CritterLog/AvailableNow';
var PickerItem = Picker.Item;


import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Cutive_400Regular,
} from '@expo-google-fonts/cutive'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function EnterDetails({ navigation }) {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  }

  const showTimePicker = () => {
    showMode('time'); 
  }

  const [selectedItem, setSelectedItem] = useState(11);
  const [itemList, setItemList] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const AMValue = {value: true};
  const setAM = () => {
    AMValue.value = true;
  }
  const setPM = () => {
    AMValue.value = false; 
  }


  let [fontsLoaded] = useFonts({
    Cutive_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {

    return (
      <SafeAreaView style={styles.parent}>
        <SafeAreaView style={styles.header}>
          <Text style={styles.headerText}>Enter your details: </Text>
        </SafeAreaView>
        <ScrollView>
          <SafeAreaView style={styles.body}>
            <Text style={styles.bodyLabel}>Hemisphere:</Text>
            
            <SafeAreaView style={styles.hemisphereContainer}>
              <Text style={styles.bodyText}>North</Text>
              <Switch
                trackColor={{false: "#C5DBA1", true: "#C5DBA1"}}
                thumbColor={isEnabled ? "#fff" : "#fff"}
                ios_backgroundColor="#C5DBA1"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switchStyle}
                ></Switch>
              <Text style={styles.bodyText}>South</Text>
            </SafeAreaView>
            <Text style={styles.bodyLabel}>Month:</Text>
            <SafeAreaView style={styles.pickerContainer}>
              <Picker
                style = {styles.picker}
                lineColor="#000000"
                lineGradientColorFrom="#008000"
                lineGradientColorTo="#FF5733"
                selectedValue={selectedItem}
                itemStyle={{color:'black', fontSize:24, height: 120}}
                onValueChange={(index) => setSelectedItem(index)}>
                  {itemList.map((value, i) => (<PickerItem label={value} value={i} key={i}/> ))}
              </Picker>
            </SafeAreaView>
            <Text style={styles.bodyLabel}>Time:</Text>
            

            <SafeAreaView style={styles.timeInput}>
              <DateTimePicker
                style={styles.timePicker}
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                display="spinner"
                onChange={onChange} />
                  
            </SafeAreaView>
            <Pressable style = {styles.confirmButton}
            onPress={() => navigation.navigate('Creatures Available Now', {
              hemisphere: isEnabled,
              month: selectedItem,
              date: date,
            })}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </Pressable>
          
          </SafeAreaView>
          
        </ScrollView>
        
      </SafeAreaView>
    );
  }
}


function AvailableNow({ route, navigation }) {
  const {hemisphere, month, date } = route.params
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

  const getFishAvailableNowNH = async () => {
    fishArr = getFishFromAPI();
    currentFish = [];
    for (var i = 0; i < fishArr.length; i++) {
      for (var j = 0; j < fishArr[i].north.months_array.length; j++) {
        if (month = fishArr[i].north.months_array[j]) {
          currentFish.push(fishArr[i]);
        }
      }
    }
    this.setState({currentFish: currentFish})
    return currentFish; 
  }

  const getFishAvailableNowSH = async () => {
    currentMonth = PickerItem;
    fishArr = this.state.currentFish
    currentFish = ["cherry salmon", "fishey"];
    for (var i = 0; i < fishArr.length; i++) {
      for (var j = 0; j < fishArr[i].south.months_array.length; j++) {
        if (currentMonth = fishArr[i].south.months_array[j]) {
          currentFish.push(fishArr[i]);
        }
      }
    }
    return currentFish;
  }


  const list = () => {
    getFishAvailableNowNH();  
    console.log("hi?")
    return state.currentFish.map((fish) => {
      return (
        <View>
          <Text>{fish.name}</Text>
          <Text>Hello</Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>Available Now</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <SafeAreaView style={styles.creaturePicker}>
          <TouchableHighlight
            style={styles.creaturePickerCircle}>
            <Image 
              style={styles.creaturePickerBug}
              source={require('./assets/GeneralBug.png')}
              />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.creaturePickerCircle}>
            <Image 
              style={styles.creaturePickerFish}
              source={require('./assets/GeneralFish.png')}
              />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.creaturePickerCircle}>
            <Image 
              style={styles.creaturePickerCreature}
              source={require('./assets/GeneralSeaCreature.png')}
              />
          </TouchableHighlight>
        </SafeAreaView>

        <SafeAreaView style={styles.creatureListHeader}>
          <Text style={styles.bodyText}>Fish</Text>
          <Text style={styles.bodyText}>Location</Text>
          <Text style={styles.bodyText}>Shadow</Text>
          {/* <Image
            style={styles.icon}
            source={{
              uri: 'https://dodo.ac/np/images/d/db/Cherry_Salmon_NH_Icon.png'
            }}
          /> */}
        </SafeAreaView>

        <Fish />

        <ScrollView contentContainerStyle={styles.creatureList}>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/4/4d/Bitterling_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>River</Text>
              <Text style={styles.bodyText}>Tiny</Text>

            </SafeAreaView>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/e/e2/Pale_Chub_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>River</Text>
              <Text style={styles.bodyText}>Tiny</Text>

            </SafeAreaView>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/f/f2/Crucian_Carp_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>River</Text>
              <Text style={styles.bodyText}>Small</Text>

            </SafeAreaView>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/d/db/Dace_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>River</Text>
              <Text style={styles.bodyText}>Small</Text>

            </SafeAreaView>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/5/5d/Carp_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>Pond</Text>
              <Text style={styles.bodyText}>Medium</Text>

            </SafeAreaView>
            {/* <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/2/2d/Koi_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>Pond</Text>
              <Text style={styles.bodyText}>Medium</Text>

            </SafeAreaView>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/7/71/Goldfish_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>Pond</Text>
              <Text style={styles.bodyText}>Tiny</Text>

            </SafeAreaView>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/0/0d/Pop-Eyed_Goldfish_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>Pond</Text>
              <Text style={styles.bodyText}>Tiny</Text>

            </SafeAreaView> */}
            
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/3/35/Ranchu_Goldfish_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>Pond</Text>
              <Text style={styles.bodyText}>Small</Text>

            </SafeAreaView>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/e/ea/Killifish_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>Pond</Text>
              <Text style={styles.bodyText}>Small</Text>

            </SafeAreaView>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/7/7f/Sea_Bass_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>Sea</Text>
              <Text style={styles.bodyText}>Large</Text>

            </SafeAreaView>
            {/* <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/3/35/Ranchu_Goldfish_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>Pond</Text>
              <Text style={styles.bodyText}>Small</Text>

            </SafeAreaView>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/3/35/Ranchu_Goldfish_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>Pond</Text>
              <Text style={styles.bodyText}>Small</Text>

            </SafeAreaView>
            <SafeAreaView style={styles.creatureListRow}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://dodo.ac/np/images/3/35/Ranchu_Goldfish_NH_Icon.png'
                }} 
              />
              <Text style={styles.bodyText}>Pond</Text>
              <Text style={styles.bodyText}>Small</Text>

              </SafeAreaView>  */}
        </ScrollView>
        <View></View>
        
      </SafeAreaView>
      
      <View style={styles.nav}>
      <TouchableHighlight
        onPress={() => navigation.navigate('Change Location and Time')}>
        <Image
          source={require('./assets/clock-pngrepo-com.png')}
          style={styles.navIcon}>
          </Image>
          
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => getFishFromAPI()}
        >
        <Image
          source={{
            uri: 'https://dodo.ac/np/images/0/0e/Menu_Critterpedia_NH_Icon.png'
          }} 
          style={styles.navIcon}>
          </Image>
          
          
      </TouchableHighlight>
      </View>
      
          

    </SafeAreaView>
  );
  
}





export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Enter Details">
        <Stack.Screen name="Change Location and Time" component={EnterDetails} />
        <Stack.Screen name="Creatures Available Now" component={AvailableNow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEF4B9',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#DEF4B9',
    flex: 0,
  },
  headerText: {
    paddingTop: 32 - (32 * .75),
    fontFamily: 'Cutive_400Regular', 
    fontSize: 28,
    marginTop: 30,
    paddingLeft: 20,
    paddingBottom: 30
  },
  body: {
    paddingTop: 20,
    backgroundColor: '#f2ede4',
    fontFamily: 'Cutive_400Regular', 
    flex: 0,
  },
  confirmButton: {
    backgroundColor: '#89D9AB',
    marginTop: 50,
    marginRight: 20,
    padding: 10,
    marginBottom: 200, 
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 10
  },
  confirmText: {
    fontSize: 20,
    paddingTop: 10,
    fontFamily: 'Cutive_400Regular', 

  },
  bodyText: {
    fontSize: 20,
    paddingTop: 20,
    
    fontFamily: 'Cutive_400Regular', 
  },
  bodyLabel: {
    fontSize: 24,
    paddingBottom: 8,
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingLeft: 20,
    fontFamily: 'Cutive_400Regular',
    
  },
  textInput: {
    padding: 10,
  },
  switchStyle: {
    transform: [{scaleX: 1}, {scaleY: 1}],
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  hemisphereContainer: {
    alignItems: 'center',
    paddingLeft: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  parent: {
    alignItems: 'stretch',
    flexDirection: "column",
    flex: 1,
  },
  picker: {
    width: 250,
    height: 120,
    borderRadius: 20,
  },
  pickerContainer: {
    alignItems: 'center',
  },
  timeInput: {
    flexDirection: "row",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    height: 50,
    width: 200,
    fontFamily: 'Cutive_400Regular'
  },
  timeText: {
    margin: 5,
    fontSize: 18,
    height: 50,
    fontFamily: 'Cutive_400Regular'
  },
  timeColon: {
    fontFamily: 'Cutive_400Regular',
    fontSize: 20
  },
  AMPMText: {
    fontFamily: 'Cutive_400Regular',
    fontSize: 16,
    paddingTop: 3,
    
  },
  AMPMButton: {
    fontFamily: 'Cutive_400Regular',
    backgroundColor: '#DEF4B9',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'

  },
  AMPMButtonSelected: {
    fontFamily: 'Cutive_400Regular',
    backgroundColor: '#dbbf9e'
  },
  timePicker: {
    height: 120,
    width: 250,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  creaturePicker: {
    flexDirection: 'row',
    margin: 10
  },
  creaturePickerBug: {
    width: 28,
    height: 28,
    tintColor: '#8d7b67',
    backgroundColor: '#f5f7e1',    
  },
  creaturePickerFish: {
    width: 35,
    height: 35,
    tintColor: '#8d7b67',
    backgroundColor: '#f5f7e1',    
    borderRadius: 35/2
  },
  creaturePickerCreature: {
    width: 40,
    height: 40,
    tintColor: '#8d7b67',
    backgroundColor: '#f5f7e1',    
    borderRadius: 40/2
  },
  creaturePickerCircle: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: '#f5f7e1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  creatureListHeader: {
    backgroundColor: '#eee0b2',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    
    justifyContent: 'space-evenly',
    flexDirection: 'row', 
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  creatureList: {
    backgroundColor: '#f9ecc2',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 300,
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  creatureListRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  creatureNow: {
    flex: 1
  },
  navIcon: {
    height: 40,
    width: 40,
    justifyContent: 'space-around',
    marginTop: 10,
  },
  nav: {
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  }
});


