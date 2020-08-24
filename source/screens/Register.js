import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Register = () => {
  return (
    <View style={styles.view}>
      <Text>Register 🎉</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7F9',
  },
});
