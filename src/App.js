import './App.css';
import { Calender } from './components/Calender/Calender';
import { Header } from './components/Header/Header';
import { ModalProvider } from './components/Modal/ModalContext';
import { NewBlock } from './components/NewBlock/NewBlock';
import { NewBlockButton } from './components/NewBlock/NewBlockButton';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Header />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <NewBlockButton />
          </div>
        </main>
      </div>
    </ModalProvider>
  );
}

export default App;
