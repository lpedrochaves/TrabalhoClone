import { StyleSheet,Image,Text,ScrollView,View } from 'react-native';


function Header() {
    return (
        <ScrollView>
            <View style={styles.headerContainer}>
                <Image style={styles.headerImage} source={require('../../assets/header/iconPhotoAdd.png')} />
                <View style={styles.headerViewText}>
                    <Text style={styles.headerText}>Olá,Fulano</Text>
                </View>
                <Image style={styles.headerImage} source={require('../../assets/header/iconEyeShow.png')} />
                <Image style={styles.headerImage} source={require('../../assets/header/iconHelp.png')} />
                <Image style={styles.headerImage} source={require('../../assets/header/iconUserfollow.png')} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        height: 140,
        backgroundColor: "#9400d3",
    },
    headerViewText: {
        justifyContent: "flex-start",
        alignSelf: "flex-end",
    },

    headerText: {
        color: "white",
        marginBottom: 25,
        marginRight: 80,
        marginLeft: -57,
        fontWeight: "700",
        fontSize:15
    },
    headerImage: {
        marginTop: 20,
    },
});

export default Header;