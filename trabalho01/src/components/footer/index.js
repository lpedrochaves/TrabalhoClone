import { StyleSheet, Image, View } from 'react-native';

function Footer() {
    return (
      <View style={styles.footerConteiner}>
        <Image source={require('../../assets/footer/iconArrowSort.png')} />
        <Image source={require('../../assets/footer/iconAttachMoney.png')} />
        <Image source={require('../../assets/footer/iconBag.png')} />
        <Image source={require('../../assets/footer/emojiSoccerBall.png')} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    footerConteiner: {
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        height: 40,
        backgroundColor: "white",
      },
    
  });

  export default Footer;