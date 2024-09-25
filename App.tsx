import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import React from 'react';
import FrontPage from './pages/frontPage';
import Form from "./pages/form";

export type RootStackParamList = {
    Form: React.JSX.Element;
    FrontPage: React.JSX.Element;
};

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FrontPage">
                <Stack.Screen
                    name="FrontPage"
                    component={FrontPage}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Form"
                    component={Form}
                    options={{
                        headerShown: true,
                        title: "Digite seus dados"
                    }}
                />
            </Stack.Navigator>
            <StatusBar style="auto"/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
