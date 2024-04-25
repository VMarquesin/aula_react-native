import { Pressable, Text } from 'react-native';

import styles from './styles';

export default function Botao({operacao, children, styles}) { 
    
    return (
        <Pressable
            onPress={() => operacao()}
            style={
                ({ pressed }) => pressed ?
                    [styles.button, styles.buttonTouch, ]
                    :
                    [styles.button, ]
            }
        >
            <Text style={styles.textButton}> {children} </Text>
        </Pressable>
    )
}
// botaozao ? styles.botaoGrande : ''
// botaozao ? styles.botaoGrande : ''