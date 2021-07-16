import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { BlockList } from './components/Block/BlockList';
import { Header } from './components/Header/Header';
import { ModalProvider } from './components/Modal/ModalContext';
import { NewBlockButton } from './components/BlockForm/NewBlockButton';
import { Settings } from './views/Settings';
import { Dashboard } from './views/Dashboard';
import { Blocks } from './views/Blocks';
import { NewBlock } from './views/NewBlock';
import Modal from './components/Modal/Modal';
import { BlockProvider } from './context/Block/BlockContext';

function App() {
  return (
    <ModalProvider>
      <BlockProvider>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
              >
                <Dashboard />
              </Route>

              <Route path="/settings">
                <Settings />
              </Route>

              <Route path="/blocks/new">
                <NewBlock />
              </Route>

              <Route path="/blocks">
                <Blocks />
              </Route>
            </Switch>
          </Router>
        </div>
      </BlockProvider>
    </ModalProvider>
  );
}

export default App;

/*
Paths: dashboard, schedule, settling,
*/
