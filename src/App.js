import logo from './logo.svg';
import './App.css';
import { Calender } from './components/Calender/Calender';
import { NewBlock } from './components/NewBlock/NewBlock';

function App() {
  return (
    <div className="App">
      <Calender />
      <NewBlock />
    </div>
  );
}

export default App;
