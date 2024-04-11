import { View, Touchable, Text, TextInput } from "react-native";
import { useState } from "react";
import styles from "./styles";

export default function Exemplo_5 (){

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState('');
    
function soma(){
    setTotal(parseFloat(n1) + parseFloat(n2));

}

    return(
    
    <view style={styles.container}>
        <text style={styles.titulo}>Exemplo_5</text>

        <Text style={styles.txtSaida}>Calculadora Básica</Text>

        <Text style={styles.textLabel}>1º número</Text>
        <TextInput
        style={
                [
                    styles.txtEntrada,
                    inFocusN1 ?
                        {
                            borderColor: '#C51162',
                            outline: 'none',
                        }
                    :
                        {}
                ]
            }
            onFocus={() => setIsFocusN1(true)}
            onBlur={() => setIsFocusN1(false)}
            onChangeText={(num2) => setN2(num2)}
            value={n1}
        />

        <Text style={styles.txtSaida}> + </Text>

        <Text style={styles.textLabel}> 2º número</Text>


        <TextInput
        style={
                [
                    styles.txtEntrada,
                    inFocusN2 ?
                        {
                            borderColor: '#C51162',
                            outline: 'none',
                        }
                    :
                        {}
                ]
            }
            onFocus={() => setIsFocusN2(true)}
            onBlur={() => setIsFocusN2(false)}
            onChangeText={(num2) => setN2(num2)}
            value={n2}
        />


    <Text style={[styles.txtSaida, { margin: 0}]}> = </Text>

    <text style={styles.textLabel}> Total </text>

    <TextInput
        style={
            [
                styles.txtEntrada,
                    isFocusTotal ? 
                    {
                        borderColor: '#C51162',
                        outline: 'none',
                    }
                :
                    {}
            ]
        }
        onFocus={() => setIsFocusTotal(true)}
        onBlur={() => setIsFocusTotal(false)}
        editable={false}
        value={total ? parseFloat(total).toFixed(2) : ''}
        />

    </view>
    );
}