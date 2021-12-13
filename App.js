import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//defind all screen name in router
import router from './src/screen';

//Create stack for navigation
const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {Object.keys(router).map(item => (
            <Stack.Screen key={item} name={item} component={router[item]}
              options={{ headerShown: item !== 'SplashScreen' ? true : false, headerStyle: { backgroundColor: '#003f5c' }, headerTintColor: 'white', }} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
