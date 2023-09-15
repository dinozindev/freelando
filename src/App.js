import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Styles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { InputText } from "./components/InputText";
import { ProvedorTema } from "./components/ThemeProvider";
import { Tipografia } from "./components/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Styles />
      <Header />
      <Card>
        <Tipografia variante="h1" componente="h1">Crie seu cadastro</Tipografia>
        <Tipografia variante="body" componente="body">Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. </Tipografia>
        <InputText label="Nome Completo"/>
      </Card>
      <Footer />
    </ProvedorTema>
  );
}

export default App;
