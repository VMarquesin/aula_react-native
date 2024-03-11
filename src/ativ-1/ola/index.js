import { Text } from 'react-native';

import styles from './styles';

export default function ola (){
    return( 
    <Text>
        Olá
    </Text>
    <Text style={styles.interacao}>
        olá, Mario!
    </Text>
    <Text style={styles.interacao}>
        olá, Bruna!
    </Text>
    <Text style={styles.interacao}>
        olá, Maria!
    </Text>
    <Text style={styles.interacao}>
        olá, João!
    </Text>
    );
}