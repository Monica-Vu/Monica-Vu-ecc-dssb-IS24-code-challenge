import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table/Table';
import products from "./sample_data.js"

function App() {
  return (
    <div className="App">
    <h1> Ministry of Government Applications </h1>
    <Table data={products} />
    </div>
  );
}

export default App;
