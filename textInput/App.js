import React, { Component, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

/**
 * Utilizou o TextInput para armazenar o valor digitado pelo usuario no estado de text,
 * Cada vez que o texto for alterado é chamado o setText com o valor que foi digitado.
 *
 * Transforma cada letra digitada em uma pizza 🍕
 */
export default function PizzaTranslator() {
  const [text, setText] = useState("");

  return (
    <View style={{ padding: 30 }}>
      <TextInput
        style={{ height: 40, backgroundColor: "#DDDD" }}
        placeholder="Digite para traduzir em pizza"
        defaultValue={text}
        onChangeText={(text) => setText(text)}
      ></TextInput>
      <Text style={{ padding: 30, fontSize: 42 }}>
        {text
          .split("")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
      <Button title="Limpar" onPress={() => setText("")}></Button>
    </View>
  );
}
