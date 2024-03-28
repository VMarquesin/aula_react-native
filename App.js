import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import Mensagem from './src/ex-2';
// import Atividade1 from './src/ativ-1';
// import Exemplo_3 from './src/ex-3';
// import Atividade_3 from './src/at-3';
import Exemplo_4 from './src/ex-4';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_4 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});
