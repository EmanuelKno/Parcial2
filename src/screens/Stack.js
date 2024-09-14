import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image  } from 'react-native';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
export default function Stack(){
    const [data, setData] = useState([]);
    const route = useRoute();
    const {id} = route.params;
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(dataApi => setData(dataApi))
    .catch(err => console.error(err));
    console.log(data);
    
     return (
    <View style={styles.card}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text>Status: {data.status}</Text>
        <Text>Species: {data.species}</Text>
        <Text>Gender: {data.gender}</Text>
        <Text>Origin: {data.origin?.name}</Text>
        <Text>Location: {data.location?.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      margin: 10,
      flexDirection: 'row-reverse',
      elevation: 3,
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginLeft: 20,
    },
    infoContainer: {
      justifyContent: 'center',
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });
  