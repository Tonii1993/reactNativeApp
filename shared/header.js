// //burger nav if drawers worked
// //custom header component

// import React from "react";
// import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons';


// const Header = ( {navigation, title} ) => {

//     const openMenu = () => {
//         navigation.openDrawer();
//     }

//     return (
//         <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
//             <MaterialIcons name="menu" size={20} onPress={openMenu} style={styles.icon}/>
//             <View style={styles.headerTitle}>
//                 <Image source={require('../assets/heart_logo.png')} style={styles.headerImg} />
//                 <Text style={styles.headerTxt}>{title}</Text>
//             </View>
//         </ImageBackground>
//     )
// };

// const styles = StyleSheet.create({
//     header:{
//         width: '100%',
//         height: '100%',
//         flexDirection: 'row',
//         alignItems:'center',
//         justifyContent:'center',
//     },
//     headerTxt: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         color: '#333',
//         letterSpacing: 1,
//     },
//     icon: {
//         position: 'absolute',
//         left: 16,
//     },
//     headerImg: {
//         width: 25,
//         height:26,
//         marginHorizontal: 10,
//     },
//     headerTitle: {
//         flexDirection: 'row',

//     }
// })

// export default Header;