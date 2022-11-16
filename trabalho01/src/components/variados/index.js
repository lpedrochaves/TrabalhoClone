import { StyleSheet, Image, Text, ScrollView, View, TouchableOpacity } from 'react-native';



function Variados() {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.dimensaoCartoes}>
                <TouchableOpacity
                    style={styles.carouselButton}
                    activeOpacity={0.5}>

                    <View style={styles} />
                    <Text style={styles.textoCartoes}>
                        NuBolão:Concorra a prêmios e palpites grátis.
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dimensaoCartoes}>
                <TouchableOpacity
                    style={styles.carouselButton}
                    activeOpacity={0.5}>

                    <View style={styles} />
                    <Text style={styles.textoCartoes}>
                       Você tem até **** disponíveis para...
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dimensaoCartoes}>
                <TouchableOpacity
                    style={styles.carouselButton}
                    activeOpacity={0.5}>

                    <View style={styles} />
                    <Text style={styles.textoCartoes}>
                        Convide seus amigos para o Nubank e desbloqueie...
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    carouselButton: {

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 80,
        borderRadius: 5,
        margin: 5,
    },

    dimensaoCartoes: {
        width: 350,
        height: 80,
        justifyContent: "center",
        marginLeft: 20,

    },
    textoCartoes: {
        width:"70%",
        marginBottom: 4,
        marginLeft: 20,
        fontWeight: "700",
    },

});

export default Variados;