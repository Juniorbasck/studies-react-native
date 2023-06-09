import React from "react";
import { StyleSheet, Text, Dimensions, View, Image} from "react-native";

import logo from "../../../assets/logo.png";
import  Texto from "../../componentes/texto.js";
import Topo from "./Componetes/Topo.js";


const width = Dimensions.get('screen').width;

export default function Cesta() {

  return <> 

       

       <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de verdeuras</Texto>

            <View style={estilos.fazenda}>

                <Image source={logo} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>

            </View> 
           
            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda
                direto para sua cozinha
            </Texto>

            <Texto style={estilos.preco}>R$ 40,00</Texto>
       </View>
    </>
}  


const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,

    },

    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",   
        fontWeight: "bold",
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
      
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },

    imagemFazenda: {
        width: 32,
        height: 32,
    },
    
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});