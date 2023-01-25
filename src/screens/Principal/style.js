import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { theme } from '../../globaisStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.title,
  },
  lista: {
    flex: 1,
    width: '100%',
  },
  ultimosVistos: {
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: theme.lastSeems,
  },
  tituloUltimosVistos: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.title,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  carrinhoArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  carrinhoIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.title,
  },
  carrinhoQuantidadeArea: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carrinhoQuantidade: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#fff",
  },
  iconArea: {
    marginLeft: 16,
  },
  icon: {
    color: theme.text,
    fontSize: 30,
  },
});