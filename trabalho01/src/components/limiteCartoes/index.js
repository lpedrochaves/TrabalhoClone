import { Image, Text, View,StyleSheet } from 'react-native';

function LimiteCartoes() {
    return (
      <View>
        <View style={styles.contaContainer}>
          <Text style={styles.highlight}>Cartão de Crédito</Text>
          <Image style={styles.contaImage} source={require('../../assets/genericos/iconArrowright.png')} />
        </View>
        <Text style={styles.contaText2}>Fatura Atual</Text>
        <Text style={styles.contaText1}>R$ 527,43</Text>
        <Text style={styles.contaText2}>Limite disponível atual de R$ 472,57</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    contaContainer: {
        marginTop: 20,
        marginLeft: 20,
        width: "80%",
        justifyContent: "space-between",
        flexDirection: "row",
        fontWeight: "700",
    
      },
      contaText1: {
        marginTop:10,
        marginLeft:20,
        fontWeight: "700"
      },
      contaText2: {
        marginTop:10,
        marginLeft:20,
        color: "gray"
      },
      contaImage: {
        alignSelf: "flex-end",
        marginRight: -30,
      },
      highlight: {
        fontWeight: '700',
      },
  });
  
  export default LimiteCartoes;