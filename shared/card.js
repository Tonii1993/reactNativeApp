import {StyleSheet, View} from 'react-native';
import React from 'react';

const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cardContent:{
        marginHorizontal:18,
        marginVertical:10,
    },
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width:1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    }
})


export default Card;