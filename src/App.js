import { Col, Container, Row } from "react-grid-system";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Styles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { InputText } from "./components/InputText";
import { ProvedorTema } from "./components/ThemeProvider";
import { Tipografia } from "./components/Tipografia";
import { Button } from "./components/Button";
import { DropdownList } from "./components/DropdownList";

const estadosBrasileiros = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

function App() {
  return (
    <ProvedorTema>
      <Styles />
      <Header />
      <Container style={{marginTop: '80px', marginBottom: '80px'}}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">Crie seu cadastro</Tipografia>
              <Tipografia variante="body" componente="body">Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. </Tipografia>
              <Row>
                <Col>
                  <InputText label="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <DropdownList label={"Estado"} opcoes={estadosBrasileiros}/>
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <InputText label="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputText label="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <InputText label="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <InputText label="Repita a senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Button variante="transparente">Anterior</Button>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{textAlign: 'right'}}>
                    <Button variante="default">Próximo</Button>
                    </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </ProvedorTema>
  );
}

export default App;
