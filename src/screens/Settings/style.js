import { StyleSheet } from 'react-native';
import { theme } from '../../globaisStyles';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 20,
    },
    subTitle: {
      fontSize: 18,
      fontWeight: '400',
      color: theme.text,
      marginBottom: 20,
    },
    inputArea: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });