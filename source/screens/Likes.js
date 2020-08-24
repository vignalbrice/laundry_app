import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Likes = () => {
  return (
    <View style={styles.view}>
      <Text>Likes 🎉</Text>
    </View>
  );
};

export default Likes;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7F9',
  },
});
