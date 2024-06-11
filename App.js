import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import Mensagem from './src/ex-2';
// import Atividade1 from './src/ativ-1';
// import Exemplo_3 from './src/ex-3';
// import Atividade_3 from './src/at-3';
// import Exemplo_4 from './src/ex-4';
// import Exemplo_5 from './src/ex-5';
// import Atividade_5 from './src/atv-5';
// import Exemplo6 from './src/ex_6';
import Exemplo7 from './src/ex_7';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo7 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1C1C1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});
