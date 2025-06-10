import './App.css'; /* File to style the whole App */
import Header from './components/Header';
import Menu from './components/Menu';
import InventoryList from './components/InventoryList';
import Footer from './components/Footer';

/* 
 * App component acts as the root layout for the application
 * It is made from 5 different components
*/
function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <Header/>
      </header>
      {/* Top Navigation Menu */}
      <Menu/>
      {/* Inventory List and Items */}
      <main>
        <InventoryList/>
      </main>
      {/* Footer Section */}
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App;