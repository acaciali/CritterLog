import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEF4B9',
        alignItems: 'center',
        justifyContent: 'center',
      },
      header: {
        backgroundColor: '#DEF4B9',
        padding: 20,
        flex: 0
      },
      headerText: {
        paddingTop: 32 - (32 * .75),
        fontFamily: 'Cutive_400Regular', 
        fontSize: 32,
        marginTop: 40
      },
      body: {
        paddingTop: 20,
        backgroundColor: '#F5F7E1',
        fontFamily: 'Cutive_400Regular', 
        flex: 0,
        alignItems: 'center'
      },
      confirmButton: {
        backgroundColor: '#89D9AB',
      },
      bodyText: {
        fontSize: 20,
        paddingTop: 20 - (20 * .75),
        alignItems: 'center',
        fontFamily: 'Cutive_400Regular', 
      },
      textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
      },
      switchStyle: {
    
      },
      hemisphereContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        
      },
      parent: {
        alignItems: 'stretch',
        flexDirection: "column",
      }
});

export default styles;