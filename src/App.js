import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { BlockCard } from './components/Block/BlockCard';
import { BlockList } from './components/Block/BlockList';
import { Calender } from './components/Calender/Calender';
import { Header } from './components/Header/Header';
import { ModalProvider } from './components/Modal/ModalContext';
import { NewBlock } from './components/NewBlock/NewBlock';
import { NewBlockButton } from './components/NewBlock/NewBlockButton';
import { Settings } from './views/Settings';
import { Dashboard } from './views/Dashboard';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Router>
          <Header />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
              </Switch>
            </div>
          </main>
        </Router>
      </div>
    </ModalProvider>
  );
}
function Home() {
  return (
    <>
      <NewBlockButton />
      {/* <BlockCard /> */}
      <BlockList />
    </>
  );
}

export default App;

/*
Paths: dashboard, schedule, settling,
*/
