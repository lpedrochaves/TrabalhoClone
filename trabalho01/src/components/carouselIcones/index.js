import { StyleSheet, Image, Text, ScrollView, View ,TouchableOpacity} from 'react-native';

function CarouselIcones() {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.carouselIconesConteiner}>

                <View style={styles.carouselImagens}>
                    <TouchableOpacity
                        style={styles.cartoes}
                        activeOpacity={0.5}>
                        <Image style={styles.carouselImagens} source={require('../../assets/iconesCarousel/iconePix.png')} />
                        <View style={styles} />
                    </TouchableOpacity>
                    <Text>Área pix</Text>
                </View>
                <View style={styles.carouselImagens}>
                    <TouchableOpacity
                        style={styles.cartoes}
                        activeOpacity={0.5}>
                        <Image style={styles.carouselImagens} source={require('../../assets/iconesCarousel/iconBarCode.png')} />
                        <View style={styles} />
                    </TouchableOpacity>
                    <Text>Pagar</Text>
                </View>
                <View style={styles.carouselImagens}>
                    <TouchableOpacity
                        style={styles.cartoes}
                        activeOpacity={0.5}>
                        <Image style={styles.carouselImagens} source={require('../../assets/iconesCarousel/iconMoneyWithdraw.png')} />
                        <View style={styles} />
                    </TouchableOpacity>
                    <Text>Transferir</Text>
                </View>
                <View style={styles.carouselImagens}>
                    <TouchableOpacity
                        style={styles.cartoes}
                        activeOpacity={0.5}>
                        <Image style={styles.carouselImagens} source={require('../../assets/iconesCarousel/iconMoneyDeposit.png')} />
                        <View style={styles} />
                    </TouchableOpacity>
                    <Text>Depositar</Text>
                </View>
                <View style={styles.carouselImagens}>
                    <TouchableOpacity
                        style={styles.cartoes}
                        activeOpacity={0.5}>
                        <Image style={styles.carouselImagens} source={require('../../assets/iconesCarousel/iconInternational.png')} />
                        <View style={styles} />
                    </TouchableOpacity>
                    <Text>Trans. Inter.</Text>
                </View>
                <View style={styles.carouselImagens}>
                    <TouchableOpacity
                        style={styles.cartoes}
                        activeOpacity={0.5}>
                        <Image style={styles.carouselImagens} source={require('../../assets/iconesCarousel/iconPhone.png')} />
                        <View style={styles} />
                    </TouchableOpacity>
                    <Text>Recarga</Text>
                </View>
                <View style={styles.carouselImagens}>
                    <TouchableOpacity
                        style={styles.cartoes}
                        activeOpacity={0.5}>
                        <Image style={styles.carouselImagens} source={require('../../assets/iconesCarousel/iconHeart.png')} />
                        <View style={styles} />
                    </TouchableOpacity>
                    <Text>Doação</Text>
                </View>
                <View style={styles.carouselImagens}>
                    <TouchableOpacity
                        style={styles.cartoes}
                        activeOpacity={0.5}>
                        <Image style={styles.carouselImagens} source={require('../../assets/iconesCarousel/iconMasterTrade.png')} />
                        <View style={styles} />
                    </TouchableOpacity>
                    <Text>Investir</Text>
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    carouselIconesConteiner: {
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 10,
        width: "100%",
        height: 100,
        backgroundColor: "white",
        justifyContent: "space-around",
        borderTopWidth: StyleSheet.hairlineWidth,
    
      },
      carouselImagens: {
        marginLeft: 0,
        padding: 10
      },
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

});

export default CarouselIcones;