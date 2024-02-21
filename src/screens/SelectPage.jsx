import { React } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const SelectPage  = ({ navigation }) => {

  const handleItemPress = (item) => {
    console.log('Item Pressed:', item);
    navigation.navigate(item);
  };

  return (
    <View style={styles.container}>

        <Image
          source={{ uri: 'https://www.nicepng.com/png/detail/120-1208294_png-library-library-diesel-works-mechanic-logo-png.png' }}
          style={styles.logo}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleItemPress('ListPage')}
        >
          <Text style={styles.buttonText}>
            Lista de Manutenções
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          //onPress={() => handleItemPress('')}
        >
          <Text style={styles.buttonText}>
            Identificação de problemas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          //onPress={() => handleItemPress('')}
        >
          <Text style={styles.buttonText}>
            Histórico de problemas
          </Text>
        </TouchableOpacity>
        
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:  1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    padding:  50,
  },
  logo: {
    width: 300,
    height: 300,
    backgroundColor: '#000000',
    marginBottom: 10
  },
  button: {
    height:  100,
    width: 360,
    backgroundColor: '#000000',
    borderWidth:  1,
    marginTop:  20,
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default SelectPage;
