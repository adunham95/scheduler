import './App.css';
import { Calender } from './components/Calender/Calender';
import { ModalProvider } from './components/Modal/ModalContext';
import { NewBlock } from './components/NewBlock/NewBlock';
import { NewBlockButton } from './components/NewBlock/NewBlockButton';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <NewBlockButton />
      </div>
    </ModalProvider>
  );
}

export default App;
