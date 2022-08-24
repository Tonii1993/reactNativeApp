import { useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Text, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import Card from "../shared/card";
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from "./reviewForm";



const HomeScreen = ({ navigation })  => {

    const[ modalOpen, setModaOpen] = useState(false);

    const [ reviews, setReviews] = useState([
        {title: 'Zelda, Breath of Fresh air', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Gotta catch them all (again)', rating: 3, body: 'lorem ipsum, lorem ipsum', key: '2'},
        {title: 'Not so "Final" Fantasy', rating: 4, body: 'lorem ipsum, lorem ipsum, lorem ipsum', key: '3'},
        {title: 'The Alchemist', rating: 5, body: 'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum', key: '4'},
        {title: 'Rich Dad, Poor Dad', rating: 2, body: 'lorem ipsum, lorem ipsum', key: '5'},
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((prevReviews) => {
            return [review, ...prevReviews];
        });
        setModaOpen(false);
    }

    return (
      <View style = {styles.container}>
        <Modal visible = {modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name="close"
                        size={25}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                        onPress={() => setModaOpen(false)}
                    />
                    <ReviewForm addReview={addReview} />
                </View>
            </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons
            name="add"
            size={25}
            style={styles.modalToggle}
            onPress={() => setModaOpen(true)}
        />

        <FlatList 
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Profile', item)}>
                    <Card>
                    <Text style= { styles.itemTxt}> {item.title} </Text>
                    </Card>
                </TouchableOpacity>
            )}
        />
        <StatusBar style="auto"/>
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
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',

    },
    modalClose: {
        marginBottom: 0,
        marginTop: 20,
    },
    modalContent: {
        flex: 1,
        left: 20,
        
    }
})


export default HomeScreen;