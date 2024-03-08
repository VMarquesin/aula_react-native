import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import logo from './img/logo.png';

export default function Atividade1 () { 
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>
            <Image source={logo} style={{width: '100%' , height: '15%'}}/>
                Atividade 1
            </Text>
        </View>
    );
}
