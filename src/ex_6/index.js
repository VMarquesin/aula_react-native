import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';


export default function Exemplo6 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo_6</Text>
            <View style={styles.ladolado}>
                <Input placeholder='Peso' />
                <Input placeholder='Altura' />  
            </View>
            
            <Botao>Calcular</Botao>
        </View>
    );
}