import React from "react";
import { Fundo, Titulo, Texto } from "./styles";

export default function Home() {
  return(
    <Fundo>
      <Titulo fontSize={'50px'}>Home</Titulo>
      <Texto>Texto menor</Texto>
    </Fundo>
  )
}
