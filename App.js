import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DataInputScreen from './src/screens/DataInputScreen/DataInputScreen';
import DefinitionScreen from './src/screens/DefinitionScreen/DefinitionScreen';

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //         height: '100%',
    //       }}>
    //       <Text>This is a Dummy App</Text>
    //       {/* <DataInputScreen></DataInputScreen> */}
         
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={DataInputScreen} />
       <Stack.Screen
         name="Definition"
         component={DefinitionScreen}
         definition="'abc'"
       />
     </Stack.Navigator>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
