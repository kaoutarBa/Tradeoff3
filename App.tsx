import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [isAEnabled, setIsAEnabled] = useState(true);
  const [isBEnabled, setIsBEnabled] = useState(true);
  const [isCEnabled, setIsCEnabled] = useState(false);


  const handleChangeA = () => {
    let randomBoolean = Math.random() < 0.5;
    if (isAEnabled) {
      setIsBEnabled(true);
      setIsCEnabled(true);
    } else {
      setIsBEnabled(randomBoolean);
      setIsCEnabled(!randomBoolean);
    }
    setIsAEnabled(!isAEnabled);
  }
  const handleChangeB = () => {
    let randomBoolean = Math.random() < 0.5;
    if (isBEnabled) {
      setIsAEnabled(true);
      setIsCEnabled(true);
    } else {
      setIsAEnabled(!randomBoolean);
      setIsCEnabled(randomBoolean);
    }
    setIsBEnabled(!isBEnabled);
  }
  const handleChangeC = () => {
    let randomBoolean = Math.random() < 0.5;
    if (isCEnabled) {
      setIsAEnabled(true);
      setIsBEnabled(true);
    } else {
      setIsAEnabled(!randomBoolean);
      setIsBEnabled(randomBoolean);
    }
    setIsCEnabled(!isCEnabled);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Trade Off 3</Text>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.switchContainer}>
            <Text style={[styles.textStyle, isAEnabled ? { color: '#333' } : { color: '#999' }]}>Time</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#ebe836" }}
              thumbColor={isAEnabled ? "#48be48" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleChangeA}
              value={isAEnabled}
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={[styles.textStyle, isBEnabled ? { color: '#333' } : { color: '#999' }]}>Money</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#ebe836" }}
              thumbColor={isBEnabled ? "#48be48" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleChangeB}
              value={isBEnabled}
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={[styles.textStyle, isCEnabled ? { color: '#333' } : { color: '#999' }]}>Energy</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#ebe836" }}
              thumbColor={isCEnabled ? "#48be48" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleChangeC}
              value={isCEnabled}
            />
          </View>
        </View>
        <Text style={styles.textStyle}>Choose yours</Text>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f4bd5b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleContainer: {
    margin: 40,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
  textStyle: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#333'
  },
  sectionContainer: {
    marginBottom: 40,
  }
});
