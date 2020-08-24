import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Explore = () => {
  return (
    <View style={styles.view}>
      <Text>Explore 🎉</Text>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7F9',
  },
});
