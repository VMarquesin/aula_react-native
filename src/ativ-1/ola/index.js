import { Text } from 'react-native';

import styles from './styles';

// export default function Ola ({children}){
export default function Ola ({nomepessoa}){
    return( 
    <Text style={styles.txtola}>
        {/* Olá {children} */}
        Olá {nomepessoa}
    </Text>
    );
}