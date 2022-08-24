import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";


const SettingsScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Button title="Go back" onPress={() => navigation.pop()} />
        <TouchableOpacity style={styles.homebutton}>
          <Text></Text>
        </TouchableOpacity>
        <StatusBar style="auto"/>
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#96F2AD'
    },
    homebutton: {
      position: 'absolute',
      bottom: 30,
      left: 25,
      right: 25,
      elevation: 0,
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 90,
    }
})


export default SettingsScreen;