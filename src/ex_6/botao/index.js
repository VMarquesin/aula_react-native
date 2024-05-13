import { Pressable, Text } from "react-native";
import styles from "./styles";

export default function Botao ({children}) {
    return (
        <Pressable style={
            ({pressed}) => pressed ?
                [styles.Botao, styles.btnPress]
            :
                styles.Botao
        }
        
        >
            <Text style={styles.txtBotao}>{children}</Text>
        </Pressable>
    )
}