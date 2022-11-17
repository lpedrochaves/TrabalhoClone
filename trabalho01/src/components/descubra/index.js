import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList } from 'react-native';


const DATA = [
    {
        id: "1",
        image: () => <Image source={require("../../assets/descubra/img1.jpeg")} />,
    },
    {
        id: "2",
        image: () => <Image source={require("../../assets/descubra/img2.jpeg")} />,
    },
    {
        id: "3",
        image: () => <Image source={require("../../assets/descubra/img3.jpeg")} />,
    },
    {
        id: "4",
        image: () => <Image source={require("../../assets/descubra/img4.jpeg")} />,
    },
    {
        id: "5",
        image: () => <Image source={require("../../assets/descubra/img5.jpeg")} />,
    },
    {
        id: "6",
        image: () => <Image source={require("../../assets/descubra/img6.jpeg")} />,
    },
    {
        id: "7",
        image: () => <Image source={require("../../assets/descubra/img7.jpeg")} />,
    },
    {
        id: "8",
        image: () => <Image source={require("../../assets/descubra/img8.jpeg")} />,
    },
]


function Descubra() {
    return (
        <View style={styles.dimensaoCartoes}>

<Text style={styles.contaText1}>Descubra mais</Text>
             <FlatList
      horizontal
      data={DATA}
      renderItem={({item}) => {
        return (
          <TouchableOpacity 
          style={styles.imagemFlatlist}
          activeOpacity={0.5}>
            {item.image()}
          </TouchableOpacity>
        );
      }}
    /> 
        </View>
    )
}

const styles = StyleSheet.create({
    contaText1: {
        marginTop: 10,
        marginLeft: 0,
        fontWeight: "700",
        fontSize:15
    
    },

    dimensaoCartoes: {
        width: "90%",
        height: 350,
        justifyContent: "center",
        marginLeft: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
   
    imagemCartoes: {
        padding: 10,
        marginLeft: 45
    },
    imagemFlatlist: {
        width: 200,
        resizeMode: 'contain',
        marginLeft:30,
        marginTop:17
    },
});

export default Descubra;