import { React, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleLogin = () => {
    navigation.navigate('SelectPage');
  };

  const handleRegister = () => {
    navigation.navigate('RegisterPage');
  };

return (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      value={username}
      placeholder="Username"
      onChangeText={setUsername}
      autoCapitalize="none"
    />
    <TextInput
      style={styles.input}
      value={email}
      placeholder="E-mail"
      onChangeText={setEmail}
      autoCapitalize="none"
    />
    <TextInput
      style={styles.input}
      value={password}
      placeholder="Password"
      secureTextEntry
      onChangeText={setPassword}
    />
    <TextInput
      style={styles.input}
      value={confirmPassword}
      placeholder="Confirm Password"
      secureTextEntry
      onChangeText={setConfirmPassword}
    />
    <TouchableOpacity title="Register" style={styles.button} onPress={handleRegister} >
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:  1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    padding:  20,
  },

  input: {
    height:  40,
    borderColor: '#000000',
    borderWidth:  1,
    marginBottom:  10,
    padding:  10,
  },

  button: {
    height:  50,
    backgroundColor: '#000000',
    borderWidth:  1,
    marginTop:  10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RegisterPage;