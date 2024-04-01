import { useState } from 'react';

import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo4(){

    const [txtDigitado, setTxtDigitado] = useState('Texto digitado');
    const [txt2, setTxt2] = useState('');
    const [txtTela, setTxtTela] = useState('');

    function atualizaTextoHandle (txt) {
        setTxtDigitado(txt);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.texto}>{txtDigitado}</Text>

            <TextInput 
            style={styles.input}
            onChangeText={(valor) => atualizaTextoHandle(valor)}
            />

            <View style={styles.linha}></View>

            

            <Text style={styles.texto}>{setTxtTela}</Text>

            <TextInput 
                style={styles.input}
                onChangeText={(vlr) => setTxt2(vlr)}
                rvalue={txt2}
            />

            <Pressable style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}>
                <text style={styles.txtBotao}>Exibir texto</text>
            </Pressable>


        </View>
    );
}