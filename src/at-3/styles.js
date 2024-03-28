import { BackHandler, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,

    },
    botao: {
        width: '80%',
        margin: 20,
        borderRadius: 20,
        padding: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    borda: {
        padding: 10,
        border: 1,   
        alignItems: 'center',
        justifyContent: 'center',
        border: 10,
        border: 'solid',
        width: '70%',

    },
    linha:{
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    txtbotao: {
        fontSize: 25,
        color: '#fafafa',
        textAlign: 'center',
    },
    botaocontainer: {
        width: '30%',
        margin: 20,
        
    },
   
});

export default styles;