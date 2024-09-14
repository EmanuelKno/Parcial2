import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [data, setData] = useState([]);
    const urlBase = 'https://rickandmortyapi.com/api';
    const navigation = useNavigation();

    fetch(`${urlBase}/character`)
      .then(response => response.json())
      .then(dataApi => setData(dataApi.results))
      .catch(err => console.error(err));

    const renderItem = ({ item }) => (
        <View style={styles.card}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Stack', { id: item.id })}
            >
              <Text style={styles.buttonText}>Ver Detalles</Text>
            </TouchableOpacity>
          </View>
        </View>
      );

    return (
        <View style={styles.container}>
            <View style={styles.containerDataApi}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
    },
    containerDataApi: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: '85%',
      backgroundColor: '#e3e4e6',
      borderRadius: 20,
      padding: 20,
      marginVertical: 12,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 7,
      elevation: 3,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    textContainer: {
      alignItems: 'center',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#007bff',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
  