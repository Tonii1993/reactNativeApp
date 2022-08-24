import React from "react";
import { StyleSheet, View, Button, Text, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import Card from "../shared/card";
import images from "../shared/globalImages";


const ProfileScreen = ({ navigation, route }) => {

    const { title, body, rating } = route.params;

    return (
      <View style={styles.container}>
          <Card>
            <Text style={styles.itemTxt}>Title: { title }</Text>
            <Text style={styles.itemTxt}>Summary: { body }</Text>
            <View style={styles.rating}>
              <Text>
                GameZone rating:
              </Text>
              <Image source={images.ratings[rating]} />
            </View>
            <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')}  />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <StatusBar style="auto"/>
          </Card>
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    itemTxt: {
        color: '#2C04F7',
        fontSize: 22,
        fontWeight: 'bold',
    },
    rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',

    }
})


export default ProfileScreen;