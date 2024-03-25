import { View , Text , Pressable, Touchable} from 'react-native';

import { useState } from 'react';

import styles from './styles';

import { TouchableOpacity } from 'react-native-web';

export default function Exemplo_3() {

    const [numero, setNumero] = useState(0);

    function mensagem () {
        alert('Aula de React-Native')
    }

    function incrementar() {
        setNumero(numero + 1);
    }

    return(
        <View style={styles.container}>
            <Text style = {styles.titulo}> Exemplo3</Text>
            <TouchableOpacity style= {styles.botao} onPress={() => mensagem()}>
                <Text style= {styles.txtbotao}>Botão</Text>
            </TouchableOpacity>
            <Text style={styles.titulo}>{numero}</Text>
            <TouchableOpacity  style= {styles.botao} onPress={() => incrementar()}> 
                <Text style={styles.txtbotao}> Incrementar nº </Text>
            </TouchableOpacity>
        </View>
    );
}