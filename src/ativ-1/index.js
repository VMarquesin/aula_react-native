import { View, Text, Image } from 'react-native';

import Ola from './ola/index';

import styles from './styles';

import logo from '../../assets/ativ-1logo.png';  

// const Saudacoes = (props) => {
//     return(
//         <Text style={{styles.interacao}}>
//             Olá {props.name}
//         </Text>

//     )
// }

export default function Atividade1 () { 
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
            <Image source={logo} style={styles.Image}/>
                Atividade 1
            </Text>  
            <Ola nomepessoa={'Mario'}/>  
            <Ola nomepessoa={'Bruna'}/>  
            <Ola nomepessoa={'Maria'}/>  
            <Ola nomepessoa={'João'}/>  
            <Ola nomepessoa={'Cleber'}/>          


            {/* <ola>Mario</ola> */}
        </View>
    );
}
