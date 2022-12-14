import { StyleSheet, Image, Text, View ,TouchableOpacity} from 'react-native';

function Acompanhe() {
  return (
    <View style={styles.dimensaoCartoes}>
      <Text style={styles.contaText1}>Acompanhe também</Text>
      <TouchableOpacity
        style={styles.carouselButton}
        activeOpacity={0.5}>
        <Image
          source={require('../../assets/genericos/iconMoneyRefund.png')}
          style={styles.imagemCartoes}
        />
        <View style={styles} />
        <Text style={styles.textoCartoes}>
          Assistente de pagamentos
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
    contaText1: {
        marginTop:10,
        marginLeft:20,
        fontWeight: "700",
        fontSize:15
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
        height: 130,
        justifyContent: "center",
        marginLeft: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
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

export default Acompanhe;