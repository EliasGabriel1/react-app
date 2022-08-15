 import { DataProvider } from './Context/context';
import Cards from './pages/Cards';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Cards/>
      </DataProvider>
    </div>
  );
}

export default App;
