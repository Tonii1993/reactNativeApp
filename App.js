import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

//header component: -->comments
// import Header from './shared/header';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            title: "GameZone",
            //  ({navigation}) => {
            //   return {
            //     headerTitle: () => <Header navigation={navigation} title:'GameZone' />,
            //   }
            //  },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#DFDDE8',
            },
            headerTintColor: '#2FB4F9',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
          />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            //  ({navigation}) => {
            //   return {
            //     headerTitle: () => <Header navigation={navigation} title:'Profile' />,
            //   }
            //  },
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#DFDDE8',
            },
            headerTintColor: '#2FB4F9',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
          />
        <Stack.Screen 
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "Settings",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#DFDDE8',
            },
            headerTintColor: '#2FB4F9',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;