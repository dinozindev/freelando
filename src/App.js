import { Card } from "./components/Card";
import { Styles } from "./components/GlobalStyles";
import { ProvedorTema } from "./components/ThemeProvider";

function App() {
  return (
    <ProvedorTema>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
