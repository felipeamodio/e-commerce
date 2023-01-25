import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './style';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.titulo}>Login</Text>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Principal')}
      >
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

