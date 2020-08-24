import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {constants} from '../constants/constants';
import Pattern from '../assets/images/Pattern.png';
import Back from '../assets/images/Back.svg';
import LaundryIcon from '../assets/images/LaundryIcon.svg';

const Order = ({navigation}) => {
  const [washing, setWashing] = React.useState([
    {
      number: 3,
      name: 'T-Shirts (man)',
      price: '$30.00',
    },
    {
      number: 2,
      name: 'Shirts (man)',
      price: '$40.00',
    },
    {
      number: 4,
      name: 'Pants (man)',
      price: '$80.00',
    },
    {
      number: 1,
      name: 'Jeans (man)',
      price: '$20.00',
    },
  ]);
  const [ironing, setIroning] = React.useState([
    {
      number: 3,
      name: 'T-Shirts (man)',
      price: '$30.00',
    },
  ]);
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
          <View style={{marginVertical: 20}}>
            <Text style={{fontFamily: 'Circe', fontSize: 26, color: '#FFF'}}>
              Details about
            </Text>
            <Text
              style={{fontFamily: 'Circe-Bold', fontSize: 26, color: '#FFF'}}>
              Order #132
            </Text>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#F5F7F9',
                padding: 20,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(143,148,162,1)',
                borderStyle: 'dotted',
                borderRadius: 1,
              }}>
              <Text
                style={{
                  fontFamily: 'Circe-Bold',
                  fontSize: 18,
                  color: '#4A4D54',
                  marginBottom: 10,
                }}>
                Order Details
              </Text>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontFamily: 'Circe-Bold',
                  fontSize: 13,
                  color: '#8F94A2',
                  marginBottom: 10,
                }}>
                Washing and folding
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'space-between',
                }}>
                {washing.map((w) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'space-between',
                      marginVertical: 3,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Circe-Bold',
                        fontSize: 15,
                        color: '#4A4D54',
                        marginRight: 5,
                      }}>
                      {w.number}
                    </Text>
                    <Text
                      style={{
                        color: '#8F94A2',
                        fontFamily: 'Circe',
                        fontSize: 13,
                        marginRight: 5,
                      }}>
                      x
                    </Text>
                    <Text
                      style={{
                        color: '#8F94A2',
                        fontFamily: 'Circe',
                        fontSize: 15,
                        flex: 1,
                      }}>
                      {w.name}
                    </Text>
                    <Text
                      style={{
                        color: '#131621',
                        fontFamily: 'Circe',
                        fontSize: 15,
                      }}>
                      {w.price}
                    </Text>
                  </View>
                ))}
              </View>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontFamily: 'Circe-Bold',
                  fontSize: 13,
                  color: '#8F94A2',
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                Ironing
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'space-between',
                }}>
                {ironing.map((i) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'space-between',
                      marginVertical: 3,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Circe-Bold',
                        fontSize: 15,
                        color: '#4A4D54',
                        marginRight: 5,
                      }}>
                      {i.number}
                    </Text>
                    <Text
                      style={{
                        color: '#8F94A2',
                        fontFamily: 'Circe',
                        fontSize: 13,
                        marginRight: 5,
                      }}>
                      x
                    </Text>
                    <Text
                      style={{
                        color: '#8F94A2',
                        fontFamily: 'Circe',
                        fontSize: 15,
                        flex: 1,
                      }}>
                      {i.name}
                    </Text>
                    <Text
                      style={{
                        color: '#131621',
                        fontFamily: 'Circe',
                        fontSize: 15,
                      }}>
                      {i.price}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#FFF',
                padding: 20,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'space-between',
                    marginVertical: 3,
                  }}>
                  <Text
                    style={{
                      color: '#8F94A2',
                      fontFamily: 'Circe',
                      fontSize: 15,
                      flex: 1,
                    }}>
                    Subtotal
                  </Text>
                  <Text
                    style={{
                      color: '#131621',
                      fontFamily: 'Circe',
                      fontSize: 15,
                    }}>
                    $200.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'space-between',
                    marginVertical: 3,
                  }}>
                  <Text
                    style={{
                      color: '#8F94A2',
                      fontFamily: 'Circe',
                      fontSize: 15,
                      flex: 1,
                    }}>
                    Delivery
                  </Text>
                  <Text
                    style={{
                      color: '#131621',
                      fontFamily: 'Circe',
                      fontSize: 15,
                    }}>
                    $25.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'space-between',
                    marginVertical: 3,
                  }}>
                  <Text
                    style={{
                      color: '#131621',
                      fontFamily: 'Circe-Bold',
                      fontSize: 20,
                      flex: 1,
                    }}>
                    Total
                  </Text>
                  <Text
                    style={{
                      color: '#56D7BC',
                      fontFamily: 'Circe-Bold',
                      fontSize: 20,
                    }}>
                    $225.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              padding: 20,
              borderRadius: 10,
              maxHeight: 127,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#4A4D54',
                fontFamily: 'Circe-Bold',
                fontSize: 18,
                marginBottom: 10,
              }}>
              Your clothes are now washing.
            </Text>
            <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'rgba(74,77,84,0.7)',
                    fontFamily: 'Circe',
                    fontSize: 14,
                  }}>
                  Estimated delivery:
                </Text>
                <Text
                  style={{
                    color: 'rgba(74,77,84,1)',
                    fontFamily: 'Circe',
                    fontSize: 14,
                    marginBottom: 10,
                  }}>
                  12th Jan 2020
                </Text>
              </View>
              <View style={{marginTop: -6}}>
                <LaundryIcon />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#56D7BC',
  },
  mainSubView: {
    padding: 30,
    marginTop: 20,
  },
});
