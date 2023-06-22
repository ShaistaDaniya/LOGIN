// Screen3.js
import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verify: {
    fontSize: 20,
  },
});

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.verify}>Verifying phone number</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Screen3;
