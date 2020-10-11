import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import storage from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const { store, persistor } = storage;

import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Inbox from './src/screens/Inbox';
import Profile from './src/screens/Profile';
import Notification from './src/screens/Notification';
import EditProfile from './src/screens/EditProfile';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import SearchResult from './src/screens/SearchResult';
import UserProfile from './src/screens/UserProfile';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 75,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabStyle: {
          marginTop: 10,
          marginBottom: 10,
        },
        showLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="th-large" color={color} size={25} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={25} />
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="comment" color={color} size={25} />
          ),
        }}
        name="Inbox"
        component={Inbox}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={25} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Home" component={Tabs} />
              <Stack.Screen name="Notification" component={Notification} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen name="UserProfile" component={UserProfile} />
              <Stack.Screen name="SearchResult" component={SearchResult} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};




export default App;
