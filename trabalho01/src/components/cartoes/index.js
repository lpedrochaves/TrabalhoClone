import { StyleSheet, Image, Text, View ,TouchableOpacity} from 'react-native';


function Cartoes() {
    return (
        <View style={styles.dimensaoCartoes}>
            <TouchableOpacity
                style={styles.carouselButton}
                activeOpacity={0.5}>
                <Image
                    source={require('../../assets/genericos/iconCreditCard.png')}
                    style={styles.imagemCartoes}
                />
                <View style={styles} />
                <Text style={styles.textoCartoes}>
                    Meus Cartões
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    carouselButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    cartoes: {
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 55,
        width: 55,
        borderRadius: 50,
        margin: 5,
    },
    cartoes2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#9400d3',
        color: "white",
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 50,
        width: "70%",
        borderRadius: 5,
        margin: 5,
    },
    dimensaoCartoes: {
        width: "90%",
        height: 90,
        justifyContent: "center",
        marginLeft: 20,
        // borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,

    },
    textoCartoes: {
        marginBottom: 4,
        marginLeft: 20,
        fontWeight: "700",
    },
    textoCartoes2: {
        marginBottom: 4,
        marginLeft: 20,
        fontWeight: "700",
        color: "white",
    },
    imagemCartoes: {
        padding: 10,
        marginLeft: 45
    },

});

export default Cartoes;