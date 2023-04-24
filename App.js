import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  return (
    <View style={styles.container}>
      {/* <Text style={styles.block}>Flex 1</Text>
      <Text style={styles.block}>Flex 2</Text>
      <Text style={styles.block}>Flex 3</Text>
      <Image source={require('./assets/apple.png')} style={{ width: 400, height: 400 }} />
      <Image source={{ uri: 'https://www.pngkey.com/png/full/932-9328480_apples-png-image-red-apple-fruit.png' }}
        style={{ width: 400, height: 400 }} />
      <StatusBar style="auto" /> */}
      <View style={styles.centerBlock}>
        <TextInput
          placeholder="Type here to Add!"
          onChangeText={newText => setCountry(newText)}
          value={country}
          style={styles.input}
        />
        <Button
          onPress={() => {
            setCountries((state) => [...state, country])
            setCountry('')
            console.log(countries)
          }}
          title="Add Me"
        />
      </View>

      <View style={styles.arrayBlock}>
        <View>
          <Text style={styles.heading}>Countries</Text>
        </View>
        <View>
          {
            countries.map((countr, i) => {
              return (
                <Text style={styles.rowItem}>{i + 1 + '. ' + countr}</Text>

              )
            })
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#847834'
  },
  block: {
    padding: 15,
    color: 'red',
    border: '1px solid blue',
    color: '#fff'
  },
  centerBlock: {
    border: '1px solid grey',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    width: '80%'
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    padding: 15
  },
  arrayBlock: {
    color: '#000',
    marginTop: '',
    textAlign: 'center',
    width: '80%',
  },
  heading: {
    fontSize: '2em',
  },
  rowItem: {
    fontSize: '1em',
    color: 'green',
    textAlign: 'left'
  }

});
