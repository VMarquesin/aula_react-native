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
        marginBottom: 20,
        padding: 10,

    },
    botao: {
        width: '60%',
        borderRadius: 20,
        padding: 10,
        mardin: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    borda: {
        marginTop: 20,
       padding: 20,
        border: 1,   
        alignItems: 'center',
        justifyContent: 'center',
        border: 10,
        border: 'solid',
        width: '50%',

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
    },
   
});

export default styles;