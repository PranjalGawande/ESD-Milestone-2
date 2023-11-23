import './App.css';
import './components/MyStyle.css'
import MenuBar from './components/MenuBar';
import './components/MyStyle.css'
import Nav from './components/Nav';
import ProductListing from './components/ProductListing';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <MenuBar/>
      <ProductListing/>
      <Footer/>
    </div>
  );
}

export default App;
