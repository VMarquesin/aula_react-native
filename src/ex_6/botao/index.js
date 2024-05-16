import { Pressable, Text } from "react-native";
import styles from "./styles";

export default function Botao ({children,calcular}) {
    return (
        <Pressable style={
            ({pressed}) => pressed ?
                [styles.Botao, styles.btnPress]
            :
                styles.Botao
        }
        
        onPress={() => calcular()}
        >
            <Text style={styles.txtBotao}>{children}</Text>
        </Pressable>
    )
}