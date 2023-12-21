import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Deployment Test</Text>
      <Button title="Next Page" onPress={() => navigation.navigate('Next')} />
    </SafeAreaView>
  );
};

const NextPage = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>The Next Page</Text>
      <Button
        title="Press here to go back"
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Next" component={NextPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default App;
