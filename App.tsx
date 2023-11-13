import {StatusBar} from 'react-native';
import React from 'react';
import Landing from './src/screens/Landing';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/screens/Register';
import LogIn from './src/screens/LogIn';
import ForgotPassword from './src/screens/ForgotPassword';
import PasswordReset from './src/screens/PasswordReset';
import CreateNewPassword from './src/screens/CreateNewPassword';
import PasswordChanged from './src/screens/PasswordChanged';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landingpage">
          <Stack.Screen
            name="Loginpage"
            component={LogIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Landingpage"
            component={Landing}
          />

          <Stack.Screen
            name="RegisterPage"
            component={Register}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="PasswordReset"
            component={PasswordReset}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="PasswordChanged"
            component={PasswordChanged}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
