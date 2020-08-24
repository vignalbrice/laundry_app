import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {stack, tabs} from './Routes';

const LaundryStack = createStackNavigator();
const LaundryTabs = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <LaundryStack.Navigator initialRouteName="Loading">
      {stack.map((route) => (
        <LaundryStack.Screen
          name={route.name}
          component={route.component}
          key={route.key}
          options={{
            headerShown: route.header,
          }}
        />
      ))}
      <LaundryStack.Screen
        name="Tabs"
        component={TabsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </LaundryStack.Navigator>
  );
};
const TabsNavigator = () => {
  return (
    <LaundryTabs.Navigator
      initialRouteName="Loading"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#56d7bc',
        inactiveTintColor: '#c8c9cb',
        tabStyle: {
          marginTop: -15,
        },
        style: {
          height: 79,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}>
      {tabs.map((route) => (
        <LaundryTabs.Screen
          name={route.name}
          component={route.component}
          key={route.key}
          options={{
            headerShown: route.header,
            tabBarIcon: ({color}) => <route.icon fill={color} />,
          }}
        />
      ))}
    </LaundryTabs.Navigator>
  );
};
export default MainNavigator;
