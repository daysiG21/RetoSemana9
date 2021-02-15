import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import NavLeft from './NavLeft'
import Main from './Main'
import AppNavR from './AppNavR'
function App() {
  return (
    <div>
      <Header/>
      <NavLeft/>
      <AppNavR/>
      <Main/>     
      <Footer/>
    </div>
  );
}

export default App;
