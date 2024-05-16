import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';


export default function Exemplo6 () {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState(0.00);
    const mensErro = 'Valores inseridos de forma incorreta!';


    function calcularImc () {
        const tmpImc = peso/(altura*altura);
        setImc(tmpImc);

    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo_6</Text>
            <View style={styles.ladolado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura}/>  
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>
            
            <Botao calcular={calcularImc}>Calcular</Botao>
            <Botao onPress={() => (`${peso} ${altura}`)(setPeso(''), setAltura(''))}>Limpar</Botao>
        </View>
    );
}