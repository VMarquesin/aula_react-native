import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Atividades from '../atividades';
import Atividade1 from '../ativ-1';
import Atividade3 from '../at-3';
import Atividade4 from '../atv-5';

const Stack = createNativeStackNavigator();

export default function NavegacaoStackAtv() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Atividades" component={Atividades} />
            <Stack.Screen name="Atv1" component={Atividade1} />
            <Stack.Screen name="Atv3" component={Atividade3} />
            <Stack.Screen name="Atv4" component={Atividade4} />
        </Stack.Navigator>
    );
}
