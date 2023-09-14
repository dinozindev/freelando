import { Card } from "./components/Card";
import { Styles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { ProvedorTema } from "./components/ThemeProvider";

function App() {
  return (
    <ProvedorTema>
      <Styles />
      <Header />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
