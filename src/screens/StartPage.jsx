import { React } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const StartPage = ({ navigation }) => {

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
          style={styles.Button}
          onPress={() => handleItemPress('LoginPage')}
      >
        <Text style={styles.Text}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.Text}>*PROTÓTIPO*</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    //justifyContent: 'center',
    alignItems: 'center',
  },

  Button: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginBottom: 40,
    borderColor: '#000000',
    borderWidth: 4,
    width: 300,
    alignItems: 'center',
  },

  logo: {
    width: 300,
    height: 300,
    backgroundColor: '#000000',
    marginTop: 100,
    marginBottom: 50,
  },

  Text: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
  }
});

export default StartPage;