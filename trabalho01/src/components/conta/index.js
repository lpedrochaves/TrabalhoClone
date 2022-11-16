
import { StyleSheet,Image,Text,View } from 'react-native';
function Conta() {
    return (
      <View>
        <View style={styles.contaContainer}>
          <Text style={styles.highlight}>Conta</Text>
          <Image style={styles.contaImage} source={require('../../assets/genericos/iconArrowright.png')} />
        </View>
        <Text style={styles.contaText1}>R$ 2.042,07</Text>
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

  export default Conta;