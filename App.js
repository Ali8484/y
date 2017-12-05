import React from 'react';
import {View, Text} from 'react-native';
import {TabNavigator} from 'react-navigation';

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View>
    <Text>Profile Screen</Text>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  },
});

export default RootTabs;