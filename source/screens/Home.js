import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Back from '../assets/images/Back.svg';
import Avatar from '../assets/images/Avatar.svg';
import Building from '../assets/images/Building.svg';
import Tower from '../assets/images/Tower.svg';
import Pattern from '../assets/images/Pattern.png';
import Ellipse from '../assets/images/Ellipse.svg';
import Clock from '../assets/images/Clock.svg';
import {constants} from '../constants/constants';

const Home = ({navigation}) => {
  const [data, setData] = React.useState([
    {
      street: 'Kings Street 20,',
      city: 'Bucharest',
    },
    {
      street: 'Victory Square 18,',
      city: 'Bucharest',
    },
  ]);

  const Item = ({street, city, index}) => (
    <View style={index === 0 ? styles.item : styles.item2}>
      <Text style={styles.street}>{street}</Text>
      <Text style={styles.city}>{city}</Text>
      {index === 0 ? (
        <View style={{marginTop: -66, marginLeft: -20}}>
          <Building />
        </View>
      ) : (
        <View style={{marginTop: -66, marginLeft: 25}}>
          <Tower />
        </View>
      )}
    </View>
  );
  const renderItem = ({item, index}) => (
    <Item street={item.street} city={item.city} index={index} />
  );

  return (
    <View style={styles.view}>
      <View style={styles.mainView}>
        <View
          style={{position: 'absolute', top: constants.height - 750, right: 0}}>
          <Image
            source={Pattern}
            style={{width: 450, height: 850, transform: [{rotate: '1deg'}]}}
          />
        </View>
        <View style={styles.mainSubView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back width={19.26} height={16} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View
              style={{
                marginTop: 30,
                flex: 4,
              }}>
              <Text style={{fontFamily: 'Circe', fontSize: 26, color: '#FFF'}}>
                Welcome back,
              </Text>
              <Text
                style={{fontFamily: 'Circe-Bold', fontSize: 26, color: '#FFF'}}>
                Mihai!
              </Text>
            </View>
            <View style={{flex: 1.5, marginTop: 1}}>
              <Avatar width={130} height={130} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.secondView}>
        <View style={styles.secondViewContent}>
          <Text
            style={{
              color: '#131621',
              fontFamily: 'Circe',
              fontSize: 22,
              marginBottom: 10,
            }}>
            New locations
          </Text>
          <SafeAreaView style={styles.container}>
            <FlatList
              horizontal
              data={data}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
            />
          </SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Circe',
                fontSize: 22,
                color: '#131621',
                flex: 1,
              }}>
              Latest Orders
            </Text>
            <Text
              style={{
                fontFamily: 'Circe-Bold',
                fontSize: 14,
                color: '#56D7BC',
                marginTop: 6,
              }}>
              View all orders
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 8,
              backgroundColor: '#FFF',
              height: 121,
              padding: 15,
              flexDirection: 'row',
              marginVertical: 10,
              borderWidth: 1,
              borderColor: '#DCE9F5',
            }}
            onPress={() => navigation.navigate('Order')}>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  backgroundColor: 'rgba(221,40,81,0.1)',
                  width: 37,
                  height: 37,
                  borderRadius: 50,
                }}>
                <Ellipse style={{marginTop: 10, marginLeft: 10}} />
              </View>
            </View>
            <View style={{flexDirection: 'column', marginVertical: 6}}>
              <Text
                style={{
                  fontFamily: 'Circe',
                  fontSize: 20,
                  color: '#131621',
                  marginBottom: 10,
                }}>
                Picking up order
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'space-between',
                }}>
                <Text
                  style={{
                    marginRight: 10,
                    fontFamily: 'Circe',
                    fontSize: 14,
                    color: 'rgba(74,77,84,0.7)',
                  }}>
                  Placed on:
                </Text>
                <Text
                  style={{fontFamily: 'Circe', fontSize: 14, color: '#131621'}}>
                  12th Jan 2020
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignContent: 'space-between'}}>
                <Text
                  style={{
                    marginRight: 15,
                    fontFamily: 'Circe',
                    fontSize: 14,
                    color: 'rgba(74,77,84,0.7)',
                  }}>
                  Placed at:
                </Text>
                <Text
                  style={{fontFamily: 'Circe', fontSize: 14, color: '#131621'}}>
                  New Times Square
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: '#FFF',
              height: 121,
              padding: 15,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#DCE9F5',
            }}>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  backgroundColor: 'rgba(255,99,2,0.1)',
                  width: 37,
                  height: 37,
                  borderRadius: 50,
                }}>
                <Clock style={{marginTop: 10, marginLeft: 10}} />
              </View>
            </View>
            <View style={{flexDirection: 'column', marginVertical: 6}}>
              <Text
                style={{
                  fontFamily: 'Circe',
                  fontSize: 20,
                  color: '#131621',
                  marginBottom: 10,
                }}>
                Delivering order
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'space-between',
                }}>
                <Text
                  style={{
                    marginRight: 10,
                    fontFamily: 'Circe',
                    fontSize: 14,
                    color: 'rgba(74,77,84,0.7)',
                  }}>
                  Arrival on:
                </Text>
                <Text
                  style={{fontFamily: 'Circe', fontSize: 14, color: '#131621'}}>
                  14th Jan 2020
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignContent: 'space-between'}}>
                <Text
                  style={{
                    marginRight: 15,
                    fontFamily: 'Circe',
                    fontSize: 14,
                    color: 'rgba(74,77,84,0.7)',
                  }}>
                  Arrival place:
                </Text>
                <Text
                  style={{fontFamily: 'Circe', fontSize: 14, color: '#131621'}}>
                  Victoria Square
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#56D7BC',
  },
  mainView: {
    flex: 1,
    backgroundColor: '#56D7BC',
  },
  mainSubView: {
    padding: 30,
  },
  secondView: {
    flex: 3,
    backgroundColor: '#F5F7F9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  secondViewContent: {
    padding: 30,
  },
  item: {
    backgroundColor: '#5945C7',
    color: '#FFF',
    padding: 20,
    width: 200,
    height: 90,
    borderRadius: 8,
    marginRight: 16,
  },
  street: {
    fontFamily: 'Circe-Bold',
    fontSize: 16,
    color: '#FFF',
  },
  city: {
    fontFamily: 'Circe',
    fontSize: 16,
    color: '#FFF',
  },
  item2: {
    backgroundColor: '#ED7429',
    color: '#FFF',
    padding: 20,
    width: 200,
    height: 90,
    borderRadius: 8,
  },
});
