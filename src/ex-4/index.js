// import { useState } from 'react';

// import { View, Text, TextInput, Pressable } from 'react-native';

// import styles from './styles';

// export default function Exemplo4(){

//     const [txtDigitado, setTxtDigitado] = useState('Texto digitado');
//     const [txt2, setTxt2] = useState('');
//     const [txtTela, setTxtTela] = useState('');

//     function atualizaTextoHandle (txt) {
//         setTxtDigitado(txt);
//         setTxt2 (txt2)
//         setTxtTela(txt2);
//     }

//     return(
//         <View style={styles.container}>
//             <Text style={styles.titulo}>Exemplo 4</Text>

//             <Text style={styles.texto}>{txtDigitado}</Text>

//             <Text style={styles.texto}>Nome</Text>
            
//             <TextInput 
//             style={styles.input}
//             onChangeText={(valor) => atualizaTextoHandle(valor)}
//             />

//             {/* <View style={styles.linha}></View> */}

//             <Text style={styles.texto}>Sobrenome</Text>

//             <Text style={styles.texto}>{txtTela}</Text>

//             <TextInput 
//                 style={styles.input}
//                 onChangeText={(vlr) => setTxt2(vlr)}
//                 rvalue={txt2}
//             />

//             <Pressable style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}>
//                 <text style={styles.txtBotao}>Exibir texto</text>
//             </Pressable>


//         </View>
//     );
// }
import { View, Text, TextInput, Pressable } from "react-native";

import { useState } from 'react';

import styles from "./styles";

export default function atividade_4 () {

    const [txtDigitado, setTxtDigitado] = useState('Insira seu NOME e SOBRENOME');
    const [txt2, setTxt2] = useState('');
    const [txtTela, setTxtTela] = useState('');

    function ResultadoNome (txt) {
        setTxtDigitado(txt);
        setTxtTela(txtTela)
        setTxt2(txt2);
    }

    return(
        <View style={styles.container}>

        <Text style={styles.titulo}>Atividade 4</Text>

        <Text style={styles.texto}>{txtDigitado}</Text>

        <Text style={styles.texto}>Nome :</Text>

        <TextInput
        style={styles.input}
        onChangeText={(vlr) => setTxtTela(vlr)}
        value={txtTela}
        />

        <Text style={styles.texto}>Sobrenome :</Text>

        <TextInput
        style={styles.input}
        onChangeText={(vlr) => setTxt2(vlr)}
        value={txt2}
        />

        <Pressable
        style={({ pressed }) => (pressed ? [styles.botao, styles.botaoPress] : styles.botao)}
        onPress={() => ResultadoNome(`${txtTela} ${txt2}`)(setTxt2(''), setTxtTela(''))}
        >
        <Text style={styles.txtBotao}>Exibir texto</Text>
        </Pressable>
    </View>
    );
}