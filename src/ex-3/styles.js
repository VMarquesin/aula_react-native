import { StyleSheet } from 'react-native';

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
    txtbotao: {
        fontSize: 25,
        color: '#fafafa',
    },
});

export default styles;