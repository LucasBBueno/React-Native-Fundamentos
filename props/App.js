import React from "react";
import { Image, Text, View } from "react-native";

/**
 * Para utilizar as props devemos receber como parametro da funcao, e dai acessar elas através do .
 * Por se tratar de um código javascript deve-se usar as {}
 *
 * ao ser executado será exibido Hello I'm junto do nome. Para o ulimo Cat que foi criado não deve ser
 * exibido  'Silva' pois a propriedade 'subname' não está sendo lida
 * 
 * No caso da Image, o source é uma prop
 */
function Cat(props) {
  return (
    <View>
      <Text>Hello I'm {props.name}</Text>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ height: 200, width: 200 }}
      ></Image>
    </View>
  );
}

export default function Cafe() {
  return (
    <View>
      <Cat name="Maria"></Cat>
      <Cat name="Joana"></Cat>
      <Cat subname="Silva"></Cat>
    </View>
  );
}
