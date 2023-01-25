import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../components/Produto';
import { produtos } from './produtos';
import { styles } from './style';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';


export default function Principal({navigation}) {
  const ultimosVistos = []

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.tituloArea}>
        <Text style={styles.titulo}>Olá, NOME</Text>
        <View style={styles.carrinhoArea}>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="shopping-cart" size={30} color="#fff" style={styles.carrinhoIcon} />
          </TouchableOpacity>
          <View style={styles.carrinhoQuantidadeArea}>
            <Text style={styles.carrinhoQuantidade}>0</Text>  
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={styles.iconArea} >
            <MaterialCommunityIcons name="settings" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} adicionar={true} />}
        style={styles.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() =>
          <View>
            {ultimosVistos.length > 0 &&
              <View style={styles.ultimosVistos}>
                <Text style={styles.tituloUltimosVistos}>Últimos vistos</Text>
                <FlatList
                  data={ultimosVistos}
                  keyExtractor={item => Math.random()}
                  renderItem={({ item }) => <Produto item={item} adicionar={false} />}
                  style={styles.lista}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>}
            <Text style={[styles.titulo, { paddingLeft: 16 }]}>Produtos</Text>
          </View>
        }
      />
    </View>
  );
}

