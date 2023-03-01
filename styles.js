import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    mainView: {
      flex:1,
      alignContent:'center', 
      justifyContent:'center',
    },
  
    button: {
      flex:0.08,
      height: 60,
      backgroundColor: 'black',
      borderRadius: 100,
      alignContent: 'center',
      justifyContent: 'center',
      margin: 16
    },
  
    buttonText: {
      color: 'white',
      justifyContent: 'center',
      alignContent: 'center',
      fontSize: 18,
      textAlign: 'center'
    },
  
    cardContainer: {
      flex:1, 
      height: 160,
      margin: 16,
      marginBottom:8, 
      borderRadius:12,
      backgroundColor: 'black',
    },
  
    cardContent: {
      margin:16, 
      fontSize: 24, 
      fontWeight: 'bold', 
      color: '#fff',
    },

    profileScreen: {
      backgroundColor:'white', 
      margin:8
    },

    profileScreenText: {
      fontSize: 60, 
      color:'black',
      padding:8
    }
  })

export {styles}
  