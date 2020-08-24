import React from 'react';

import Overview from '../screens/Overview';
import Login from '../screens/Login';
import Order from '../screens/Order';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Likes from '../screens/Likes';
import Settings from '../screens/Settings';
import Register from '../screens/Register';
import House from '../assets/images/House.svg';
import Maps from '../assets/images/Maps.svg';
import Like from '../assets/images/Like.svg';
import Gear from '../assets/images/Gear.svg';
import PlusCircle from '../assets/images/PlusCircle.svg';
import Add from '../screens/Add.js';
import {View} from 'react-native';

export const stack = [
  {
    component: Overview,
    name: 'Overview',
    header: false,
    key: 1,
  },
  {
    component: Register,
    name: 'Register',
    header: false,
    key: 2,
  },
  {
    component: Login,
    name: 'Login',
    header: false,
    key: 3,
  },
  {
    component: Order,
    name: 'Order',
    header: false,
    key: 4,
  },
];

export const tabs = [
  {
    component: Home,
    name: 'Home',
    header: false,
    icon: House,
    key: 1,
  },
  {
    component: Explore,
    name: 'Explore',
    header: false,
    icon: Maps,
    key: 2,
  },
  {
    component: Add,
    name: 'Add',
    header: false,
    icon: () => (
      <View
        style={{
          position: 'absolute',
          bottom: 30, // space from bottombar
          height: 75,
          width: 80,
          borderRadius: 58,
          borderBottomRightRadius: 100,
          borderBottomLeftRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5F7F9',
        }}>
        <PlusCircle />
      </View>
    ),
    key: 3,
  },
  {
    component: Likes,
    name: 'Likes',
    header: false,
    icon: Like,
    key: 4,
  },
  {
    component: Settings,
    name: 'Settings',
    header: false,
    icon: Gear,

    key: 5,
  },
];
export const links = {
  Order: 'Order',
  Register: 'Register',
  Login: 'Login',
  Overview: 'Overview',
  Tabs: 'Tabs',
};
