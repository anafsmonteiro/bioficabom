import styled from 'styled-components';
import Header from './componentes/Header'
import Contatos from './componentes/Contatos';
import Sessao from './componentes/Sessao';
import Footer from './componentes/Footer';

const AppContainer = styled.div`
text-align: center;
display: flex;
flex-direction: column;
background-color: #f5f5f5;
`

function App() {

  return (
    <AppContainer className="App">
      <Header />
      <Contatos />
      <Sessao />
      <Footer />
    </AppContainer>
  );
}

export default App;
