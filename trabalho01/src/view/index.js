import { View,ScrollView } from "react-native";
import Header from "./components/header";
import Conta from "./components/conta";
import CarouselIcones from "./components/carouselIcones";
import Cartoes from "./components/cartoes";
import LimiteCartoes from "./components/limiteCartoes";
import Acompanhe from "./components/acompanhe";
import Descubra from "./components/descubra";
import Emprestimo from "./components/emprestimo";
import Footer from "./components/footer";
import Variados from "./components/variados";



function Home(){
    return(
        <ScrollView>
        <View>
          <Header />
          <Conta />
          <CarouselIcones />
          <Cartoes />
          <Variados/>
          <LimiteCartoes />
          <Acompanhe />
          <Emprestimo/>
          <Descubra />
          <Footer />
        </View>
      </ScrollView>
    )
}
export default Home;