import React from "react";
import Header from "../../components/Header";
import CardsSession from "./components/CardsSession";
import WelcomeBanner from "./components/WelcomeBanner";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <WelcomeBanner />
      <CardsSession title="Meus cursos em andamento" />
      <CardsSession title="Experimente nossos outros cursos" />
    </Container>
  );
}
