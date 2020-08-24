import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';

const Add = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Hi 👋!</Text>
          <Text>Hello from Overlay!</Text>
          <TouchableOpacity onClick={() => setModalVisible(!modalVisible)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F7F9',
    flex: 1,
  },
  content: {
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
