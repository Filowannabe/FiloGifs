import './App.css';
import { Detail } from "./pages/Detail/Detail";
import { Home } from "./pages/Home/Home";
import { Route } from "wouter";
import { GifsContextProvider } from './context/gifContext';
import { SearchResults } from './pages/SearchResults/index';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <GifsContextProvider>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword' component={SearchResults} />
          <Route path='/gif/:id' component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
