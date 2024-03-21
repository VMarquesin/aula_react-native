import { View , Text , Pressable, Touchable } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-web';

export default function Exemplo_3() {

    function mensagem () {
        alert('Aula de React-Native')
    }

    return(
        <View style={styles.container}>
            <Text style = {styles.titulo}> Exemplo3</Text>
            <TouchableOpacity style= {styles.botao} onPress={() => mensagem()}>
                <Text style= {styles.txtbotao}>Botão</Text>
            </TouchableOpacity>
        </View>
    );
}