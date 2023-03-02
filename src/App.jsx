import { ServicesContextProvider } from "./context/contexto";
import List from "./pages/list";

function App() {
  return (
    <div className="App">
      <ServicesContextProvider>
        <List />
      </ServicesContextProvider>
    </div>
  );
}

export default App;
