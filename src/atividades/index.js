import { View, Pressable, Text } from 'react-native'; 

export default function Atividades({ navigation }) {
    return(
        <View>
            <Pressable onPress={() => navigation.navigate('Ativ-1')}>
                <Text>Atividade 1</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('At3')}>
                <Text>Atividade 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atv-5')}>
                <Text>Atividade 5</Text>
            </Pressable>
            
        </View>
    );
}