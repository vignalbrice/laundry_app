import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Back from '../assets/images/Back.svg';
import {constants} from '../constants/constants';
import Pattern from '../assets/images/Pattern.png';
import {links} from '../navigation/Routes';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [borderColorEmail, setBorderColorEmail] = React.useState(
    'rgba(74,77,84,0.2)',
  );
  const [borderColorPassword, setBorderColorPassword] = React.useState(
    'rgba(74,77,84,0.2)',
  );

  const onFocusEmail = () => {
    setBorderColorEmail('#56D7BC');
  };
  const onFocusPassword = () => {
    setBorderColorPassword('#56D7BC');
  };
  const onBlurEmail = () => {
    setBorderColorEmail('rgba(74,77,84,0.2)');
  };
  const onBlurPassword = () => {
    setBorderColorPassword('rgba(74,77,84,0.2)');
  };
  return (
    <View style={styles.view}>
      <View style={styles.mainView}>
        <View
          style={{position: 'absolute', top: constants.height - 750, right: 0}}>
          <Image
            source={Pattern}
            style={{width: 450, height: 970, transform: [{rotate: '1deg'}]}}
          />
        </View>
        <View style={styles.mainSubView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back width={19.26} height={16} />
          </TouchableOpacity>
          <View style={{marginTop: 30}}>
            <Text
              style={{fontFamily: 'Circe-Bold', fontSize: 26, color: '#FFF'}}>
              Log in to your account
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.secondView}>
        <View style={styles.secondViewContent}>
          <View style={{marginBottom: 10}}>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput
              placeholder="Please enter your email"
              onChangeText={(email) => setEmail(email)}
              value={email}
              style={[styles.inputStyle, {borderColor: borderColorEmail}]}
              onFocus={() => onFocusEmail()}
              onBlur={() => onBlurEmail()}
              placeholderTextColor={'#131621'}
            />
          </View>
          <View>
            <Text style={styles.placeholderText}>Password</Text>
            <TextInput
              placeholder="Please enter your email"
              onChangeText={(password) => setEmail(password)}
              style={[styles.inputStyle, {borderColor: borderColorPassword}]}
              onFocus={() => onFocusPassword()}
              onBlur={() => onBlurPassword()}
              secureTextEntry
              value={password}
              placeholderTextColor={'#131621'}
            />
            <TouchableOpacity
              style={{alignSelf: 'flex-end', marginVertical: 10}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Circe-Bold',
                  color: '#56D7BC',
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logInButton}
              onPress={() => navigation.navigate(links.Tabs)}>
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Circe-Bold',
                  fontSize: 18,
                }}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#56D7BC',
  },
  mainView: {
    flex: 2,
    backgroundColor: '#56D7BC',
  },
  mainSubView: {
    padding: 30,
    marginTop: 20,
  },
  secondView: {
    flex: 2,
    backgroundColor: '#F5F7F9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  secondViewContent: {
    padding: 30,
  },
  placeholderText: {
    fontFamily: 'Circe',
    fontSize: 16,
    color: '#131621',
    marginVertical: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  logInButton: {
    backgroundColor: '#56D7BC',
    alignItems: 'center',
    marginVertical: 25,
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
});
