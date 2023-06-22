import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './screen1.jsx';
import Screen2 from './screen2.jsx';
import Screen3 from './screen3.jsx';
import Screen4 from './screen4.jsx';
import Screen4 from './screen5.jsx';
import Screen4 from './screen6.jsx';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{
            title: 'Screen 1',
          }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            title: 'Screen 2',
          }}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{
            title: 'Screen 3',
          }}
        />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{
            title: 'Screen 4',
          }}
        />
        <Stack.Screen
          name="Screen5"
          component={Screen4}
          options={{
            title: 'Screen 5',
          }}
        />
        <Stack.Screen
          name="Screen6"
          component={Screen4}
          options={{
            title: 'Screen 6',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
