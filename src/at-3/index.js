import { View , Text , Pressable, Touchable} from 'react-native';

import { useState } from 'react';

import styles from './styles';

import { TouchableOpacity } from 'react-native-web';

export default function Atividade_3() {

    const [numero, setNumero] = useState(0);

    function mensagem () {
        alert('Caculadora simples:')
    }

    function somar() {
        setNumero(numero + 1);
    }
    function subtrair() {
        setNumero(numero - 1);
    }
    function zerar() {
        setNumero(0);
    }

    return(
        <View style={styles.container}>

            <Text style = {styles.titulo}> Atividade 3</Text>

            <TouchableOpacity style= {[styles.botao, styles.botaocontainer]} onPress={() => mensagem()}>
                <Text style= {styles.txtbotao}>Clique Aqui!</Text>
            </TouchableOpacity>
            <View style={styles.borda}>
                    <View style={styles.linha}>
                       

                        <TouchableOpacity  style= {[styles.botao , styles.botaocontainer]} onPress={() => somar()}> 
                            <Text style={styles.txtbotao}> + </Text>
                        </TouchableOpacity>

                        <Text style={styles.titulo}>{numero}</Text>
                        
                        <TouchableOpacity  style= {[styles.botao , styles.botaocontainer]} onPress={() => subtrair()}> 
                            <Text style={styles.txtbotao}> - </Text>
                        </TouchableOpacity>
                    </View>
                
                
            </View>
            <TouchableOpacity  style= {styles.botao} onPress={() => zerar()}> 
                    <Text style={styles.txtbotao}> Zerar </Text>
                </TouchableOpacity>
        </View>
    );
}