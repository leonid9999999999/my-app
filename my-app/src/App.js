
import './App.css';
import Header from './client/components/header/Header';
import Main from "./client/components/main/main";
import Intro from './client/components/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Header />
      <Main/>
    </div>
  );
}

export default App;
