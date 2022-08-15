import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import QA from './components/Questions Answer/QA';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container></Container>
      <QA></QA>
    </div>
  );
}

export default App;
