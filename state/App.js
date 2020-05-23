import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function Cat(props) {
  //Padrões: isHungrry = getter, e o setIsHungry = setter
  const [isHungry, setIsHungry] = useState(true); //ira fazer o track do tipo de data boolean como valor inicial true

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      ></Button>
    </View>
  );
}

export default function Cafe() {
  return (
    <>
      <Cat name="Catalina"></Cat>
      <Cat name="Jose"></Cat>
    </>
  );
}
