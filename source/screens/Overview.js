import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Illustration from '../assets/images/Illustration.svg';
import Clothes from '../assets/images/Clothes.svg';
import {constants} from '../constants/constants';
import {links} from '../navigation/Routes';

const Overview = ({navigation}) => {
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor="#56D7BC" barStyle="light-content" animated />
      <View style={styles.mainView}>
        <View style={{position: 'absolute', top: constants.height - 795}}>
          <Clothes style={{width: 472, height: 131}} />
        </View>
        <View>
          <Illustration width={228} height={314} />
        </View>
      </View>
      <View style={styles.secondView}>
        <View style={styles.secondViewContent}>
          <View style={{marginTop: 10}}>
            <Text style={styles.title}>Welcome to our app!</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.subtitle}>
              This is the first version of our laundry app. Please sign in or
              create an account below.
            </Text>
          </View>
          <View style={{marginTop: 50}}>
            <TouchableOpacity
              style={styles.logInButton}
              onPress={() => navigation.navigate(links.Login)}>
              <Text
                style={{
                  color: '#56D7BC',
                  fontFamily: 'Circe-Bold',
                  fontSize: 18,
                }}>
                Log in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate(links.Register)}>
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Circe-Bold',
                  fontSize: 18,
                }}>
                Create an account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#56D7BC',
  },
  mainView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#56D7BC',
  },
  secondView: {
    flex: 1.6,
    backgroundColor: '#F5F7F9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  secondViewContent: {
    padding: 30,
  },
  title: {
    fontFamily: 'Circe-Bold',
    fontSize: 26,
  },
  subtitle: {
    fontFamily: 'Circe',
    fontSize: 16,
    fontWeight: '600',
    maxWidth: 300,
  },
  logInButton: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#56D7BC',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  registerButton: {
    backgroundColor: '#56D7BC',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginVertical: 15,
    shadowColor: '#56D7BC',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
});
