import './App.scss';
import FetchFluidSpeed from './components/FetchFluidSpeed';
import MetaData from './components/MetaData';
import ScrapeForBarcodes from './components/ScrapeForBarcodes';
import ScrapeForImages from './components/ScrapeForImages';


function App() {
  return (
    <div className="App">
      <h1>NINA - CREATE A BOTTLE</h1>
      <div className="component-container">
        <ScrapeForImages />
      </div>
      <div className="component-container">
        <ScrapeForBarcodes />
      </div>
      <div className="component-container">
        <FetchFluidSpeed />
      </div>
      <div className="component-container">
        <MetaData />
      </div>
    <div className="component-container">
    <input type="submit" value="Submit" className='submit' />
    </div>
    </div>
  );
}



export default App;
