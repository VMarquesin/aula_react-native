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
    const [abaixo, setAbaixo] = useState();

    function calcularImc () {
        const tmpImc = peso/(altura*altura);
        setImc (tmpImc) 
        if(tmpImc < 18.5){
            setAbaixo ('abaixo do peso')
        } else if (tmpImc > 18.5 && tmpImc < 24.9){
            setAbaixo ('Peso normal')
        } else if (tmpImc > 25 && tmpImc < 29.9){
            setAbaixo('Sobrepeso')
        } else if (tmpImc > 30 && tmpImc < 34.9){
            setAbaixo('Obesidade grau 1')
        } else if (tmpImc > 35 && tmpImc <39.9){
            setAbaixo('Obesidade grau 2')
        } else if (tmpImc > 40){
            setAbaixo('Obesidade grau 3')
        };
   
        // if(tmpImc < 18.5){
        //     setAbaixo ('abaixo do peso')
        // };
   
        // if(tmpImc < 18.5){
        //     setAbaixo ('abaixo do peso')
        // };
   
        // if(tmpImc < 18.5){
        //     setAbaixo ('abaixo do peso')
        // };
   
   
    }

    // function abaixoPeso(){
    //     abaixo (calcularImc < 18.5) ('Abaixo do peso');
    // }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo_6</Text>
            <View style={styles.ladolado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura}/>  
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <text style={styles.imc}> {abaixo} </text>
            
            <Botao calcular={calcularImc}>Calcular</Botao>
           
        </View>
    );
}