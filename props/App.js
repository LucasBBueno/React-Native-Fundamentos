import React from 'react'
import { Text, View } from 'react-native'

/**
 * Para utilizar as props devemos receber como parametro da funcao, e dai acessar elas através do .
 * Por se tratar de um código javascript deve-se usar as {}
 * 
 * ao ser executado será exibido Hello I'm junto do nome. Para o ulimo Cat que foi criado não deve ser 
 * exibido  'Silva' pois a propriedade 'subname' não está sendo lida
 */
function Cat(props){
  return (
    <View>
      <Text>Hello I'm {props.name}</Text>
    </View>
  );
}

export default function Cafe(){
  return(
    <View>
      <Cat name="Maria"></Cat>
      <Cat name="Joana"></Cat>
      <Cat name="Cida"></Cat>
      <Cat subname="Silva"></Cat>
    </View>
  );
}